const express=require('express');

const quizzes=require('../db/quizzes');

const categoryRouter= express.Router();

categoryRouter.route('/')
    .get((req,res)=>{
        res.send(quizzes.data);
    })

module.exports=categoryRouter