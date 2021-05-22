const express = require("express");
const routes = require('./routes');
const ejs = require('ejs');
const path = require('path');
const app = express();
const port = 8080;


app.use(express.static(path.join(__dirname,'static')));
app.set('views',path.join(__dirname,'views'))
app.set('view engine','ejs');

app.get('/',(req,res)=>{
    routes(req,res);
})
app.get('/ragdoll',(req,res)=>{
    routes(req,res);
})
app.get('/persian',(req,res)=>{
    routes(req,res);
})




app.listen(port,()=>console.log(`listening at port ${port}`))
