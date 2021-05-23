const express = require("express");
const response = require("./ServerSeed/seed")
const app = express();
const port  = process.env.PORT || 8080;

app.use(express.json());
app.use(express.urlencoded({extended: false}))

app.get("/api/products",async (req,res) => {
    try {
        let data = await response();
        if(!data) {
            throw new Error();
        }
        data = data.map(item => (
            // Math.round((Math.random()*5 + Number.EPSILON)*100)/100 -> round a decimal number to it's 2 places
            {...item,
                rating: Math.round(((Math.random() * (5 - 2 + 1) + 2) + Number.EPSILON)*100)/100,
                reviews: Math.floor(Math.random() * 100)+1,
                stock: Math.floor(Math.random() * 100)
            }
        ))
        res.json(data);
    }
    catch(e) {
        res.status(500).send(e)
    }
})
app.get("/api/products/:id",async (req,res) => {
    try {
        const data = await response();
        if(!data) {
            throw new Error();
        }
        let product = data.find(p => p.id === parseInt(req.params.id,10));
        product =  {...product,
            rating: Math.round(((Math.random() * (5 - 2 + 1) + 2) + Number.EPSILON)*100)/100,
            reviews: Math.floor(Math.random() * 100)+1,
            stock: Math.floor(Math.random() * 100)
        }
        if(!product) {
            return res.status(404).json({message: "Product not found!"})
        }
        res.json(product);
    }
    catch(e) {
        res.status(500).send(e)
    }
})

app.get("/",(req,res) => {
    res.send("Server is ready!")
})

app.listen(port, () => {
    console.log("App is alive on http://localhost:"+port);
})