const bcrypt = require('bcrypt');

const checkPassword=async(loginPassword,userPassword)=>{
    const match = await bcrypt.compare(loginPassword, userPassword);
    return match?true:false;
}
module.exports=checkPassword;