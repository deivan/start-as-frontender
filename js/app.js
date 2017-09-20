class Main {
  constructor () {
    console.log('started!');
    Vue.use(VueMaterial);
    this.dataField = {};
    this.getData();
    //this.makeApp();
  }
  
  makeApp () {
    let self = this;
    
    Vue.component('table-view', {
       template: '<md-table v-once>\
                    <md-table-header>\
                      <md-table-row>\
                        <md-table-head>Old Name</md-table-head>\
                        <md-table-head md-numeric>New Name</md-table-head>\
                      </md-table-row>\
                    </md-table-header>\
                    <md-table-body>\
                      <md-table-row v-for="item in arr">\
                        <md-table-cell>{{item.oldName}}</md-table-cell>\
                        <md-table-cell>{{item.newName}}</md-table-cell>\
                      </md-table-row>\
                    </md-table-body>\
                  </md-table>',
        props: ['data'],
        data: function () {
            return {
                arr: self.dataField[this.data].objects
            };
        }
    });
    
    this.app = new Vue({
      el: '#app-instance',
      router: self.makeRoutes(),
      data: {
        data:[],
        version: null,
            vertical: 'bottom',
    horizontal: 'center',
    duration: 4000
      },
      methods: {

      }
    });
  }
  
  getData(){
    Vue.http.get('rename.json')
      .then( data => {
          this.dataField = JSON.parse(data.data);
          this.makeApp();
          console.log(this.dataField, this)
      })
      .catch( data => {
          console.log('error', data,this.app)
          this.app.$refs.snackbar.open();
      })
  }
  
  makeRoutes () {
      let self = this;
      console.log(1,self.dataField.r61.objects)
    return new VueRouter({
      routes: [
        { path:'/r61', component: { template: '<table-view data="r61"></table-view>'} },
        { path:'/r62', component: { template: '<table-view data="r62"></table-view>'} },
        { path:'/r63', component: { template: '<table-view data="r63"></table-view>'} },
        { path:'/r64', component: { template: '<table-view data="r64"></table-view>'} },
        { path:'/r65', component: { template: '<table-view data="r65"></table-view>'} },
        { path:'/r66', component: { template: '<table-view data="r66"></table-view>'} },
        { path:'/r67', component: { template: '<table-view data="r67"></table-view>'} },
        { path:'/r68', component: { template: '<table-view data="r68"></table-view>'} }
      ]
    });
  }
}