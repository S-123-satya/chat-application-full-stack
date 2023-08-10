const express = require('express');
const path = require('path');
require('dotenv').config();

const signupRoutes = require('./routes/signupRoutes');
const sequelize = require('./utils/database');

const app=express();
app.use(express.static(path.join(__dirname,'public')));
app.use(express.json());
app.use('/signup',signupRoutes)

sequelize.sync({force:false})
.then(res=>console.log(`database connected`))
.catch(err=>console.log(`error while database connection`));
app.listen(3000,()=>console.log(`listing on port 3000`));