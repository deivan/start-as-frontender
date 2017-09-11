(function () {
  'use strict';

  angular.module('app')
    .controller('mainPage', mainPage);
  mainPage.$inject = ['$scope', '$rootScope', 'appConfig', 'ngDialog'];

  function mainPage ($scope, $rootScope, appConfig, ngDialog) {
    $scope.activeTab = 1;
    $scope.users = appConfig.mock1;
    $scope.books = appConfig.mock2;
    $scope.vehicles = appConfig.mock3;
    
    $scope.userOrder = 'id';
    $scope.comparator = false;
    
    $scope.currentUser = getEmptyUser();
    
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
    
    $scope.editRow = item => {
      showDialog(item);
    };
    
    $scope.addNew = () => {
      showDialog();
    };
    
    $scope.save = myForm => {
      console.log(myForm)
      if (myForm.invalid) return;
      if ($scope.currentUser.id === 0) {
        $scope.currentUser.id = Math.round(Math.random()*100 + 100); 
        $scope.currentUser.paidType = +$scope.currentUser.paidType;
        $scope.users.push($scope.currentUser);
      } else {
        $scope.users.map( item => {
          if ($scope.currentUser.id === item) {
            angular.copy($scope.currentUser, item);
            item.paidType = +item.paidType;
          }
        });
      }
      $scope.modal.close();
    };
    
    function showDialog (item = 0) {
      if (item !==0)
        item.paidType = item.paidType + '';
      $scope.currentUser = 
        item === 0
        ? getEmptyUser()
        : item;
      $scope.modal = ngDialog.open({ 
        template: 'form.html', 
        className: 'ngdialog-theme-default',
        scope: $scope,
        closeByDocument: false
      });
    }
    
    function getEmptyUser () {
      return {
        id: 0,
        name: '', 
        email: '', 
        online: true, 
        banned: false, 
        paidType: '0'
      };
    }
  }

})();