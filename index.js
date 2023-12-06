var express = require("express");
var app = express();

app.set('view engine', 'ejs');

app.use(express.static("views"));
app.use(express.static("style"));
app.use(express.static("images"));



app.get('/',function(req,res){
    res.render("home")


})
app.get('/help',function(req,res){
    res.render("help")


})
// this code provides the server port for our application to run on
app.listen(process.env.PORT || 3000, process.env.IP || "0.0.0.0", function() {
    console.log("Yippee its running");
});