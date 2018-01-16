var mongoose = require("mongoose");

var MONGODB_URI = 'mongodb://fouad:fouad@ds159187.mlab.com:59187/udemy';

mongoose.Promise = global.Promise;
mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost:27017/TodoApp');

module.exports = {mongoose};

//mongodb://localhost:27017/TodoApp
//mongodb://<dbuser>:<dbpassword>@ds159187.mlab.com:59187/udemy