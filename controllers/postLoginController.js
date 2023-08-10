const User = require("../models/userModel");
const checkPassword = require("../utils/checkPassword");

module.exports.postLoginController=async (req,res)=>{
    const result=await User.findOne({
        where:{
            email:req.body.email,
        }
    })
    if(result){
        const varify=await checkPassword(req.body.password,result.password);
        res.json({message:'login'});
    }
    else{
        res.json({message:'User not found'});
    }
}