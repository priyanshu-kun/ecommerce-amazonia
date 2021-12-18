
const mongoose = require("mongoose")

function DBConnect() {
    const DB_URL = process.env.MONGO_URI || "mongodb://localhost:27017/amazonia"
    mongoose.connect(DB_URL,{ useUnifiedTopology: true } )
    const db = mongoose.connection
    db.on("error", console.error.bind(console, "connection error:"))
    db.once('open', () => {
        console.log("DB connected...")
    })
}

module.exports = DBConnect