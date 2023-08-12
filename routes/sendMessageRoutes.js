const express = require('express');
const { postSendMessageController } = require('../controllers/messageController');
const router=express.Router()
router.post('/',verifyToken,postSendMessageController)
module.exports=router;