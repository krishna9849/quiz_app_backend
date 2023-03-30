const express=require('express');
const quiz=require('./db/quizzes')
const cors = require('cors');


const app = express();

const PORT=3000;

app.use(cors());

app.get('/' , (req,res)=>{

    res.send("Hello geeks")
});

app.get('/quiz' , (req,res)=>{
    res.send(quiz.data);
})


app.listen(process.env.PORT || PORT , ()=>{

    console.log("Server started running !!!")
})

