require("dotenv").config()
const express = require("express");
require("./DB/db.config")()
const app = express();
const cors = require("cors");
const path = require("path")
const port  = process.env.PORT || 8080;

app.use(express.json());
app.use(express.urlencoded({extended: false}))
app.use(cors({
    origin: ["https://condescending-engelbart-cde5d8.netlify.app","http://localhost:3000"], 
    credentials: true,
    methods: "GET,HEAD,PUT,PATCH,POST,DELETE",
    preflightContinue: false,
    optionsSuccessStatus: 204
}))

app.use("/api/products",require("./routes/product.routes"))
app.use("/api/users",require("./routes/users.routes"))
app.use("/api/order",require("./routes/order.routes"))
app.use("/api/config/paypal",(req,res) => {
    res.send(process.env.PAYPAL_CLIENT_ID || 'sb')
})

app.get("/",(req,res) => {
    res.send("Server is ready!")
})

// Serve static assets if in production
//if (process.env.NODE_ENV === "production") {

    // Set static folder
    // All the javascript and css files will be read and served from this folder
    //app.use(express.static("client/build"));
  
    // index.html for all page routes  html or routing and naviagtion
    //app.get("*", (req, res) => {
      //res.sendFile(path.resolve(__dirname, "../client", "build", "index.html"));
    //});
//}

app.listen(port, () => {
    console.log("App is alive on http://localhost:"+port);
})
