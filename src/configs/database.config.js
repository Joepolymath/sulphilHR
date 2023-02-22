const mongoose = require('mongoose');
const { cli } = require('winston/lib/winston/config');

const connectDB = async (uri) => {
  try {
    const conn = await mongoose.connect(uri);
    console.log(
      `Database connection is successful. ${conn.connection.host}...`.green
    );
  } catch (error) {
    console.info(`${error}`.bold.red);
  }
};

module.exports = connectDB;
