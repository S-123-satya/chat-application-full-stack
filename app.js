const express = require('express');
const path = require('path');
require('dotenv').config();

const signupRoutes = require('./routes/signupRoutes');
const loginRoutes = require('./routes/loginRoutes');
const sendMessageRoutes = require('./routes/sendMessageRoutes');
const sequelize = require('./utils/database');
const cors = require('cors');
const Message = require('./models/messageModel');
const User = require('./models/userModel');
const app=express();
app.use(cors());
app.use(express.static(path.join(__dirname,'public')));
app.use(express.json());

app.use('/signup',signupRoutes)
app.use('/login',loginRoutes)
app.use('/sendMessage',sendMessageRoutes);

// db.teamMember.belongsTo(db.employee, {as: 'SupervisorId'});
// db.teamMember.belongsTo(db.employee, {as: 'RegularEmployeeId'});

// User.hasMany(Message);
Message.belongsTo(User,{as:'sender'})
// Message.belongsTo(User,{as:'receiver'})

sequelize.sync({force:true})
.then(res=>console.log(`database connected`))
.catch(err=>console.log(`error while database connection`));
app.listen(3000,()=>console.log(`listing on port 3000`));