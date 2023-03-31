const express=require('express');
const authController=require('../controllers/auth.controller')

const {SignInHandler , SignUpHandler}= authController

const SignInRouter=express.Router();
const SignUpRouter=express.Router();

SignInRouter.route('/').post(SignInHandler)
SignUpRouter.route('/').post(SignUpHandler)

module.exports={SignInRouter  , SignUpRouter};