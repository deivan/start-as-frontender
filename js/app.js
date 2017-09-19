class Main {
  constructor () {
    console.log('started!');
    Vue.use(VueMaterial);
    this.getData();
    this.makeApp();
  }
  
  makeApp () {
    let self = this;
    this.app = new Vue({
      el: '#app-instance',
      router: self.makeRoutes(),
      data: {
        data:[],
        version: null
      },
      methods: {

      }
    });
  }
  
  getData(){

  }
  
  makeRoutes () {
    return new VueRouter({
      routes: [
        { path:'/foo', component: { template: '<h3>1</h3>'} },
        { path:'/bar', component: { template: '<h3>2</h3>'} }
      ]
    });
  }
}