class Main {
  constructor () {
    console.log('started!');
    this.ws = null;
    this.messages = [];
    this.makeApp();
  }
  
  makeApp () {
    let self = this;
    this.app = new Vue({
      el: '#app-instance',
      data: {
        chatStarted: false,
        messages: self.messages,
        msg:'',
        name: '',
        private: ''
      },
      methods: {
        join: function () {
          self.connect(this.name);
        },
        send: function () {
          self.sendMsg(this.msg);
        }
      }
    });
  }
  
  connect (name) {
    this.ws = new WebSocket('ws://demenkov.dp.ua:8085/');
    
    this.ws.onopen = data => {
      console.log('start', data);
      this.ws.send(JSON.stringify({type: 0, text: 'auth', name: name}));
      this.app.chatStarted = true;
    };
    
    
    this.ws.onmessage = data => {
      console.log(data);
      let obj = JSON.parse(data.data);
      if (obj.type > 0) {
        this.messages.push(obj);
      }
      
    };
  }
  
  sendMsg (text) {
    let msg = {};
    if (this.app.private === '') {
      msg = {type: 1, text: text};
    } else {
      msg = {type: 2, text: text, name: this.app.private};
    }
    this.ws.send(JSON.stringify(msg));
    this.app.msg = '';
    this.app.private = '';
  }
  
}