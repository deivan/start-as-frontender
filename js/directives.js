(function () {
  'use strict';
  
  angular.module('app')
    .directive('myHeader', myHeader);
    
  function myHeader () {
    return {
      template: '<h1>Header: </h1><hr /><h5>someting else may be here</h5>'
    };
  }
})();