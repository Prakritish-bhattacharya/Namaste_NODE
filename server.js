const http = require("node:http")

// create a server
const server = http.createServer(function(req,res){
    res.end("hello worldd")
    // console.log("---------------------------------------")
    // console.log(res)
})
server.listen(7777)
// console.log(server)

