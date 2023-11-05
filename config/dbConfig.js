const mongoose = require("mongoose")
require('dotenv').config()
mongoose.connect(process.env.MONGODB_URL)

const connection = mongoose.connection;
connection.on("connected", () => {
    console.log("mongodb is connected")
})

connection.on("error", (err) => {
    console.log(err)
})

module.exports = connection