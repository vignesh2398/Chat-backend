const express= require("express");
const { createGroupChat } = require("../controllers/chatControllers");
const { registerUser, authUser, allUsers } = require("../controllers/userControllers");
const { protect } = require("../middleware/authMiddleware");
const router=express.Router();

router.post('/signup',registerUser)
router.post('/login',authUser)
router.get('/',protect,allUsers)
router.post('/group',protect,createGroupChat)

module.exports=router;