const express = require("express");
const request = require("request");
const bodyParser = require("body-parser");
const app = express();
app.use(bodyParser.urlencoded({extended:true}));
// here when we will run our server then we will not get proper css because some of the css comes from bootstrap css
// but some of the  css comes from style.css as it is a static file so we need static files to store in a public folder
// it provides path of all static files
app.use(express.static("public"));

app.get("/", function(req, res){
    res.sendFile(__dirname + "/signup.html");
})

// we want to post our data to external resource so we will can't do https.get but we gave to do
// https.request to post our data

app.post("/",function(req,res){
    var fname = req.body.fname;
    var lname = req.body.lname;
    var email = req.body.eml;

    // console.log(fname+" "+lname+" "+email);
    
})
app.listen(3000,function(){
    console.log("Server started on port 3000");
})

// api key
// 223fea1033dcf591accabdc05cc8e244-us21

// unique id
// ca84a10983