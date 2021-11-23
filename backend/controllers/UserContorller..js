const asyncHandler = require("express-async-handler");
const User = require("../model/userModel");
const generateToken = require("../utils/generateToken");

const authUser = asyncHandler(async (req, res) => {
  const { email, password } = req.body;

  const user = await User.findOne({ email });
  if (user && (await user.matchPassword(password))) {
    res.json({
      _id: user._id,
      name: user.name,
      email: user.email,
      isAdmin: user.isAdmin,
      pic: user.pic,
      token: generateToken(user._id),
    });
  } else {
    res.status(401);
    throw new Error("Invalid Email or Password");
  }
});

const registerUser = asyncHandler(async (req, res) => {
  const { name, email, password, pic, isAdmin } = req.body;

  const userExist = await User.findOne({ email });
  if (userExist) {
    res.status(404);
    throw new Error("User already exists");
  }
  const newUser = await User.create({
    name,
    email,
    password,
    pic,
    isAdmin,
  });

  if (newUser) {
    res.status(201).json({
      _id: newUser._id,
      name: newUser.name,
      email: newUser.email,
      isAdmin: newUser.isAdmin,
      pic: newUser.pic,
      token: generateToken(newUser._id),
    });
  } else {
    res.status(400);
    throw new Error("User now found");
  }
});

const updateUserProfile = asyncHandler(async (req, res) => {
  const user = await User.findById(req.user._id);

  if (user) {
    (user.name = req.body.name || user.name),
      (user.email = req.body.email || user.email),
      (user.pic = req.body.pic || user.pic);
    if (req.body.password) {
      user.password = req.body.password;
    }
  }

  const updatedUser = await user.save();
});

// const forgotPassword = asyncHandler(async (req, res) => {
//   const { email } = req.body;

//   try {
//     const user = await User.findOne({ email });
//     if (!user) {
//       res.status(404);
//       throw new Error("Email could not be found");
//     }
//     const resetToken = user.getResetPasswordToken();

//     await user.save();

//     const resetUrl = `https://localhost:4453/passwordreset/${resetToken}`;

//     const message = `
//       <h1>You have requested a password reset </h1>
//       <p>Please go to this to the reset link </p>
//       <a href = ${resetUrl} clicktracking=off>${resetUrl}</a>
//     `;

//     try {

//     } catch (error) {

//     }
//   } catch (error) {}
// });

module.exports = {
  authUser,
  registerUser,
  updateUserProfile, //forgotPassword
};
