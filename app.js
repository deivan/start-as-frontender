window.onload = () => {
  let a = new CrazyRace();
};

class CrazyRace {
  constructor () {
    this.addClick('buttonStart',this.clickStart);
    this.addClick('buttonReset',this.clickReset);
    this.radio = [
      document.getElementById('bet-1'),
      document.getElementById('bet-2'),
      document.getElementById('bet-3')
    ];
    this.selectedNumber = null;
    this.bugs = [
      document.getElementById('bug-1'),
      document.getElementById('bug-2'),
      document.getElementById('bug-3')
    ];
  }
  
  addClick (elementId, refLink) {
    let self = this;
    document.getElementById(elementId).addEventListener('click',(e) => {
      e.preventDefault();
      refLink(self);
    });
  }
  
  clickStart (self) {
    
    console.log('start', this);
    
    self.getBetNumber();

  }
  
  clickReset (e) {
    console.log('cancel');
    
  }
  
  getBetNumber () {
    this.radio.map((elem) => {
      if(elem.checked) this.selectedNumber = elem.value;
    });
    if(this.selectedNumber === null) {
      alert('Choose the line!');
      return;
    }
    this.runGame();
  }
  
  runGame () {
    let self = this,
        speeds = [
          getSpeed(),
          getSpeed(),
          getSpeed()
        ];
    
    getStep();
    
    function getSpeed () {
      return Math.random()*10 +1;
    }
    
    function getStep () {
      self.bugs.map( (bug, index) => {
        console.log(bug.id, bug.style.left, parseFloat(bug.style.left), speeds[index]);
        let x = parseFloat(bug.style.left);
        x += speeds[index];
        bug.style.left = x + 'px';
      });
//      setTimeout(()=> {
//        getStep();
//      }, 1000);
    }
    
  }
}
  