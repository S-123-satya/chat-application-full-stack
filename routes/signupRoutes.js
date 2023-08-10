const express = require('express'); 
const router=express.Router()

const {postSignupController} = require('./../controllers/postSignupController');

router.post('/',postSignupController)

module.exports=router;