window.onload = () => {
    console.log('app started.');
    //xhttp();
    //fetcH(); 
};

function xhttp() {
  let xhr = new XMLHttpRequest();

  xhr.open('GET', 'https://api.github.com/users/deivan', true);
  xhr.responseType = 'json';
  xhr.send();
  xhr.onload = function() {
    console.log(`status: ${xhr.status} - ${xhr.statusText}`);
    console.log(`response: ${JSON.stringify(xhr.response)}`);
  };
  
  xhr.onerror = function() {
    console.error('error');
  };
}

function fetcH() {
  // https://jsonplaceholder.typicode.com/users
  // https://jsonplaceholder.typicode.com/photos
  // http://rename.dp.ua/rename.json
  let promise = fetch('https://api.github.com/users/deivan', {
    method: "GET",
    headers: {"Content-type": "application/json;charset=UTF-8"}
  })

  promise
    .then(res => res.json())
    .then(json => console.log(json))
    .catch(res => {
      console.error(res);
    });
}
