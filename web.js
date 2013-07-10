var express = require('express');

var app = express.createServer(express.logger());

var fs = require('fs');

app.get('/', function(request, response) {
    var outstring;
    var buffer = new buffer();
    outstring = buffer.toString('utc 8', fs.readFileSync("index.html")); 

    response.send(outstring);
});


var port = process.env.PORT || 5000;
app.listen(port, function() {
  console.log("Listening on " + port);
});
