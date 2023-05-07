const express = require("express");
const app = express();
// to process the post methods i.e data or request sent from index.html we use body-parser
const bodyParser = require(body-parser)
// body parser comes inside express so, there are various method such as .json which converts files into json format
// here when we want to grab the data coming from index.html so we use urlencoded
app.use(bodyParser.urlencoded({extended:true}));
app.get("/",function(req, res){
    // res.send("Hello World!!");
    // for sending back a file
    res.sendFile(__dirname + "/index.html");
});

// here we use post because, the data from index.html file comes that is from "/"
// home route so we need to process it so we use post method
app.post("/",function(req, res){
    res.send("Thanks for posting that!!");
});
app.listen(3000,function(){
    console.log("Server started on port 3000");
});
