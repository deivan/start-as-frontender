class Animations {
  constructor () {
    console.log('started!');
    this.init();
    this.example4();
    this.example6();
  }

  init () {
    document.getElementById('select-animation').addEventListener('change', e => {
      let a = document.querySelectorAll('.example-slot');
      for (let i = 0; i < a.length; ++i) 
        a[i].style.display = 'none';
      document.getElementById(`example-${e.target.value}`).style.display = 'block';
    });
  }
  
  example4 () {
    let span, letter,
        byline = document.getElementById('byline'),
        bylineText = byline.innerHTML,
        bylineArr = bylineText.split('');

    byline.innerHTML = '';

    for (let i = 0; i < bylineArr.length; i++) {
      span = document.createElement("span");
      letter = document.createTextNode(bylineArr[i]);
      if (bylineArr[i] == ' ') {
        byline.appendChild(letter);
      } else {
        span.appendChild(letter);
        byline.appendChild(span);
      }
    }
  }
  
  example6 () {
    let fullpage = document.getElementById('fullpage'),
        switcher = document.getElementById('switch');
    switcher.addEventListener('click', (e) => {
      if (fullpage.classList.contains('night')) {
          fullpage.classList.remove('night');
          switcher.classList.remove('switched');
      }
      else {
          fullpage.classList.add('night');
          switcher.classList.add('switched');
      }
    });
  }

}

window.onload = () => {
  new Animations();
};