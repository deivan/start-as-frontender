class Countdown {
  constructor (shift) {
    this.shift = shift;
    this.startTime = Date.now();
    this.endTime = (new Date(this.startTime + shift * 3.6e6)).getTime();
    this.counter = document.getElementById('countdown');
    this.start();
  }
  
  start () {
    let range, hours, minutes, seconds, self = this;
    this.startTime += 1000;
    range = (this.endTime - this.startTime)/1000;
    hours = Math.round(range/this.shift);
    minutes = (range/this.shift - hours) *60;
    seconds = this.endTime - hours * 3.6e6 - minutes * 60;
    console.log(this.startTime, this.endTime, range, hours. minutes, seconds)
    this.counter.innerText = `${hours}:${minutes}:${seconds}`;
    setTimeout(function () {
      self.start();
    }, 1000);
  }
}

window.onload = () => {
  const cd = new Countdown(12);
};