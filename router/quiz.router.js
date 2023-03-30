const express=require('express');
const quiz=require('../db/quizzes');

const quizRouter=express.Router();


quizRouter.route('/')
    .get((req,res)=>{

        res.json(quiz.data);
    })

    module.exports = quizRouter;