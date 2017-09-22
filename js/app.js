class Animations {
  constructor () {
    console.log('started!');
    this.init();
  }

  init () {
    document.getElementById('select-animation').addEventListener('change', (e) => {
      console.log(`example-${e.target.value}`)
      document.getElementById(`example-${e.target.value}`).style.display = 'block';
    });
  }

}

window.onload = () => {
  new Animations();
};