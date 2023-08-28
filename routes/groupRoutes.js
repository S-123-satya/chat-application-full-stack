const { Router } = require("express");
const { postGroupController, getGroupController, getGroupUserController } = require("../controllers/groupController");
const { verifyToken, verifyUser } = require("../utils/tokensUtils");

const router=Router();

router.post('/',verifyToken,verifyUser,postGroupController);
router.get('/',verifyToken,verifyUser,getGroupController);
router.get('/user/:id',verifyToken,verifyUser,getGroupUserController);
module.exports=router;
