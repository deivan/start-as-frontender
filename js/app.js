class Main {
  constructor () {
    console.log('started!');
    Vue.use(VueMaterial);
    //this.makeApp();
  }
  
  makeApp () {
    let self = this;
    this.app = new Vue({
      el: '#app-instance',
      data: {
        data:[],
        version: null
      },
      methods: {

      }
    });
  }
}