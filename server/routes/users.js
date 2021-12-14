const router =require('express').Router()
const userController=require("../controllers/user");

router.get('/:id',userController.userInfo);
router.put('/update/:id',userController.update);
router.delete("/delete/:id",userController.delete);

module.exports=router;