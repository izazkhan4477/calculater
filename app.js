const express = require('express');
const bodyparser = require('body-parser');
const { log } = require('console');
const app = express()


app.get('',(req,res)=>{
    res.sendFile(__dirname+"/index.html")
})




app.listen(3000,(res)=>{
    console.log("server connected");
})