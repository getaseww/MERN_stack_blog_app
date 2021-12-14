const User = require("../models/User");
const Post =require("../models/Post");
const bcrypt = require('bcrypt');

exports.register = async (req, res) => {
    try {
        const { username, email, } = req.body
        if (!(username || email || req.body.password)) {
            res.status(401).json({
                message: "Empty field!"
            })
        }
        const salt = await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash(req.body.password, salt);
        const newUser = new User({
            username: username,
            email: email,
            password: hashedPassword
        });

        const user = await newUser.save();
        const { password, ...others } = user._doc;
        res.status(200).json(others);
    } catch (err) {
        res.status(500).json("error" + err);
    }
}

exports.login = async (req, res) => {
    try {
        const { username } = req.body;
        if (!(username || req.body.password)) {
            res.status(401).json({
                message: "Empty field!",
            })
        }

        const user = await User.findOne({ username: username });
        if (!user) {
            res.status(400).json({
                message: "Wrong credentials!",
            })
        }
        const validated = await bcrypt.compare(req.body.password, user.password);
        if (!validated) {
            res.status(400).json({
                message: "Wrong credentials!",
            })
        }
        const { password, ...others } = user._doc;
        res.status(200).json(others);
    } catch (err) {
        res.status(500).json(err);
    }
}

exports.userInfo=async (req,res)=>{
    try{
        const user=await User.findById(req.params.id);
        const {password,...others}=user._doc;
        res.status(200).json(others);
    }catch(err){
        res.status(500).json(err);
    }
}

exports.update = async (req, res) => {
    if (req.body.userId == req.params.id) {
        if (req.body.password) {
            const salt = await bcrypt.genSalt(10);
            req.body.password = await bcrypt.hash(req.body.password, salt);
        }

        try {
            const updatedUser = await User.findByIdAndUpdate(req.params.id, {
                $set: req.body,
            }, { new: true });
            res.status(200).json(updatedUser);
        } catch (err) {
            res.status(500).json("err" + err)
        }
    } else {
        res.status(401).json({
            message: "you can't update others account information",
        })
    }
}

exports.delete = async (req, res) => {
    if (req.body.userId == req.params.id) {    
        try{
            const user =await User.findByID(req.params.id);
            try {
                await Post.deleteMany({username:user.username});
                await User.findByIdAndDelete(req.params.id);
                   res.status(200).json("User deleted successfully!");
               } catch (err) {
                   res.status(500).json("err" + err)
               }
        }catch(err){
            res.status(404).json("User not found!")
        }
    } else {
        res.status(401).json({
            message: "you can't delete others account!",
        })
    }
}