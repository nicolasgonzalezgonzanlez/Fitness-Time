var express =require("express");
var app = express();

app.get("/", function(req, res){
    res.render("index");
})
app.listen(3000, function(err){
    if(err) return console.log("hubo un error"), process.exit(1);
    console.log("todo correcto")
})





