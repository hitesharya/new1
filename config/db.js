const mongoose = require('mongoose');


const url = `${process.env.APP_URL}/mydb`

console.log(url);


mongoose.connect(url,{useNewUrlParser:true,useUnifiedTopology:true});

const db = mongoose.connection

db.once('open',()=>{
    console.log("database is connected");
})


module.export = db;