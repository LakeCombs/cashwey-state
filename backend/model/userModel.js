const mongoose = require("mongoose");
const crypto = require("crypto");
const bcrypt = require("bcryptjs");
const { isEmail } = require("validator");

const userSchema = mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },

    email: {
      type: String,
      required: [true, "Please enter an email "],
      unique: true,
      validate: [isEmail, "Please enter a valid email"],
    },
    isAdmin: {
      type: Boolean,
      required: true,
      default: false,
    },
    password: {
      type: String,
      requied: [true, "Please enter a password"],
      minlength: [4, "Minimum password length is 4 characters  "],
    },
    pic: {
      type: String,
      required: true,
      default:
        "https://images.squarespace-cdn.com/content/v1/54b7b93ce4b0a3e130d5d232/1519987020970-8IQ7F6Z61LLBCX85A65S/icon.png?format=1000w",
    },
  },
  { timestamps: true }
);

userSchema.methods.matchPassword = async function (enteredPassword) {
  return await bcrypt.compare(enteredPassword, this.password);
};

userSchema.pre("save", async function (next) {
  if (!this.isModified("password")) {
    next();
  }
  const salt = await bcrypt.genSalt(10);
  this.password = await bcrypt.hash(this.password, salt);
});

// userSchema.methods.getResetPasswordToken = function () {
//   const resetToken = crypto.randomBytes(20).toString("hex");

//   this.resetPasswordToken = crypto
//     .createHash("process.env.JWT_SECRET")
//     .update(resetToken)
//     .digest("hex");
//   this.resetPasswordExpires = Date.now() + 10 * (60 * 1000);

//   return resetToken;
// };
module.exports = mongoose.model("User", userSchema);
