const express = require("express");
const bodyParser = require("body-parser");
const ejs = require("ejs");

const app = express();

app.set('view engine', 'ejs');
app.set("views", "views/")

app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static("public"));


app.get("/", function(req, res){
    res.render("home");
});

app.get("/contact", function(req, res){
    res.render("contact");
})

app.get("/aboutme", function(req, res){
    res.render("aboutme");
})

app.get("/projects", function(req, res) {
    res.render("projects");
})

app.listen(3000, function(){
    console.log("Server running on port 3000");
})