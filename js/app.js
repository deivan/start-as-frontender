class Main {
  constructor () {
    console.log('started!');
    Vue.use(VueMaterial);
    this.makeApp();
  }
  
  makeApp () {
    let self = this;
    this.app = new Vue({
      el: '#app-instance',
      data: {
        citizens: [
          {id:1, name:'Gordon Freeman', status: 'a hero'},
          {id:2, name:'Judith Mossman', status: 'scientist'},
          {id:3, name:'Alix Vance', status: 'rebel'},
          {id:4, name:'Isaac Kleiner', status: 'scientist'}
        ],
        newPerson: {
          id: 0,
          name:'',
          status:''
        },
        showEdit: false
      },
      methods: {
        save: function () {
          this.citizens.push(this.newPerson);
          this.newPerson = {
            id: 0,
            name:'',
            status:''
          };
          this.showEdit = false;
        },
        deleteRow: function (i) {
          this.citizens = this.citizens.filter( item => item.id !== i)
        }
      }
    });
  }
}