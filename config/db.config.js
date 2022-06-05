const mongoose = require('mongoose')
require('dotenv').config();

const DB_PASSWORD = process.env.DB_PASSWORD

const DB_URI = `mongodb+srv://STClinkShortner:${DB_PASSWORD}@cluster0.fewup4x.mongodb.net/test`

mongoose.connect(DB_URI,{useNewUrlParser:true, useUnifiedTopology:true})

const connection = mongoose.connection

module.exports = connection
