
const DATABASE_URL = 'mongodb://localhost:27017/car-app-2021';

const mongoose = require('mongoose');

const connectDb = () => {
    return mongoose.connect(DATABASE_URL, { useNewUrlParser: true, useCreateIndex: true ,useUnifiedTopology: true});
};

var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function () {
    console.log('Succesfully connected to database...');
})

module.exports = (app) => {
    connectDb();
};