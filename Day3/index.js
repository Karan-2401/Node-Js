import http from 'http'

const server = http.createServer((req,res)=>{
    console.log(req.method)
    console.log(req.url)
    res.writeHead(200,{"content-type":"text/html"})
    res.end("hi")
})

server.listen(5000,()=>{
    console.log("server is running on day 3")
})