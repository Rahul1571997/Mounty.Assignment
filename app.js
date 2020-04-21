// app.js

const express = require('express');
const bodyParser = require('body-parser');

const hotel = require('./routes/hotel.route'); // Imports routes for the hotel
const app = express();

// Set up mongoose connection
const mongoose = require('mongoose');
let dev_db_url = 'mongodb://ahul1234mlab.com:23619/hotelapp';
const mongoDB = process.env.MONGODB_URI || dev_db_url;
mongoose.connect(mongoDB);
mongoose.Promise = global.Promise;
const db = mongoose.connection;
db.on('error', console.error.bind(console, 'MongoDB connection error:'));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));
app.use('/hotel', hotel);

let port = 1234;

app.listen(port, () => {
    console.log('Server is up and running on port numner ' + port);
});