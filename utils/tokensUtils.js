const jwt = require("jsonwebtoken");
const User = require("../models/userModel");

module.exports.generateToken=(id,email)=>{
    console.log(id);
    console.log(email);
    return jwt.sign({id:id,email:email},process.env.JWT_SECRET_KEY)
}
module.exports.verifyToken=(req,res,next)=>{
    const token=req.headers?.authorization;
    req.body.tokenObj=jwt.verify(token,process.env.JWT_SECRET_KEY)
    next();
}

module.exports.verifyUser=async(req,res,next)=>{
    const {tokenObj}=req.body;
    const result=await User.findOne({where:{
        id:tokenObj.id
    }})
    if(result)
        next();
    else
        res.json({message:"User does not exist",status:401})
}
