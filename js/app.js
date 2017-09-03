(function () {
  'use strict';

  angular.module('app', [])
    .run(['$rootScope', runApp])
    .constant('appConfig', {
        someData: ''
    });

  function runApp ($rootScope) {
    $rootScope.title = 'My Test Application';
    console.log('app started', $rootScope);
  }

})();