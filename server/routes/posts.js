const router=require('express').Router();
const postController=require("../controllers/post")

router.post("/create",postController.create);
router.put('/update/:id',postController.update);
router.get('/:id',postController.fetchPost);
router.get("/",postController.fetchPosts);
router.delete('/delete/:id',postController.delete);


module.exports=router;