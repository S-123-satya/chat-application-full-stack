// cron job file 
const cron = require('node-cron');
const ArchivedChat = require('./models/ArchivedChat');

const cronjob=cron.schedule('* * * * *',async()=>{
    console.log(`hii cron`);
});
module.exports={
    cronjob,
};