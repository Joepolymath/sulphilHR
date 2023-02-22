const express = require('express');
const morgan = require('morgan'); // this will console log every request details on the terminal
const cors = require('cors'); // allows other servers to access these APIs
const errorHandler = require('./middlewares/errorHandler.middleware');
const dotenv = require('dotenv');

// initializing dotenv
dotenv.config();

const app = express();

// initilizing middlewares
app.use(morgan('dev'));
console.log(process.env.BASE_URL);
app.use(`${process.env.BASE_URL}/users`, require('./routes/users.route'));
app.use(errorHandler);
app.use(cors());

app.get('/', (req, res) => {
  res.status(200).json({ message: 'Welcome', status: 'success' });
});

module.exports = app;
