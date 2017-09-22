class Animations {
  constructor () {
    console.log('started!');
    this.init();
    //this.example4();
    this.example6();
  }

  init () {
    document.getElementById('select-animation').addEventListener('change', (e) => {
      let a = document.querySelectorAll('.example-slot');
      for (let i = 0; i < a.length; ++i) 
        a[i].style.display = 'none';
      document.getElementById(`example-${e.target.value}`).style.display = 'block';
    });
  }
  
  example4 () { // Good example for dirty code
    var byline = document.getElementById('byline');     // Find the H2
    bylineText = byline.innerHTML;                                      // Get the content of the H2
    bylineArr = bylineText.split('');                                   // Split content into array
    byline.innerHTML = '';                                                      // Empty current content

    var span;                   // Create variables to create elements
    var letter;

    for(i=0;i<bylineArr.length;i++){                                    // Loop for every letter
      span = document.createElement("span");                    // Create a <span> element
      letter = document.createTextNode(bylineArr[i]);   // Create the letter
      if(bylineArr[i] == ' ') {                                             // If the letter is a space...
        byline.appendChild(letter);                 // ...Add the space without a span
      } else {
            span.appendChild(letter);                       // Add the letter to the span
        byline.appendChild(span);                   // Add the span to the h2
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