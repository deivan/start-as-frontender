window.onload = () => {
    console.log('app started.');
    // http://rename.dp.ua/rename.json 

    let promise = fetch('https://api.github.com/users/deivan', {
      method: "GET",
      headers: {"Content-type": "application/json;charset=UTF-8"}
    })

    promise.then(res => res.json())
    .then(json => console.log(json))
    .catch(res => {
      console.error(res);
    });
};