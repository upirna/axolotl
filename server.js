var fs = require('fs');
var path = require('path');
var http2 = require('http2');

// The callback to handle requests
function onRequest(request, response) {
  var filename = path.join(__dirname, request.url);

  console.log(filename);

  if ((filename.indexOf(__dirname) === 0) && fs.existsSync(filename) && fs.statSync(filename).isFile()) {
    response.writeHead('200');

    fs.createReadStream(filename).pipe(response);
  }

  // Otherwise responding with 404.
  else {
    response.writeHead('404');
    response.end();
  }
}

// Creating the server in plain or TLS mode (TLS mode is the default)
var server;
if (process.env.HTTP2_PLAIN) {
  server = http2.raw.createServer({
  }, onRequest);
} else {
  server = http2.createServer({
    key: fs.readFileSync(path.join(__dirname, '/localhost.key')),
    cert: fs.readFileSync(path.join(__dirname, '/localhost.crt'))
  }, onRequest);
}
server.listen(process.env.HTTP2_PORT || 8080);
