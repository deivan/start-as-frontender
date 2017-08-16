'use strict';

$(document).ready( () => {
  console.log('app started');
  new Catalog();
});

class Catalog {
  constructor () {
    this.data = null;
    this.getData();
  }
  
  getData () {

  }
}