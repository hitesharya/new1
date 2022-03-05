const express = require('express');
const route = require('./admin/routes/auth/authRoutes')
const path = require('path')
require('dotenv').config();
const http = require("http");
const Server = require("socket.io");





const app = express();


const PORT = process.env.PORT;


// const io = require("socket.io")(server,{cors:{origin:"*"}})
require('./config/db')

app.set('view engine','ejs');
app.set('/views',path.join(__dirname,'./views'))

app.use(express.json());
app.use(express.urlencoded({extended:false}))
app.use('/',route)
//app.use('/api',require('./admin/routes/location/locationRoutes'))
app.get('/', (req, res) => {
    res.sendFile(__dirname + '/socket.html');
  });
  let server = http.createServer(app);

  server.listen(PORT,()=>{
    console.log(`server is on ${PORT}`);
})

 let io =  Server(server,{cors:{
     origin:"http://localhost:3000",
     methods:["GET" , "POST"],


     
 }});

io.on("connection", (socket)=>{
    console.log("000")
    // console.log(socket.handshake)
   
   
    socket.on("send_message",(data,callback)=>{
       

        console.log(data)


    //   io.to(socket.id).

      
        
        // send({success:true});
      

        // return callback({status:0})


         io.to(socket.id).emit("send_message",data);
        //   return  socket.send({status:0})
       

       // socket.broadcast.emit("receive_message",message)
         
        
       
    })

    
})



