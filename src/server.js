const dotenv = require('dotenv');
const app = require('./app');
const connectDB = require('./configs/database.config');

dotenv.config();

// connecting to database
connectDB(process.env.DATABASE_URI);

const PORT = process.env.PORT || 3001;

app.listen(PORT, () => {
  console.log(`Backend is blazing 🔥🔥🔥 @ port ${PORT}`);
});
