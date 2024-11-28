import http from 'http'

const server = http.createServer((req,res)=>{
    res.end("hi")
    res.writeHead(200,{"content-type":"text/html"})
})

server.listen(5000,()=>{
    console.log("server is running on day 3")
})