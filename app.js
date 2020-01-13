const express = require("express")
const path = require('path');
const app = express();
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));
app.use(express.static(path.join(__dirname, 'node_modules')));
app.use(express.static(path.join(__dirname, 'public')));


app.get("/home", function(req,res){
    console.log("I am home");
    res.send("Hello everyone");

});

app.get("/", function(req,res){
    res.render("login");
    res.render("login");       
    console.log("I am here login");

//const id = req.params.id;
//const pass = req.params.pass;
});

app.get("/customer", function(req,res){ 
    var Name = req.query.name;
    var Password = req.query.pass;
//console.log(Name);

if (Password =="123")
{
    const customer = [
        {id:"1", name:"John" , pass:"123"},
        {id:"2", name:"Ted" , pass:"321"},
        {id:"2", name:"Net" , pass:"213"}
  ]
  console.log("I am a student");
  res.render("customers" , {
     
      customer : customer

  });
}
else{
    res.render("notfound.ejs");
}
   
});
//module.exports.app = app;
app.listen(3000 , function(){
    console.log("App is running");

});
