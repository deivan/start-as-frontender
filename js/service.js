angular.module('app')
  .service('appService', function ($http, $q, $rootScope) {
    return ({
       getUser: getUser,
       updateProfile: updateProfile,
       
       getMarketGoods: getMarketGoods,
       getUserGoods: getUserGoods,
       wearGood: wearGood,
       buyGood: buyGood,
       
       getUsers: getUsers,
       
       getConversations: getConversations,
       startConversation: startConversation,
       getConversation: getConversation,
       sendMessage: sendMessage,
       
       playLuckyStones: playLuckyStones,
       playCrazyRace: playCrazyRace,
       
       startSingleBattle: startSingleBattle,
       turnSingleBattle: turnSingleBattle
    });

    function getUser () {
      $rootScope.isShowLoading = true;
       var request = $http({
           method: 'get',
           url: 'http://demenkov.dp.ua:8085/login/',
           data: {}
       });
       return (request.then( handleSuccess, handleError ));
    }
    
    function updateProfile (data) {
      $rootScope.isShowLoading = true;
      var request = $http({
        method: 'post',
        url: '/api/user',
        data: data
      });
      return (request.then( handleSuccess, handleError ));
    }
    
    function getMarketGoods () {
      $rootScope.isShowLoading = true;
      var request = $http({
        method: 'get',
        url: '/api/goods',
        data: {}
      });
      return (request.then( handleSuccess, handleError ));
    }
    
    function getUserGoods () {
      $rootScope.isShowLoading = true;
      var request = $http({
        method: 'get',
        url: '/api/goods/user',
        data: {}
      });
      return (request.then( handleSuccess, handleError ));
    }

    function wearGood (data) {
      $rootScope.isShowLoading = true;
      var request = $http({
        method: 'post',
        url: '/api/goods/user/' + data.id + '/wear',
        data: { weared: data.weared }
      });
      return (request.then( handleSuccess, handleError ));
    }
    
    function buyGood (id) {
      $rootScope.isShowLoading = true;
      var request = $http({
        method: 'post',
        url: '/api/goods/user/' + id + '/buy',
        data: {}
      });
      return (request.then( handleSuccess, handleError ));
    }
    
    function getUsers () {
      $rootScope.isShowLoading = true;
      var request = $http({
        method: 'get',
        url: '/api/users',
        data: {}
      });
      return (request.then( handleSuccess, handleError ));
    }
    
    function getConversations () {
      $rootScope.isShowLoading = true;
      var request = $http({
        method: 'get',
        url: '/api/conversations',
        data: {}
      });
      return (request.then( handleSuccess, handleError ));
    }
    
    function startConversation (data) {
      $rootScope.isShowLoading = true;
      var request = $http({
        method: 'post',
        url: '/api/conversations',
        data: data
      });
      return (request.then( handleSuccess, handleError ));      
    }
    
    function getConversation (id) {
      $rootScope.isShowLoading = true;
      var request = $http({
        method: 'get',
        url: '/api/conversation/' + id,
        data: {}
      });
      return (request.then( handleSuccess, handleError ));
    }
    
    function sendMessage(id, text) {
      $rootScope.isShowLoading = true;
      var request = $http({
        method: 'post',
        url: '/api/conversation/' + id,
        data: {text: text}
      });
      return (request.then( handleSuccess, handleError ));      
    }
    
    function playLuckyStones (data) {
      $rootScope.isShowLoading = true;
      var request = $http({
        method: 'post',
        url: '/api/luckystones/',
        data: { stones: data }
      });
      return (request.then( handleSuccess, handleError ));  
    }
    
    function playCrazyRace (bug, bet) {
      $rootScope.isShowLoading = true;
      var request = $http({
        method: 'post',
        url: '/api/crazyrace/',
        data: {
          bug: bug,
          bet: bet
        }
      });
      return (request.then( handleSuccess, handleError ));    
    }
    
    function startSingleBattle () {
      $rootScope.isShowLoading = true;
      var request = $http({
        method: 'post',
        url: '/api/single-battle/start/',
        data: {}
      });
      return (request.then( handleSuccess, handleError ));      
    }
    
    function turnSingleBattle (data) {
      $rootScope.isShowLoading = true;
      var request = $http({
        method: 'post',
        url: '/api/single-battle/turn/',
        data: data
      });
      return (request.then( handleSuccess, handleError ));      
    }
    
    // response handlers
    function handleSuccess (response) {
      $rootScope.isShowLoading = false;
         console.log('request result: ', response);
         return (response.data);
    }

    function handleError (response) {
      $rootScope.isShowLoading = false;
       console.log('ERROR result: ', response);
       if (
           ! angular.isObject( response.data ) ||
           ! response.data
           ) {
           return ($q.reject({ detail: response.status + ': ' + response.statusText }));
       }
       return ($q.reject(response.data));
    }
  });