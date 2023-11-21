import { config } from "dotenv";
config();
import User from "../models/user.model.js";
import AppError from "../utils/error.util.js";
import razorpayinstance from "../config/razorpayConfig.js";
import crypto from "crypto";
import Payment from "../models/payment.model.js";

const getRazorpayApiKey = (req, res, next) => {
    res.status(200).json({
        success: true,
        message: "Razorpay API Key",
        key: process.env.RAZORPAY_KEY_ID,
    });
};

const buySubscription = async (req, res, next) => {
    try {
        const { id } = req.user;

        const user = await User.findById(id);

        if (user.role === "ADMIN") {
            return next(
                new AppError("Admin cannot purchase a subscription", 400)
            );
        }

        const subscription = await razorpayinstance.subscriptions.create({
            plan_id: process.env.RAZORPAY_PLAN_ID,
            customer_notify: 1,
        });

        user.subscription.id = subscription.id;
        user.subscription.status = subscription.status;

        await user.save();

        res.status(200).json({
            success: true,
            message: "Successfully subscribed",
            subscription_id: subscription.id,
        });
    } catch (error) {
        return next(new AppError(error.message, 500));
    }
};

const verifySubscription = async (req, res, next) => {
    try {
        const {
            rozorpay_payment_id,
            rozorpay_subscription_id,
            rozorpay_signature,
        } = req.body;

        const id = req.user.id;

        const user = await User.findById(id);

        const subscription_id = user.subscription.id;

        const generatedSignature = crypto
            .createHmac("sha256", process.env.RAZORPAY_SECRET)
            .update(`${rozorpay_payment_id}|${subscription_id}`)
            .digest("hex");

        if (generatedSignature !== rozorpay_signature) {
            return next(new AppError("Payment not verified, please try again", 400));
        }

        const payment = await Payment.create({
            rozorpay_payment_id,
            rozorpay_subscription_id,
            rozorpay_signature,
        });

        await payment.save();

        user.subscription.status = "active";
        await user.save();

        res.status(200).json({
            success: true,
            message: "Payment verified successfully",
        });
    } catch (error) {
        return next(new AppError(error.message, 500));
    }
};

const cancelSubscription = async (req, res, next) => {
    try {
        const id = req.user.id;

        const user = await User.findById(id);

        if (user.role === "ADMIN") {
            return next(
                new AppError("Admin cannot purchase a subscription", 400)
            );
        }

        const subscription_id = user.subscription.id;

        const cancel = await razorpayinstance.subscriptions.cancel({
            subscription_id,
        });

        user.subscription.status = cancel.status;

        await user.save();
    } catch (error) {
        return next(new AppError(error.message, 500));
    }
};

const allPayments = async (req, res, next) => {
    try {
        const { count } = req.query;

        const subscriptions = await razorpayinstance.subscriptions.all({
            count: count || 10,
        });

        res.status(200).json({
            success: true,
            message: "All payments",
            subscriptions,
        });
    } catch (error) {
        return next(new AppError(error.message, 500));
    }
};

export {
    getRazorpayApiKey,
    buySubscription,
    verifySubscription,
    cancelSubscription,
    allPayments,
};
