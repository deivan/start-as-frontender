const MINIMAL_BET = 1;
const SPEED = 80;
const END_LINE = 436;
const CASH = 50;

window.onload = () => {
    new RaceGame();
};

class RaceGame {
    constructor() {
        this.lines = 3;
        this.cash = CASH;
        this.cashUI = document.getElementById('cash')
        this.createUI();
        this.addEvents();
    }

    createUI() {
        this.UI = ['bet-1','bet-2','bet-3','bet', 'buttonStart'];
        let lines = '';

        for (let i = 0; i < this.lines; i++) {
            lines += this.createLine(i + 1);
        }
        document.querySelector('.minigames__cr--content').innerHTML = lines;
        this.cashUI.innerText = this.cash;
        this.bugs = document.querySelectorAll('.minigames__cr--bug');
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
        let bets = document.querySelectorAll('input[name="bugs"]');

        document.getElementById('buttonReset')
            .addEventListener('click', () => {
                document.getElementById('bet').value = MINIMAL_BET;
                bets.forEach(item => {
                    item.checked = false;
                });
                this.bugs.forEach(item => {
                    item.style.left = '0px';
                });
                this.toggleUI(true);
            });
        document.getElementById('buttonStart')
            .addEventListener('click', () => {
                let ready = false;
                bets.forEach(item => {
                    if (item.checked) ready = true;
                });
                if (ready) {
                    this.start();
                }
                
            });
    }

    start() {
        this.bet = +document.getElementById('bet').value;
        this.line = +document.querySelector('input[name="bugs"]:checked').value;
        this.speeds = this.getSpeeds();
        
        this.run();
    }

    run() {
        setTimeout(() => {
            let finish = false;
            this.bugs.forEach((item, i) => {
                let x = parseInt(item.style.left);
                x += this.speeds[i];
                if(x > END_LINE) {
                    finish = i + 1;
                } else {
                    item.style.left = `${x}px`;
                }
            });
            if(finish) {
                this.end(finish);
            } else {
                this.run();
            }
        }, SPEED);
    }

    getSpeeds() {
        let arr = [];

        for(let i = 0; i < this.lines; i++)
            arr.push(Math.round(Math.random()*10 + 1));

        return arr;
    }

    end(winNumber) {
        if(winNumber === this.line) {
            this.cash += this.bet;
        } else {
            this.cash -= this.bet;
        }
        this.cashUI.innerText = this.cash;
        this.toggleUI();
    }

    toggleUI(mode = false) {
        this.UI.forEach(str => {
            let ui = document.getElementById(str);
            if (mode) {
                ui.classList.remove('disabled');
            } else {
                ui.classList.add('disabled');
            }
        })
    }
}