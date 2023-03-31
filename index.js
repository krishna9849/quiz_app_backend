const express=require('express');
const quiz=require('./db/quizzes')
const cors = require('cors');
const quizRouter=require('./router/quiz.router')
const usersData=require('./db/users');
const bodyParser = require('body-parser');
const jwt=require('jsonwebtoken')
const authRouter=require('./router/auth.router')

const {SignInRouter , SignUpRouter} = authRouter;
const authVerify=require('./middlewares/authVerify.mw')

const app = express();
app.use(cors());

app.use(bodyParser.urlencoded());

app.use(express.json());

const PORT=3000;



app.get('/' , (req,res)=>{

    res.send("Hello geeks")
});

// app.get('/quiz' , (req,res)=>{
//     res.send(quiz.data);
// })

app.use('/quiz' ,authVerify, quizRouter)


app.use('/auth/signup' ,SignUpRouter);

app.use('/auth/login'  , SignInRouter);


app.listen(process.env.PORT || PORT , ()=>{

    console.log("Server started running !!!")
})

