const express = require("express");
const app = express();

const bodyParser = require("body-parser");
app.use(bodyParser.urlencoded({extended:true}));

app.get("/bmicalculator",function(req,res){
    res.sendFile(__dirname + "/bmic.html");
});

app.post("/bmicalculator",function(req,res){
    var weight = req.body.weight;
    var height = req.body.height;

    var result = weight/(height*height);

    res.send("Your BMI is "+result);

});
app.listen(3000,function(){
    console.log("Server started on port 3000");
});