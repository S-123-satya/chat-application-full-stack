const Message = require("../models/messageModel");
const User = require("../models/userModel");

module.exports.postSendMessageController=async(req,res)=>{
    console.log(req.body);
    const {message,tokenObj}=req.body;
    const result=await User.findOne({where:{
        id:tokenObj.id
    }})
    console.log(`10`);
    console.log(result);
    let data;
    if(result){

        data=await Message.create({message,senderId:tokenObj.id})
        res.json({message:'message receive'})
    }
    else
        res.json({message:"User does not exist",status:401})
    console.log(`13`);
    // console.log(data);
}