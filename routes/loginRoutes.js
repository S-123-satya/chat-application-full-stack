const express = require('express'); 
const { postLoginController } = require('../controllers/postLoginController');
const router = express.Router()

router.post('/',postLoginController)

module.exports=router;