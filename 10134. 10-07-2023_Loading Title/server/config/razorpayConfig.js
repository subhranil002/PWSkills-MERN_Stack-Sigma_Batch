import Razorpay from "razorpay";
import { config } from "dotenv";
config();

const razorpayinstance = new Razorpay({
    key_id: process.env.RAZORPAY_KEY_ID,
    key_secret: process.env.RAZORPAY_SECRET,
});

export default razorpayinstance;
