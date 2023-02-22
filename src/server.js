const dotenv = require('dotenv');
require('colors');
const app = require('./app');
const logger = require('./configs/logger.config');
const connectDB = require('./configs/database.config');

dotenv.config();

// connecting to database
connectDB(process.env.DATABASE_URI);

const PORT = process.env.PORT || 3001;

app.listen(PORT, () => {
  logger.info(`Backend is blazing 🔥🔥🔥 @ port ${PORT}`.bold.yellow);
  //   console.log(`Backend is blazing 🔥🔥🔥 @ port ${PORT}`);
});
