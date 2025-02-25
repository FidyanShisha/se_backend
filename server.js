const http = require("http");
const app = require("express");


const server = http.createServer(app);

const port = 5000;

server.listen(port,()=>{
    console.log(`server is running on port ${port}`)
})