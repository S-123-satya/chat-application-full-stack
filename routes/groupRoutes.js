const { Router } = require("express");
const { postGroupController, getGroupController, getGroupUserController, removeGroupAdminController, addGroupAdminController, addGroupUserController, removeGroupUserController } = require("../controllers/groupController");
const { verifyToken, verifyUser } = require("../utils/tokensUtils");

const router = Router();

router.post('/', verifyToken, verifyUser, postGroupController);
router.get('/', verifyToken, verifyUser, getGroupController);
router.get('/user/:id', verifyToken, verifyUser, getGroupUserController);
// verify admin in all controllers => make a middleware to verify that is it group admin or not
router.get('/admin/addadmin', verifyToken, verifyUser, addGroupAdminController);
router.delete('/admin/removeadmin', verifyToken, verifyUser, removeGroupAdminController);
router.get('/admin/adduser', verifyToken, verifyUser, addGroupUserController);
router.delete('/admin/removeuser', verifyToken, verifyUser, removeGroupUserController);
module.exports = router;
