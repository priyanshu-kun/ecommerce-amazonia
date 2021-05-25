const express = require("express");
// eslint-disable-next-line no-unused-vars
const response = require("../ServerSeed/user.seed")
const userModal = require("../models/users.model")
const router = express.Router()

router.get("/seed",async (req,res) => {
   try {
    await userModal.remove({})
    const createdUsers = await userModal.insertMany(response.users)
    res.send({createdUsers})
   }
   catch(e) {
       res.status(500).json({error: e.writeErrors[0].errmsg})
   }
})

module.exports = router;