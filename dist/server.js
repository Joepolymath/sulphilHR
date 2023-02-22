"use strict";

const app = require('./app');
const dotenv = require('dotenv');
dotenv.config();
const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
  console.log(`Backend is blazing 🔥🔥🔥 @ port ${PORT}`);
});