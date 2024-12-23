import { error } from 'console'
import http from 'http'

const server = http.createServer((req,res)=>{
    try {
        if(req.method ==="GET"){
            if(req.url === "/"){
                res.writeHead(200,{"content-type":"text/html"})
                res.end("Homepage")
            }else if(req.url === "/about"){
                res.writeHead(200,{"content-type":"text/html"})
                res.end("About")
            }else{
                res.writeHead(400,{"content-type":"text/html"})
                res.end("No page found")
                return;
            }
        }
        else{
            throw new Error("error");
        }
    }catch(error){
        res.writeHead(404,{"content-type":"text/html"});
        res.end("method is wrong")
    }
})

server.listen(5000,()=>{
    console.log("server is running")
})