(function () {
  'use strict';
  
  angular.module('app')
    .directive('myHeader', myHeader)
    .directive('paymentType', paymentType);
    
  function myHeader () {
    return {
      template: '<h1 ng-style="myStyle">Header: {{newTitle}}</h1><hr ng-if="isLined" /><h5>someting else may be here</h5>',
      scope: {
        newTitle: '=info',
        isLined: '=lined',
        myStyle: '=mystyle'
      }
    };
  }
  
  function paymentType () {
    return {
      template: 
        '<div class="tabs__paycards--core">\
          <span class="tabs__paycards" ng-class="cardClasses[paymentType]"></span>\
          <span class="tabs__paycards--label">{{cardLabels[paymentType]}}</span>\
        </div>',
      scope: { 
        paymentType: '=payment'
      },
      controller:['$scope', paymentController]
    };
    
    function paymentController ($scope) {
      $scope.cardClasses = [
        'tabs__paycards--discover',
        'tabs__paycards--visa',
        'tabs__paycards--mastercard',
        'tabs__paycards--ae'
      ];
      $scope.cardLabels = [
        'Discover','Visa','MasterCard','AmericanExpress'
      ];
    }
  }
  
})();