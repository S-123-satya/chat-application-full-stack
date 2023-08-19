const { Router } = require("express");
const { postGroupController } = require("../controllers/groupController");
const { verifyToken, verifyUser } = require("../utils/tokensUtils");

const router=Router();

router.post('/',verifyToken,verifyUser,postGroupController);
module.exports=router;
