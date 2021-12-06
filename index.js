const http = require('http');
const fs = require("fs");
const url = require('url');



// var q = url.parse(adr, true).query;



 http.createServer( (req, res) => {
    if (req.url == "/metrics?object=sphere&metric=volume&radius=5") {
        res.writeHead(200, {'Content-Type': 'text/html'});
        res.end(" Volume of sphere is 523.60 ");

      }  else (req.url == "/metrics?object=circle&metric=area&radius=5") ;{
            res.writeHead(200, {'Content-Type': 'text/html'});
            res.write(" Area of circle is 78.50 " );
            res.end();
           
    };

    res.end()
    
  }).listen(8080)
