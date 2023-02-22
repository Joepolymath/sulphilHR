const express = require('express');
const morgan = require('morgan'); // this will console log every request details on the terminal
const bodyParser = require('body-parser');
const helmet = require('helmet');
const dotenv = require('dotenv');
const cors = require('cors'); // allows other servers to access these APIs
const errorHandler = require('./middlewares/errorHandler.middleware');

// importing routers
const userRoutes = require('./routes/users.route');

// initializing dotenv
dotenv.config(); // this is to help load the data you have in your .env file.

const app = express();

// initilizing middlewares
app.use(morgan('dev'));
app.use(helmet());
app.use(bodyParser.json());
app.use(`${process.env.BASE_URL}/users`, userRoutes);
app.use(errorHandler);
app.use(cors());

app.get('/', (req, res) => {
  res.status(200).json({ message: 'Welcome', status: 'success' });
});

module.exports = app;
