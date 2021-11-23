const asyncHandler = require("express-async-handler");
const Transaction = require("../model/Transaction");

const CreateTransacton = asyncHandler(async (req, res) => {
  const { amount, type } = req.body;
  if (!amount || !type) {
    res.status(400);
    throw new Error("please fill in all the field");
  } else {
    const newTransaction = new Transaction({
      amount,
      type,
      userName: req.user.name,
      user: req.user._id,
    });

    const createdTransaction = await newTransaction.save();
    res.status(201).json(createdTransaction);
  }
});

const getTransactions = asyncHandler(async (req, res) => {
  const transactions = await Transaction.find({ user: req.user._id });
  res.json(transactions);
});

const getTransactionBId = asyncHandler(async (req, res) => {
  const transaction = await Transaction.findById(req.params.id);

  if (transaction) {
    res.json(transaction);
  } else {
    res.status(400).json({ messsge: "Transacton not found" });
  }
  res.json(transaction);
});

module.exports = {
  CreateTransacton,
  getTransactions,
  getTransactionBId,
};
