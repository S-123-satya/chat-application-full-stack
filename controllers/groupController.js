const Group = require("../models/groupModel");
const UserGroup = require("../models/userGroup");
const User = require("../models/userModel");

module.exports.postGroupController = async (req, res) => {
    console.log(req.body);
    const { groupname, userList, tokenObj } = req.body;
    // userList.add(tokenObj.id);
    const list = new Set();
    userList.forEach(ele => list.add(ele));
    list.add(tokenObj.id);
    const data = await Group.create({ groupname, createdBy: tokenObj.id });
    console.log(`8`);
    let arr = Array.from(list);
    await data.addUsers(arr);
    res.json({ message: "post group controller", data });
}
module.exports.getGroupController = async (req, res) => {
    console.log(req.body);
    const { tokenObj } = req.body;
    const groupList = await User.findAll({
        include: {
            model: Group,
            attributes: ['id', 'groupname', 'createdBy']
        },
        where: {
            id: tokenObj.id,
        },
        attributes: ['id', 'name', 'email', 'phone'],
    })
    res.json({ message: "get group controller", groupList });
}

module.exports.getGroupUserController=async (req,res)=>{
    console.log(req.params);
    const groupdata=await Group.findByPk(req.params.id);
    console.log(groupdata);
    const userList=await groupdata.getUsers({
        attributes:['name','id']
    });
    console.log(`45`);
    console.log(userList);
    console.log(userList.name);
    res.json({message:'get group admin route',userList})
}