(function () {
  'use strict';

  angular.module('app')
    .controller('mainPage', mainPage);
  mainPage.$inject = ['$scope', '$rootScope', 'appConfig'];

  function mainPage ($scope, $rootScope, appConfig) {
    $scope.activeTab = 1;
    $scope.users = appConfig.mock1;
    $scope.books = appConfig.mock2;
    $scope.vehicles = appConfig.mock3;
    
    $scope.userOrder = 'id';
    $scope.comparator = false;
    
    $scope.showTab = tab => {
      $scope.activeTab = tab;
    };
    
    $scope.setUsersOrder = field => {
      if (field === $scope.userOrder) {
        $scope.comparator = !$scope.comparator;
      } else {
        $scope.userOrder = field;
      }
    };
    
    $scope.deleteUser = (id, e) => {
      e.stopPropagation();
      let newArray = $scope.users.filter( item => item.id !== id);
      $scope.users = newArray;
    };
  }

})();