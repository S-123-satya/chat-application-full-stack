const express = require('express');
const { postSendMessageController } = require('../controllers/messageController');
const { verifyToken } = require('../utils/tokensUtils');
const router=express.Router()
router.post('/',verifyToken,postSendMessageController); //task incompleted= verifyToken
module.exports=router;