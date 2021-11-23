const express = require("express");
const cors = express("cors");
require("dotenv").config();
const PORT = process.env.PORT;
const connectDB = require("./config/connectDB");
const { notFound, errorHandler } = require("./middlewares/errorMiddleware");
const userRouter = require("./routes/UserRoutes");
const transaction = require("./routes/TransactionRoute");

const app = express();
connectDB();

app.get("/", (req, res) => {
  res.send("hello lake i am starting again");
});
app.use(express.json());
app.use(cors);
app.use("/api/auth", userRouter);
app.use("/api/transaction", transaction);

app.use(notFound);
app.use(errorHandler);
const server = app.listen(PORT, () => {
  console.log(`app is listening to PORT ${PORT}`);
});

process.on("unhandledRejection", (err, promise) => {
  console.log(`logged error: ${err}`);
  server.close(() => process.exit(1));
});
