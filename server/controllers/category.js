const Category =require("../models/Category");

exports.create=async (req,res)=>{
    const {name}=req.body;
    if(!name){
        res.status(401).json({
            message:"Empty fields!",
        })
    }

   try{
    const newCat = new Category(req.body);
    const cat = await newCat.save();
    res.status(200).json(cat);
   }catch(err){
       res.status(500).json({
           message:"err"+err,
       })
   }
}

exports.fetchCats=async (req,res)=>{
   try{
    const cats = await Category.find();
    res.status(200).json(cats);
   }catch(err){
       res.status(500).json({
           message:"err"+err,
       })
   }
}