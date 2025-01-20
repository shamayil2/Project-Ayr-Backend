const mongoose = require("mongoose")
require("dotenv").config()

const mongoUri = process.env.MONGODB

const initializeDatabase = async() => {

    try {
        await mongoose.connect(mongoUri)
            .then(() => console.log("Connected to Database"))
            .catch((error) => console.log(error))
    } catch (error) {
        console.log("Cannot connect to db", error)
    }

}

module.exports = { initializeDatabase }