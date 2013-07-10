var express = require('express');

var app = express.createServer(express.logger());

var fs = require('fs');

app.get('/', function(request, response) {
 var outstring;
 fs.readFile('./index.html' function read(err, data) {
     if (err) {
	 throw err;
     }
     outstring = data;
   }  
 );
   response.send(outstring);
}


var port = process.env.PORT || 5000;
app.listen(port, function() {
  console.log("Listening on " + port);
});
