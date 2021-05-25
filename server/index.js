const express = require("express");
require("./DB/db.config")
const app = express();
const port  = process.env.PORT || 8080;

app.use(express.json());
app.use(express.urlencoded({extended: false}))


app.use("/api/products",require("./routes/product.routes"))
app.use("/api/users",require("./routes/users.routes"))


app.get("/",(req,res) => {
    res.send("Server is ready!")
})

app.listen(port, () => {
    console.log("App is alive on http://localhost:"+port);
})