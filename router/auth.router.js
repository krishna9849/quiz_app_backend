const express=require('express');
const authController=require('../controllers/auth.controller')



const authRouter=express.Router();
authRouter.route('/').post(authController)

module.exports=authRouter;