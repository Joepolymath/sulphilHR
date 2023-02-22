const mongoose = require('mongoose');

const connectDB = async (uri) => {
  try {
    const conn = await mongoose.connect(uri);
    console.info(`Database connection is successful. ${conn.connection.host}`);
  } catch (error) {}
};

module.exports = connectDB;
