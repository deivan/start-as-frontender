(function () {
  'use strict';

  angular.module('app', [])
    .run(['$rootScope', runApp])
    .constant('appConfig', {
        someData: '',
        data: [
          { key: 'a', content: 'AAA'},
          { key: 'b', content: 'BBB'},
          { key: 'c', content: 'CCC'},
          { key: 'd', content: 'DDD'},
          { key: 'e', content: 'EEE'},
        ]
    });

  function runApp ($rootScope) {
    $rootScope.title = 'My Test Application';
    console.log('app started', $rootScope);
  }

})();