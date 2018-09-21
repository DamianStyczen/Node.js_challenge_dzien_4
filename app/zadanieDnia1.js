//Twój kod
const http = require("http");

const srv = http.createServer((req, res) => {
    console.log("Hello World from Node");
    console.log(req.headers['user-agent']);
    res.setHeader("Content-Type", "text/html; charset=utf-8");
    res.end("<strong>Hello world from Backend</strong>")
})
srv.listen(3000, ()=>{
    console.log("Port 3000");
})