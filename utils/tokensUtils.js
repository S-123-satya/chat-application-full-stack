const jwt = require("jsonwebtoken");

module.exports.generateToken=(id,email)=>{
    console.log(id);
    console.log(email);
    return jwt.sign({id:id,email:email},process.env.JWT_SECRET_KEY)
}