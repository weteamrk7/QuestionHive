import bcrypt from "bcryptjs";
import User from '../models/user.js';
import generateTokenAndSetCookie from "../utils/generateToken.js";

const signup = async (req, res) => {
  try {
	
    const { name, email, mobile, password } = req.body;

    const existingUser = await User.findOne({ email }) || await User.findOne({ mobile });
    if (existingUser) {
      return res.status(400).json({ message: "User already exists." });
	}
    const hashedPassword = await bcrypt.hash(password, 10);

    const newUser = new User({
		name,
		email,
		mobile,
		password: hashedPassword,
    });
	
	
    let user = await newUser.save();
	
	let token = generateTokenAndSetCookie(user._id, res);
	

    res.status(201).json({ message: "User created successfully." , user : newUser, token});
  } catch (error) {
    res.status(500).json({ message: "Error creating user.", error: error.message });
  }
};

const login = async (req, res) => {
  try {
    const { email, password } = req.body;

    
    const user = await User.findOne({ email });
    if (!user) {
      return res.status(404).json({ message: "User not found." });
    }

    

    const isPasswordValid = await bcrypt.compare(password, user.password);
    if (!isPasswordValid) {
      return res.status(400).json({ message: "Invalid credentials." });
    }
	
	let token = generateTokenAndSetCookie(user._id, res);
	// user.access_token = token;
	// await user.save();

    res.status(200).json({ message: "Login successful." , user, token});
  } catch (error) {
    res.status(500).json({ message: "Error logging in.", error: error.message });
  }
};

const logout = async (req, res) => {
  
	let token = req.cookies.token;
    res.clearCookie("token");
    res.status(200).json({ message: "Logout successful." , token});
  
};
const getUser = async (req, res) => {
  try {
    let user = req.user;
    res.status(200).json({ user });    
  } catch (e) {
    res.status(400).json({
      message : "some internal server error!",
      error : e
    })
  }
};


const updateCredits = async (req, res) => {
  try {
    const { qty, sign, coupon } = req.body;

    if (typeof qty !== 'number' || typeof sign !== 'number') {
      return res.status(400).json({ message: 'Invalid request data' });
    }

    
    const userId = req.user._id; 
    const user = await User.findById(userId);

    if (!user) {
      return res.status(404).json({ message: 'User not found' });
    }

    
    if (sign === 0) {
      user.serviceCount = Math.max(0, user.serviceCount - qty); 
    } else if (sign === 1) {
      user.serviceCount += qty;
    } else {
      return res.status(400).json({ message: 'Invalid sign value' });
    }

    // Update coupon details if coupon is provided
    if (coupon) {
      user.isCouponApplied = true;
      user.CouponName = coupon;
    }

    // Save updated user data
    await user.save();

    // Respond with success and updated user data
    res.status(200).json({
      message: 'Credits updated successfully',
      user,
    });
  } catch (e) {
    console.error(e);
    res.status(500).json({
      message: 'Some internal server error!',
      error: e.message,
    });
  }
};

export { signup, login, logout ,getUser,updateCredits };
