require('dotenv').config();
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors'); // Import the cors middleware
const morgan = require('morgan'); // Import morgan
const authRoutes = require('./routes/auth');
const brokerRoutes = require('./routes/broker');
const userRoutes = require('./routes/user');
const emailRoutes = require('./routes/email');
const sequelize = require('./database');
const models = require('./models'); // Import models to sync

const app = express();

// Use morgan to log requests to the console
app.use(morgan('dev'));

app.use(cors()); // Use the cors middleware
app.use(bodyParser.json());


app.use('/auth', authRoutes);
app.use('/brokers', brokerRoutes);
app.use('/users', userRoutes);
app.use('/email', emailRoutes);


sequelize.sync({ alter: true }).then(() => {
  app.listen(3000, () => {
    console.log('Server is running on port 3000');
  });
});
