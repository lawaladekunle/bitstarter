var express = require('express');
var fs = require("fs");
var app = express();
app.use(express.logger());

/* Read contents of index.html*/

var content_fs = fs.readFileSync("index.html", "utf8");

app.get('/', function(request, response) {
  response.send(content_fs);
});

var port = process.env.PORT || 8080;
app.listen(port, function() {
  console.log("Listening on " + port);
});
