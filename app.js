var express = require("express");
var app = express();

app.set("view engine", "ejs");
app.use(express.static("public"));

app.get("/", function(req, res) {
    res.render("index");
});

app.get("/projects", function(req, res) {
    res.render("projects");
});



app.listen(3000, function() {
   console.log("Server is Listening!!!");
});
