const mongoose = require("mongoose");

mongoose.connect(process.env.MONGO_URI || "mongodb://localhost:27017/amazonia",
    {
        useNewUrlParser: true,
        useCreateIndex: true,
        useFindAndModify: true,
        useUnifiedTopology: true
    })
    .then(() => {
        console.log("DATABASE - connect successfully with server")
    })
    .catch(e => {
        console.log(e)
    })