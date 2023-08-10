const express = require('express');
const path = require('path');
const app=express();
app.use(express.static(path.join(__dirname,'public')));
app.use('/',(req,res)=>{
    res.json({message:'connected'})
})
app.listen(3000,()=>console.log(`listing on port 3000`));