const express = require("express");
const response = require("./ServerSeed/seed")
const app = express();
const port  = process.env.PORT || 8080;

app.use(express.json());
app.use(express.urlencoded({extended: false}))

app.get("/api/products",async (req,res) => {
    const data = await response();
    res.json(data);
})

app.get("/",(req,res) => {
    res.send("Server is ready!")
})

app.listen(port, () => {
    console.log("App is alive on http://localhost:"+port);
})