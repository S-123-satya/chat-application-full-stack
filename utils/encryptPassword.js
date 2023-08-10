const bcrypt = require('bcrypt');

// var encryptPasswordValue;
const encryptPassword = async (myPlaintextPassword) => {
    try {
        const hash = await bcrypt.hash(myPlaintextPassword, Number(process.env.SALT_ROUND))
        return hash;
    } catch (error) {
        throw new Error(error);
    }
};
module.exports = encryptPassword