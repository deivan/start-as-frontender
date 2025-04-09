// a base config should be there
const CONFIG = {
  MINIMAL_BET: 1,
  TIME_STEP: 80,
}
window.onload = () => {

};

class RaceGame {
  constructor() {
    console.log('Go-Go-Go');
  }

  createUI() {
    // there we should to prepare Game Lines and UI elemnts 
    // which will be take a part into game processing
  }

  createLine(i) {
    return (`
      <div class="minigames__cr--line">
        <div class="minigames__cr--number">${i}</div>
        <input type="radio" value="${i}" name="bugs" id="bet-${i}" />
        <div class="minigames__cr--bug" id="bug-${i}" style="left:0px"></div>
      </div>
    `);
  }

  addEvents() {
    // there we should to prepare all clicks to buttons
  }

  start() {
    // Game will starts here
  }

  run() {
    // an animation for Game
  }

  end() {
    // there we will operate the end of Game
  }

};
