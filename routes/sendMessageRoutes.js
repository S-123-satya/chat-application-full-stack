const express = require('express');
const { postSendMessageController } = require('../controllers/messageController');
const router=express.Router()
router.post('/',postSendMessageController); //task incompleted= verifyToken
module.exports=router;