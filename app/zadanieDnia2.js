//Twój kod
const http = require("http");

const srv = http.createServer((req, res) => {
    let agent = req.headers['user-agent'];
    res.setHeader("Content-Type", "text/html; charset=utf-8");
    res.end(agent);
})
srv.listen(3000, ()=>{
    console.log("Server running...");
});