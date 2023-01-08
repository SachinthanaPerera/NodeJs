/* const {area} = require("./circle");
console.log(area(5)); */
const http = require("http");

const server = http.createServer((req, res)=>{
    res.write("hello node");
    res.end();
});

server.listen(3000); 