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
    this.selector = document.getElementById('bet');
    this.buttonPlay = document.getElementById('buttonStart');
    this.buttonStop = document.getElementById('buttonReset');
    this.ui = [this.radio[0], this.radio[1],this.radio[2], this.selector, this.buttonPlay, this.buttonStop];
    
    this.cash = !!window.localStorage.getItem('cash') 
                ? 1 * window.localStorage.getItem('cash') 
                : 100;
    document.getElementById('cash').innerText = this.cash;
  }
  
  addClick (elementId, refLink) {
    let self = this;
    document.getElementById(elementId).addEventListener('click',(e) => {
      e.preventDefault();
      refLink(self);
    });
  }
  
  clickStart (self) {
    self.getBetNumber();
  }
  
  clickReset (self) {
    document.getElementById('results').style.display = 'none';
    self.buttonPlay.classList.remove('disabled');
    self.bugs.map( (bug) => {
      bug.style.left = '0px';
    });
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
    this.prepareUI(false);
    getStep();
    
    function getSpeed () {
      return Math.random()*10 +1;
    }
    
    function getStep () {
      let flag = null, endOfLine = 420;
      self.bugs.map( (bug, index) => {
        let x = parseFloat(bug.style.left);
        x += speeds[index];
        bug.style.left = x + 'px';
        if (x > endOfLine) flag = index +1;
      });
      if (!!flag) {
        self.showResult(flag);
      } else {
        setTimeout(()=> {
          getStep();
        }, 100);
      }
      
    }
  }
  
  showResult (winner) {
    let win = document.getElementById('result-win'),
        loo = document.getElementById('result-loose');
    document.getElementById('results').style.display = 'block';
    
    if (winner == this.selectedNumber) {
      this.cash += parseFloat(this.selector.value);
      this.updateCash();
      win.classList.remove('hidden');
      loo.classList.add('hidden');
    } else {
      this.cash -= parseFloat(this.selector.value);
      this.updateCash();
      win.classList.add('hidden');
      loo.classList.remove('hidden');
    }
    this.prepareUI(true);
    this.buttonPlay.classList.add('disabled');
  }
  
  prepareUI (state) {
    this.ui.map( (item) => {
      state 
        ? item.classList.remove('disabled')
        : item.classList.add('disabled');
    });
  }
  
  updateCash () {
    window.localStorage.setItem('cash', this.cash); 
    document.getElementById('cash').innerText = this.cash;
  }
}
  