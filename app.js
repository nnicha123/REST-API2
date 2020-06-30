const express = require('express')
const app = express()
const mongoose = require('mongoose')


// // ROUTES
// app.get('/',(req,res)=>{
//     res.send('We are on home')
// })
// app.get('/posts',(req,res)=>{
//     res.send('We are on posts')
// })

// Connect to db
mongoose.connect('mongodb://localhost/newsuperTest',  { 
    useNewUrlParser: true, 
    useUnifiedTopology: true 
  })

mongoose.connection.once('open',function(){
    console.log('Connection has been made, now make fireworks')
}).on('errpr',function(error){
    console.log('COnnection error', error)
})

// // Listen
// app.listen(4000)