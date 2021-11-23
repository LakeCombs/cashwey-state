const express = require("express");
const {
  authUser,
  registerUser,
  updateUserProfile,
} = require("../controllers/UserContorller.");
const { protect } = require("../middlewares/PrivateMiddleware");

const router = express.Router();

router.route("/").post(authUser);
router.route("/register").post(registerUser);
router.route("/updateuser").post(protect, updateUserProfile);

module.exports = router;
