(function () {
  'use strict';

  angular.module('app')
    .controller('mainPage', mainPage);
  mainPage.$inject = ['$scope', '$rootScope', 'appConfig'];

  function mainPage ($scope, $rootScope, appConfig) {
    $scope.title = 'Another One';
    $scope.title2 = $rootScope.title;
    $scope.showLine = true;
    $scope.items = [];
    $scope.siteName = '';
    $scope.objItems = appConfig.data;
    $scope.current = 'null';
    console.log('controller started', $scope, appConfig);
    
    $scope.transformer = () => {
      $scope.newName = $scope.siteName.toUpperCase();
    };
    
    $scope.changeColor = () => {
      $scope.newStyle = { color: 'red'};
    };
    
    $scope.addLine = () => {
      if ($scope.siteName.trim() !== '') {
        $scope.items.push($scope.siteName);
      } else {
        console.log('empti string');
      }
    };
  }

})();