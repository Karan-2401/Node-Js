import http from 'http';
const Port = process.env.PORT
const server = http.createServer((req,res)=>{
    //res.write('Hi Sir');
    // res.setHeader('content-type','text/text')
    // res.statusCode = '404';
    //res.end('<h1>hello sir</h1>')
    res.writeHead(200,{'content-type':'application/json'})
    res.end(JSON.stringify({one:'server error2'}))
})

server.listen(Port,()=>{
    console.log('server is running '+Port)
})