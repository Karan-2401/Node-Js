import http from 'http';
const p = process.env.PORT;
const server = http.createServer((req,res)=>{
    // res.setHeader('content-type','text/html')
    // res.statusCode = '404'
    res.writeHead(200,{'content-type':'application/json'})
    res.end(JSON.stringify({"name":"karan"}))
})

server.listen(p,()=>{
    console.log('server is running on '+p)
})