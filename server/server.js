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
  let user = {}, status;
  console.log(req.socket)
  ws.on('message', msg => {
    status = getMessage(msg);
    if (status) {
      switch (status.type) {
        case 0:
          user.id = status.id;
          user.name = status.message;
          log(0, user.id)
          break;
        case 1:
          broadcast(JSON.stringify({
            type: 1,
            message: status.message,
            id: user.name
          }));

      }
    }
  });
  ws.on('close', close);
});

function broadcast(data) {
  wss.clients.forEach(function each(client) {
    if (client.readyState === WebSocket.OPEN) {
      client.send(data);
      console.log(data)
    }
  });
}

function getMessage (msg) {
  let obj = false;
  try {
    obj = JSON.parse(msg);
  } catch (e) {
    log('PARSE_ERROR', e)
  }
  return obj;
}

function close () {
  //log('CLOSE_CONN', user.id);
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

console.log('Server started at 8085');