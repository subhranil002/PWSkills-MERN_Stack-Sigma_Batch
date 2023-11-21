import { model, Schema } from "mongoose";

const paymentSchema = new Schema(
    {
        rozorpay_payment_id: {
            type: String,
            required: true,
        },
        rozorpay_subscription_id: {
            type: String,
            required: true,
        },
        rozorpay_signature: {
            type: String,
            required: true,
        },
    },
    {
        timestamps: true,
    }
);

const Payment = model("Payment", paymentSchema);

export default Payment;
