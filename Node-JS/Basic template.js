// const { response } = require('express');
const http = require('http'); //requires http library in nodejs
const fs = require('fs'); //file handling import
const port = 3000;  //just a basic int var for port

const server = http.createServer(function(req, res)  //request and response parameters
{ //handles all page requests in this function.
  res.writeHead(200, { 'Content-Type': 'text/html' }) //Used to write html responses. Uses 200 code to signal everything is fine.
  //content-type header tells browser we're sending an html file for it to parse.
  fs.readFile('index.html', function(error, data){ //takes filename to read, function with error and data = index.html data.
    if (error) {
      res.writeHead(404) //sends 404 error to browser.
      res.write('Error 404: File Not Found')
    } else {
      res.write(data) //sends index.html
    }
    res.end() //marks end of response(s)
  })


})

server.listen(port, function(error)
{ if (error) { //if theres an error passed, run this.
  console.log("Error:", error);
} else { //if no error, run this.
  console.log('Server is listening on port', port);
}
})
