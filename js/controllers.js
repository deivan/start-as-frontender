(function () {
  'use strict';

  angular.module('app')
    .controller('mainPage', mainPage);
  mainPage.$inject = ['$scope'];

  function mainPage ($scope) {
    console.log('controller started', $scope);
  }

})();