const http = require('http');
const sockjs = require('sockjs');

let echo = sockjs.createServer({ sockjs_url: 'http://cdn.jsdelivr.net/sockjs/1.0.1/sockjs.min.js' });
echo.on('connection', conn => {
  
    console.log('Connection: ', conn)
    conn.on('data', message => {
      conn.write(message);
    });
    conn.on('close', evt => {
      
    });
    
});

let server = http.createServer();
echo.installHandlers(server, {prefix:'/ws'});
server.listen(8085, '0.0.0.0');