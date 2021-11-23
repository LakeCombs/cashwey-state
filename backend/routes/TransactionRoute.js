const express = require("express");
const {
  CreateTransacton,
  getTransactions,
  getTransactionBId,
} = require("../controllers/TransactionController");
const { protect } = require("../middlewares/PrivateMiddleware");

const router = express.Router();

router.route("/").post(protect, CreateTransacton);
router.route("/").get(protect, getTransactions);
router.route("/:id").get(protect, getTransactionBId);

module.exports = router;
