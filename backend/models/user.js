import mongoose from "mongoose";

const userSchema = new mongoose.Schema(
	{
		name: { type: String, required: true },
		email: { type: String, required: true, unique: true },
		mobile: { type: String, required: true, unique: true },
		password: { type: String, required: true },
		packName: { type: String , default : ""}, // subscription purchased by user
		packPrice: { type: Number  , default : 0}, // subscription ki price
		transactionId: { type: Array  , default : []}, // if subscription purchased
		isCouponApplied: { type: Boolean, default: false }, // 
		CouponName: { type: String, default: "" }, // Name of coupon
		serviceCount: { type: Number, default: 1 }, // No. of times user has created PDF.
		isAdmin : {type : Boolean, default : false},
		isVerified : {type : Boolean, default : false}
		
	},
	{ timestamps: true }
);

const User = mongoose.model("User", userSchema);

export default User;