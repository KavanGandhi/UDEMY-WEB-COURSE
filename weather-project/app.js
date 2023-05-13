const express = require("express");
const https = require("https"); // inbuilt/native module 
const app = express();

// here user request to our server and our server makes request to api
// user -> our server -> api
app.get("/", function(req, res){

    const url="https://api.openweathermap.org/data/2.5/weather?lat=44.34&lon=10.99&appid=94240d86f5ca7192d6916b798e8c656c&units=imperial";

    https.get(url, function(response){
        // console.log(response);
        console.log(response.statusCode);
        // if we want to get actual data sent by an api then we ahve to do as follows:
        response.on("data",function(data){
            console.log(data); //but here data will come in hexadecimal form or other form 
            // so we have to parse data into javascript object form as follows:
            var weatherData = JSON.parse(data);
            console.log(weatherData);
        })
    })

    res.send("Hello!!");
});

app.listen(3000,function(){
    console.log("Server started on port 3000");
});