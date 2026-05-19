// Create web server
var http = require('http');
var fs = require('fs');
var url = require('url');

http.createServer(function (req, res) {
  // Parse the request URL
  var parsedUrl = url.parse(req.url, true);
  var pathname = parsedUrl.pathname;

  // Handle different routes
  if (pathname === '/comments') {
    // Read comments from a file (for simplicity, using a JSON file)
    fs.readFile('comments.json', 'utf8', function (err, data) {
      if (err) {                