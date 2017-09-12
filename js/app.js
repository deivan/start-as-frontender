angular.module('app',['ngRoute'])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl : 'game-profile.html',
        controller: 'ProfilePage'
      })
      .when('/equipment', {
        templateUrl : 'game-equipment.html',
        controller: 'EquipmentPage'
      })
      .when('/messages', {
        templateUrl : 'game-messages.html',
        controller: 'MessagesPage'
      })
      .when('/messages/:id/view', {
        templateUrl : 'game-message-view.html',
        controller: 'MessageViewPage'
      })
      .when('/mini', {
        templateUrl : 'game-minigames.html',
        controller: 'MinigamesPage'
      })
      .when('/mini/luckystones', {
        templateUrl : 'game-minigames-luckystones.html',
        controller: 'MinigamesLSPage'
      })
      .when('/mini/crazyrace', {
        templateUrl : 'game-minigames-crazyrace.html',
        controller: 'MinigamesCRPage'
      })
      .when('/single/bot', {
        templateUrl : 'game-single-battles.html',
        controller: 'SingleBattle'
      })
      .when('/single/duel', {
        templateUrl : 'game-single-battles-duel.html',
        controller: 'SingleBattleDuel'
      });
  })
  
  .run(function($rootScope){
    $rootScope.messages = [];
    $rootScope.finish = {
      isShow: false,
      prompt: 'You are looser! Come back later and fight again.'
    };
    
    var socket = new WebSocket('ws://demenkov.dp.ua:8001');
    
    socket.onopen = function() {
      console.log("Соединение установлено.");
    };

    socket.onclose = function(event) {
      console.log('Код: ' + event.code + ' причина: ' + event.reason);
    };

    socket.onmessage = function(event) {
      console.log("Получены данные ", event);
      var data;
      try {
        data = JSON.parse(event.data);
        data.data.text = decodeURI(data.data.text);
        $rootScope.messages.push(data);
        $rootScope.$apply();
      } catch (error) {
        console.log('error when parsing JSON:',error);
      }

    };

    socket.onerror = function(error) {
      console.log("Ошибка " + error.message);
    };
    
    $rootScope.sendToSocket = function (data) {
      var message = {
        type: 'chat',
        data: {
          name: $rootScope.me,
          text: encodeURI(data)
        }
      };
      socket.send(JSON.stringify(message));
    };
    
    //$rootScope.sendToSocket('ababagalamaga');
  });