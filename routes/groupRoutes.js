const { Router } = require("express");
const { postGroupController, getGroupController } = require("../controllers/groupController");
const { verifyToken, verifyUser } = require("../utils/tokensUtils");

const router=Router();

router.post('/',verifyToken,verifyUser,postGroupController);
router.get('/',verifyToken,verifyUser,getGroupController);
module.exports=router;
