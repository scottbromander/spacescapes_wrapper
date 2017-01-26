var express = require("express");
var path = require("path");
var app = express();

app.set("port", (process.env.PORT || 5000));

app.get("/*", function(req,res){
  var file = req.params[0] || "index.html";
  res.sendFile(path.join(__dirname, "/public/", file));
});

app.listen(app.get("port"), function(){
    console.log("Listening on port: " + app.get("port"));
});
