const Post = require("../models/Post")

exports.create = async (req, res) => {
    try {
        const { username, title, desc } = req.body;
        if (!(username, title, desc)) {
            res.status(401).josn({
                message: "Empty field!",
            })
        }
        const newPost = new Post(req.body);
        const post = await newPost.save();
        res.status(200).json(post);
    } catch (err) {
        res.status(500).josn({
            message: "Internal error" + err,
        })
    }
}

exports.fetchPost = async (req, res) => {
    try {
        const post = await Post.findById(req.params.id);
        res.status(200).json(post);
    } catch (err) {
        res.status(500).json(err);
    }
}

exports.fetchPosts = async (req, res) => {
    const username = req.query.user;
    const catName = req.query.cat;
    try {
        let posts;
        if (username) {
            posts = await Post.find({ username });
        } else if (catName) {
            posts = await Post.find({
                categories: {
                    $in: [catName]
                }
            });
        } else {
            posts = await Post.find();
        }
        res.status(200).json(posts);
    } catch (err) {
        res.status(500).josn(err)
    }
}

exports.update = async (req, res) => {
    try {
        const post = await Post.findById(req.params.id);
        if (req.body.username === post.username) {
            try {
                const updatedPost = await Post.findByIdAndUpdate(req.params.id, { $set: req.body }, { new: true });
                res.status(200).json(updatedPost);
            } catch (err) {
                res.status(500).json({
                    message: "Internal error",
                })
            }
        }
    } catch (err) {
        res.status(500).json(err);
    }
}

exports.delete = async (req, res) => {
    try {
        const post = await Post.findById(req.params.id);
        if (req.body.username === post.username) {
            try {
                var data = await post.delete();
                if(data){
                    res.status(200).json("Post deleted successfully!");
                }else{
                    res.status(500).json("Error occured!");
                }
            } catch (err) {
                res.status(500).json({
                    message: "Internal error",
                })
            }
        } else {
            res.status(401).message("Unauthorised!")
        }
    } catch (err) {
        res.status(500).json(err);
    }
}