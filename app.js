/*
*   There is a block for long comments
*
*/

var a = 1;
const PI = 3.14;
let str = 'Hello JS';

// One line comment

console.log(`3: I'm in the separate file`);
console.log(a, PI, str);

//first();
//second();
//write('I love JS');

//(function() { console.log(`4: I'm a immediate function`)})();

function first() {
  let a = 2;
  console.log(a);
}

function second() {
  console.log(a);
  let a = 3;
}

const write = txt => {
  let container = document.getElementById('container');
  let textNode = document.createElement('P');

  textNode.innerText = txt;
  container.append(textNode);
}
