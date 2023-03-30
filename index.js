const express=require('express');

const app = express();

const PORT=3000;

app.get('/' , (req,res)=>{

    res.send("Hello geeks")
});

app.listen(process.env.PORT || PORT , ()=>{

    console.log("Server started running !!!")
})