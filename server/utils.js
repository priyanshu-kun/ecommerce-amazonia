const jwt = require("jsonwebtoken");
const generateTokens = ({_id,email,name,password,isAdmin}) => {
    return jwt.sign({
        _id,
        email,
        name,
        password,
        isAdmin
    },process.env.JWT_SECRET,{expiresIn: "30d"})
}

module.exports = generateTokens;