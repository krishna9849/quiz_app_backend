const express=require('express');
const usersData=require('../db/users');
const jwt=require('jsonwebtoken')

const authController= (req,res)=>{

        const {username , password} = req.body;
        const token = jwt.sign({id : username }, "abcdef");
        const isUserVerified=usersData.users.some((user)=> user.username===username && user.password===password);
        if(isUserVerified){
            res.json({
                username : username,
                message : "User logged in successfully",
                token : token
            })
        }
        else{
            res.status(401).json({
                message : "Invalid credentials !!"
            })
        }
    }


    module.exports=authController;