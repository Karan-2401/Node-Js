import http from 'http';
import fs from 'fs/promises';
import path from "path";
import url from "url"
import { error } from 'console';

const __filename = url.fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

const server = http.createServer(async(req,res)=>{
    try{
        if(req.method ==="GET"){
            let filepath;
            if(req.url ==="/"){
               filepath = path.join(__dirname,"holder","home.html")
               
            }else if(req.url ==="/about"){
                filepath = path.join(__dirname,"holder","about.html")
                
            }else{
                throw new Error("the url is wrong")
            }
            const data = await fs.readFile(filepath);
            res.writeHead(200,{"content-type":"html/text"})
            res.write(data);
            res.end()
        }
        else{
            throw new Error("method is wrong")
        }
    }
    catch(error){
        console.log(error)
    }
})

server.listen(5000,()=>{
    console.log("server is running on 5000")
})