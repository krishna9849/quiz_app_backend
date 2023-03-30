const express=require('express');
const quiz=require('./db/quizzes')
const cors = require('cors');
const quizRouter=require('./router/quiz.router')
const usersData=require('./db/users');
const bodyParser = require('body-parser');


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

app.use('/quiz' , quizRouter)



app.post('/auth/login' , (req,res)=>{

    const {username , password} = req.body;
    const isUserVerified=usersData.users.some((user)=> user.username===username && user.password===password);
    if(isUserVerified){
        res.json({
            message : "User logged in successfully"
        })
    }
    else{
        res.status(401).json({
            message : "Invalid credentials !!"
        })
    }
})


app.listen(process.env.PORT || PORT , ()=>{

    console.log("Server started running !!!")
})

