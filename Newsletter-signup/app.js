const express = require("express");
const bodyParser = require("body-parser");
const https = require("https");
const app = express();
app.use(bodyParser.urlencoded({extended:true}));
// here when we will run our server then we will not get proper css because some of the css comes from bootstrap css
// but some of the  css comes from style.css as it is a static file so we need static files to store in a public folder
// it provides path of all static files
app.use(express.static("public"));

app.get("/", function(req, res){
    res.sendFile(__dirname + "/signup.html");
})

// here mailchimp api accepts data in json form so we have to convert user entered data into json form
// so first we have to make a javascript object for it

app.post("/",function(req,res){
    const fname = req.body.fname;
    const lname = req.body.lname;
    const email = req.body.eml;

    // console.log(fname+" "+lname+" "+email);
    const data = {
        members:[
            {
                email_address:email,
                status:"subscribed",
                merge_fields:{
                    FNAME:fname,
                    LNAME:lname    
                }
            }
        ]
    };
    const jsonData = JSON.stringify(data);//converts js object into string i.e it will be converted to JSON

    // we want to post our data to external resource so we will can't do https.get but we gave to do
    // https.request to post our data
    // here options is for what we want to do get or post or any other thing default is get
    const url="https://us21.api.mailchimp.com/3.0/lists/ca84a10983";
    // in mailchimp there are various lists in mailchimp where user can suscribe so we have to use list id which is ca84a...

    const options={
        method:"POST",
        auth:"kavan:" //we use auth for a valid authentication request to check that request is valid
    }

    // to send the data entered by user we have to save our request inside a variable and then do request.write to send data to mailchimp sever
    const request = https.request(url, options, function (response) {
        // console.log(response.statusCode);
        if(response.statusCode===200)
        {
            res.sendFile(__dirname + "/success.html");
        }
        else
        {
            res.sendFile(__dirname + "/failure.html");
        }
        response.on("data",function(data){
            // console.log(JSON.parse(data));
        })
    })
    // request.write(jsonData);
    request.end();
})
app.listen(3000,function(){
    console.log("Server started on port 3000");
})

// unique id
// ca84a10983