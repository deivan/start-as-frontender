const WebSocket = require('ws');
const wss = new WebSocket.Server({ port: 8085 });

let clients = {}, names = {};
/*
 * message format: {
 *   id: sender Hash
 *   type: message type: 0 - system, 1 - for all clients, 2 - private
 *   text: message
 * 
 * Broacast:
 *   wss.clients.forEach(function each(client) {
 *     if (client.readyState === WebSocket.OPEN) {
 *       client.send(data);
 *     }
 *   });
 * 
 */
wss.on('connection', (ws, req) => {

  console.log(req.socket)
  //log('NEW_CONN', user.id);
  ws.on('message', getMessage);
  ws.on('close', close);
  
  function getMessage (msg) {
    log('NEW_MSG', msg);
    try {

    } catch (e) {
      log('PARSE_ERROR', e)
    }
  }
  
  function close () {
    log('CLOSE_CONN', user.id);
  }

  // How to send: ws.send('something');
   
  function log (type, text) {
    const types = {
      'NEW_CONN': 'New connection is here, hash is: ',
      'NEW_MSG': 'Got message: ',
      'CLOSE_CONN': 'Connection closed for hash ',
      'PARSE_ERROR': 'Error happens when parsed ',
      'SENT_MSG': 'Server send a message:'
    };
    console.log(`${(new Date()).toLocaleString()}: ${types[type]} ${text}`);
  }

});

console.log('Server started at 8085');