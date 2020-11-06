class Countdown {
  constructor (shift, id) {
    this.shift = shift;
    this.startTime = Date.now();
    this.endTime = (new Date(this.startTime + shift * 3.6e6)).getTime();
    this.counter = document.getElementById(id);
    this.start();
  }
  
  start () {
    let range, hours, minutes, seconds, self = this;
    this.startTime += 1000;
    range = (this.endTime - this.startTime)/1000;
    hours = this.zeroAdd(Math.floor( (range/(60*60)) % 24 ));
    minutes = this.zeroAdd(Math.floor( (range/60) % 60 ));
    seconds = this.zeroAdd(Math.floor( range % 60 ));

    this.counter.innerText = `${hours}:${minutes}:${seconds}`;
    setTimeout(function () {
      self.start();
    }, 1000);
  }
  
  zeroAdd (digit) {
    return (`0${digit}`).slice(-2);
  }
}

window.onload = () => {
  const cd = new Countdown(12, 'countdown');
  new Countdown(1, 'block1');
  new Countdown(2, 'block2');
  new Countdown(3, 'block3');
  new Countdown(4, 'block4');
  new Countdown(5, 'block5');
};