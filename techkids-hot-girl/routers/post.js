const express = require("express");
const PostRouter = express.Router();

// TODO: CRUD for posts post get put delete

//import model
const PostModel = require("../models/post");

// TODO: CRUD for posts post get put delete
// api/posts = /

PostRouter.post('/', (req,res)=> {
    const newPost = req.body;
    PostModel.create(newPost, (err, postCreated) =>{
        if(err ) res.status(500).json({success: 0, message:err} );
        else {
            res.status(201).json({success: 1, message: "Create succeed"});
        }
    });
});

PostRouter.get("/" , (req,res)=> {
    PostModel.find({}, null ,(err, post) => {
        if(err) res.status(500).json({success : 0,messeger:err});
        else {
            res.status(201).json({posts: post});
        }
    });
});

PostRouter.get("/:id", (req,res)=>{
    const postId = req.params.id;
    
    PostModel.findById(postId, (err, post) => {
        if(err) res.status(500).json({success : 0,messeger:err});
        else {
            res.status(201).json({posts: post});
        }
    })
});

PostRouter.put('/:id', (req,res) => {
    const id = req.params.id;
    const postUpdate = req.body;

    PostModel.findByIdAndUpdate(id, postUpdate ,(err, post)=> {
        if(err) res.status(500).json({success : 0,messeger:err});
        else {
            res.status(201).json({success : 1,messeger:err});
        }
    })
});

PostRouter.delete('/:id',(req,res)=>{
    const id = req.params.id;

    PostModel.findByIdAndDelete(id, (err, post) =>{
        if(err) res.status(500).json({success : 0,messeger:err});
        else {
            res.status(201).json({success : 1,messeger:err});
        }
    })
})
module.exports = PostRouter;