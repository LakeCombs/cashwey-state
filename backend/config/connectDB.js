const mongoose = require("mongoose");
const URI = process.env.MONGO_URI;

const connectDB = async () => {
  try {
    const connect = await mongoose.connect(URI, {
      useUnifiedTopology: true,
      useNewUrlParser: true,
    });
    console.log(`Mongo connected:${connect.connection.host}`);
  } catch (error) {
    console.error(`Error: ${error.message}`);
    process.exit();
  }
};

module.exports = connectDB;
