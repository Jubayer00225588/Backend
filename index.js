require ('dotenv').config()
const express = require("express");
//import express from "express"
const app = express();
const port = 3000;

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.get("/facebook", (req, res) => {
  res.send("Jubayer Ibn Saif");
});

app.get('/login',(req,res)=>{
res.send('<h1>Please Log in first</h1>')
})

app.get('/youtube',(req,res)=>{
res.send('<h2>Will you marry me Maria?</h2>')
})

app.listen(process.env.PORT, () => {
  console.log(`Example app listening on port ${port}`);
});
