const express=require('express');
const path=require('path');

const server=express();

server.use(express.static(path.resolve(__dirname,'../pages')));

server.get('/',(req,res)=>{
    res.sendFile(path.resolve(__dirname,'../pages/index.html'));
})

server.listen(5000,()=>{
    console.log('express server running')
})