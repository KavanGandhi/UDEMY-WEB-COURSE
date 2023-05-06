const express  = require("express");
// express() is a function which represents express module
const app = express();

// for making request on server we use app.get() funaction it is done as follows
// here "/" is called as route i.e homepage from where browser makes request
// here there is one anonymous function associated with get it has two parameters
// request and response, request a browser makes at any port address of server and after that server sends information
app.get("/",function(request,response){
    console.log(request);
    response.send("<h1>Hello Folks</h1>");
});

// sending request from another page
app.get("/contact",function(req,res){
    res.send("My email I'd is kavangandhi1@gmail.com");
});

app.get("/about",function(req,res){
    res.send("My name is Kavan Gandhi, I'm currently studying in 2 nd year");
});

app.get("/hobbies",function(req,res){
    res.send("cricket, football");
});

// it tells to listen on specific port for any http requests which
// sent to our server 
app.listen(3000,function(){
    console.log("Server started on port 3000");
})