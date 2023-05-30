// here we are using view engine as ejs, although there are various view engines such as
// pug, jade.. A view engine is used when when we want dynamic data in our html file
const express = require("express");
const bodyParser = require("body-parser");
const app = express();

app.use(express.static("public"));
var newItems=["Buy Food", "Cook Food", "Eat Food"];
var workItems=[];
app.use(bodyParser.urlencoded({extended:true}));

// we have to make a views folder where our xyz.ejs file would be located because we need to render that file
// it is the place where view engine would go during rendering of file
app.set('view engine', 'ejs');

app.get("/", (req, res)=>{

    var today = new Date();
    var currentDay = today.getDay();
    // var days = ["Sunday"," Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    var options={
        weekday:"long",
        day:"numeric",
        month:"long"
    };
    var day = today.toLocaleDateString("hi-IN", options);

    if(currentDay === 0 ||currentDay === 6 )
    {
    //    var day = days[currentDay];
// here during res.render we will write name of file present in view folder i.e list here view engine will see that
// does the list file is in views or not   
    res.render("list", {listTitle:day});
    }
    else
    {
        // var day = days[currentDay];
        res.render("list", {listTitle:day, newthing:newItems});
    }

});

app.post("/", (req, res)=>{
// for / work: when we do console.log for req.body then we will get the new item added and also the information
// of button and name of button so by this we can distinguish which part to be used default one or new Work list one
// console.log(req.body); Output: { newItem: 'f32q', list: 'Worklist' }
    newItem = req.body.newItem;
    if(req.body.list === "Worklist")
    {
        workItems.push(newItem);
        res.redirect("/work");
    }
    else{
        newItems.push(newItem);
    // here we can't do res.render("list",{newThing:newItem}) beacuse when we send data from get part then in
    // out ejs file newthing which is to be displayed will be undefined because we haven't sent data till now
    // so  we will redirect to get method
    res.redirect("/"); 

    }
//     console.log(req.body.ditem)
//    if(req.body.ditem === "delete")
//    {
//     ditem = req.body.ditem;
//     newItems.pop(ditem);
//    }
//    else{
    
   
//    }

    
   
    
});

app.get("/work",(req, res)=>{
    res.render("list",  {listTitle:"Worklist", newthing:workItems});
});


app.listen(3000,()=>{
    console.log("Server is running");
})