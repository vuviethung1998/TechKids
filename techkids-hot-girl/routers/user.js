const express = require("express");
const UserRouter = express.Router();

//import model
const UserModel = require("../models/user");

// TODO: CRUD for posts post get put delete
// api/users = /

UserRouter.post('/', (req,res)=> {
    const newUser = req.body;
    UserModel.create(newUser, (err, userCreated) =>{
        if(err ) res.status(500).json({success: 0, message:err} );
        else {
            res.status(201).json({success: 1, message: "Create succeed"});
        }
    });
});

UserRouter.get('/' , (req,res)=> {
    UserModel.find({},null, (err, data) => {
        if(err) res.status(500).json({success : 0,messeger:err});
        else {
            res.json(data);
        }
    });
});

UserRouter.get('/:id', (req,res)=>{
    const usrId = req.params.id;
    
    UserModel.findById(usrId, (err, user) => {
        if(err) res.status(500).json({success : 0,messeger:err});
        else {
            res.json(user);
        }
    })
});

UserRouter.put('/:id', (req,res) => {
    const id = req.params.id;
    const usrUpdate = req.body;

    UserModel.findByIdAndUpdate(id, usrUpdate ,(err, user)=> {
        if(err) res.status(500).json({success : 0,messeger:err});
        else {
            res.status(201).json({success : 1,messeger:err});
        }
    })
});

UserRouter.delete('/:id',(req,res)=>{
    const id = req.params.id;

    UserModel.findByIdAndDelete(id, (err, user) =>{
        if(err) res.status(500).json({success : 0,messeger:err});
        else {
            res.status(201).json({success : 1,messeger:err});
        }
    })
})
module.exports = UserRouter;