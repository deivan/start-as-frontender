(function () {
  'use strict';

  angular.module('app', [])
    .run(['$rootScope', runApp])
    .constant('appConfig', {
        someData: '',
        mock1: [
          { id: 100, name: 'Josef', email: 'asssass@111.com', online: true, banned: false, paidType: 1},
          { id: 101, name: 'Adam', email: 'adam11@222.com', online: false, banned: false, paidType: 1},
          { id: 102, name: 'Joe', email: 'j1111@aaaa.com', online: false, banned: false, paidType: 2},
          { id: 103, name: 'Anselmo', email: 'anselm.aa@deeee.com', online: true, banned: false, paidType: 2},
          { id: 104, name: 'Boris', email: 'boris-boris@aadddn.com', online: true, banned: false, paidType: 2},
          { id: 105, name: 'Willy', email: 'w1w@3sss.com', online: false, banned: false, paidType: 1},
          { id: 106, name: 'Chris', email: 'ch09@aaaaxaa.com', online: true, banned: false, paidType: 1},
          { id: 107, name: 'Amanda', email: 'ama@nda.com', online: false, banned: true, paidType: 1},
          { id: 108, name: 'Norman', email: 'nooooo@llq1.com', online: true, banned: false, paidType: 3}
        ],
        mock2: [
          { id: 2000, author: 'John Resigh', title: 'Javascript Ninja', price: '10.20'},
          { id: 2001, author: 'Linus Torvalds', title: 'Just For Fun', price: '5.35'},
          { id: 2002, author: 'Ivan Demenkov', title: 'Some people is thiking they think', price: '9.99'}
        ],
        mock3: [
          { id: 30000, type: 'car', model: 'Honda Civic', color: 'white' },
          { id: 30001, type: 'car', model: 'Chery Tyggo', color: 'black' },
          { id: 30003, type: 'car', model: 'Lada 2107', color: 'baklajan' },
          { id: 30004, type: 'bike', model: 'Aprillia Lux', color: 'yellow' }
        ]
    });

  function runApp ($rootScope) {
    $rootScope.title = 'My Test Application';
    console.log('app started');
  }

})();
// show table data filders, ordering
// add form for collect, delete and update data via ngDialog
// form validators