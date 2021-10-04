const http=require('http');
const path=require('path');
const fs=require('fs');

//서버 객체 생성
const server=http.createServer(function (req,res){
    if(req.method==='GET'){
        if(req.url==='/js'){
            fs.readFile(path.resolve(__dirname,'../pages/app.js'),(err,data)=>{
                if(err){
                    console.log(err);
                    res.writeHead(400);
                    res.end();
                }
                res.writeHead(200,{'Content-Type':'text/javascript'});
                res.end(data);
            })
        }
        if(req.url==='/'){
            fs.readFile(path.resolve(__dirname,'../pages/index.html'),(err,data)=>{
                if(err){
                    console.log(err);
                    res.writeHead(400);
                    res.end();
                }
                console.log(data.toString());
                res.writeHead(200,{'Content-Type':'text/html'});
                res.end(data);
            })
        }
    }
});

server.listen(3000,()=>{
    console.log('server running')
})
