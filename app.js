const express= require('express')
const app=express()
const bodyParser = require('body-parser');
const session = require('express-session')
app.use(session({secret:"chinnu",resave:false,saveUninitialized:true}))


const nocache = require("nocache");

// ...

app.use(nocache());

app.set('view engine','ejs')

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

const userRoutes=require('./routes/userRoutes');


// app.use('/',router)
app.use('/',userRoutes)


app.listen(8000,()=>{
    console.log("server running");
})

app.use('/public',express.static('public'))
