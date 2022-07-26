const mongoose = require("mongoose");
require("dotenv").config();

const DB_URI = process.env.DB_URI;

mongoose.connect(DB_URI, { useNewUrlParser: true, useUnifiedTopology: true });

const connection = mongoose.connection;

module.exports = connection;
