(function () {
  'use strict';
  
  angular.module('app')
    .directive('myHeader', myHeader);
    
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
})();