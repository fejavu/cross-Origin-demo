var http = require('http');
var fs = require('fs');
var path = require('path');
var url = require('url');

http.createServer(function(req, res) {
  var pathObj = url.parse(req.url,true);

  switch(pathObj.pathname) {
    case '/getst':
      var something = "This is a cross origin response via a request";
      // res.setHeader('Access-Control-Allow-Origin', 'http://localhost');
      res.end(JSON.stringify(something));
      break;
    default:
      fs.readFile(path.join(__dirname,pathObj.pathname), function(e,data){
        if(e){
          res.writeHead(404,'not found');
          res.end("<h1>404 Not Found</h1>");
        }else {
          res.end(data);
        }
      })
  }
}).listen(80);