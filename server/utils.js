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

const isAuth = (req,res,next) => {
    const authorization = req.header.authorization;
    console.log("Boom: ",req)
    if(!authorization) {
       return res.status(401).json({message: "Token not found"})
    }
    const token = authorization.slice(7,authorization.length);
    jwt.verify(token, process.env.JWT_SECRET,(err,decode) => {
        if(err) {
           return res.status(401).json({message: 'Invalid token'})
        }
        req.user = decode
        next()
    });
}

module.exports = {generateTokens,isAuth};