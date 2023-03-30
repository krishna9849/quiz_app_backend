const express=require('express');
const quiz=require('./db/quizzes')

const app = express();

const PORT=3000;


app.get('/' , (req,res)=>{

    res.send("Hello geeks")
});

app.get('/quiz' , (req,res)=>{
    res.send(quiz.data);
})


app.listen(process.env.PORT || PORT , ()=>{

    console.log("Server started running !!!")
})

