const Group = require("../models/groupModel");
const UserGroup = require("../models/userGroup");

module.exports.postGroupController=async(req,res)=>{
    console.log(req.body);
    const {groupname,userList,tokenObj}=req.body;
    // userList.add(tokenObj.id);
    const list= new Set();
    userList.forEach(ele=>list.add(ele));
    list.add(tokenObj.id);
    const data=await Group.create({groupname,createdBy:tokenObj.id});
    console.log(`8`);
    // await UserGroup.create(
    //     {
    //         UserId:tokenObj.id,
    //         groupId:data.id,
    //     }
    // )
    await list.forEach(ele=>UserGroup.create(
        {
            UserId:ele,
            groupId:data.id,
        }
    ))
    res.json({message:"post group controller",data});
}