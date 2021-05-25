const express = require("express");
// eslint-disable-next-line no-unused-vars
const userResponse = require("../ServerSeed/user.seed")
const userModal = require("../models/users.model")
const bcrypt = require("bcryptjs");
const  generateTokens = require("../utils");
const router = express.Router()

router.get("/seed",async (req,res) => {
   try {
    // await userModal.deleteMany({})
    const createdUsers = await userModal.insertMany(userResponse.users)
    res.send({createdUsers})
   }
   catch(e) {
       res.status(500).json({error: e.writeErrors[0].errmsg})
   }
})

router.post("/signin",async (req,res) => {
   try {
       console.log(req.body)
        const {email,password} = req.body;
        const user = await userModal.findOne({email});
        if(!user || !bcrypt.compareSync(password,user.password)) {
            return res.status(401).json({message: "Invalid username or password"})
        }
        res.json({
            _id: user._id,
            email: user.email,
            password: user.password,
            isAdmin: user.isAdmin,
            token: generateTokens(user)
        })
   }
   catch(e) {
        res.status(500).json(e)
   }
})

module.exports = router;