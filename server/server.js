const WebSocketServer = new require('ws');
const crypto = require('crypto');

let clients = {}, names = {};

let wss = new WebSocketServer.Server({
  port: 8085
});
/*
 * message format: {
 *   id: sender Hash
 *   type: message type: 0 - system, 1 - for all clients, 2 - private
 *   text: message
 */
wss.on('connection', ws => {

  let user = {
    id: crypto.randomBytes(25).toString('hex'),
    username: null
  };
  log('NEW_CONN', user.id);
  
  clients[user.id] = ws;

  ws.on('message', getMessage);
  ws.on('close', close);
  
  function getMessage (msg) {
    let msgObj = null;
    log('NEW_MSG', msg);
    try {
      msgObj = JSON.parse(msg);
      switch (msgObj.type) {
        case 0:
          // systemsessage
          sendSystem(msgObj.text, msgObj.name);
          break;
        case 1:
          // broadcast
          if (user.username !== null)
            sendBroadcast(msgObj.text);
          break;
        case 2:
          if (user.username !== null)
            sendPrivate(msgObj.name, msgObj.text);
          break;
      }
    } catch (e) {
      log('PARSE_ERROR', e)
    }
  }
  
  function close () {
    log('CLOSE_CONN', user.id);
    delete clients[user.id];
    if (!!names[user.username]) delete names[user.username];
  }
  
  function sendSystem (key, value) {
    switch (key) {
      case 'auth':
        user.username = value;
        names[value] = user.id;
        clients[user.id].send(JSON.stringify({type: 'handshake', text: 'OK'}));
        log('SENT_MSG', `handshake to ${user.username}`);
        break;
        
    }
  }
  
  function sendBroadcast (msg) {
    for (let key in clients)
      clients[key].send(JSON.stringify({type:1, name: user.username, text: msg}));
    log('SENT_MSG', `broadcast from ${user.username}: ${msg}`);
  }
  
  function sendPrivate (name, msg) {
    for (let key in names) {
      if (key === name) {
        if (!!clients[names[key]]) {
          clients[names[key]].send(JSON.stringify({type:2, name: user.username, text: msg}));
          log('SENT_MSG', `private for ${name} from ${user.username}: ${msg}`);
        }
      }
    }
  }
   
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