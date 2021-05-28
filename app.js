window.onload = () => {
    loadSomeScript();
    //myFunction();

}


function loadSomeScript(callback) {
    let script = document.createElement('script');
    script.src = 'someScript.js';
    //script.onload = () => callback();
    //script.onerror = () => callback(new Error('Loading was failed'));
    document.body.append(script);
}





function setPromise() {
    let promise = new Promise((resolve, reject) => {
        setTimeout(() => resolve('finished'), 1000);
        //setTimeout(() => reject(new Error('Wasted!')), 1000);
    });

    // promise
    //     .then(result => console.log('resolved:', result))
    //     .catch(error => console.log('Failed:', error))
    //     .finally(all => console.log('Finished:', all));
}





// let promise = loadPromisedScript();
// promise
//     .then(res => console.log('Promised loaded', res))
//     .catch(err => console.log('Promised error', err));
function loadPromisedScript(src = 'someScript.js') {
    return new Promise((resolve, reject) => {
        let script = document.createElement('script');
        script.src = src;
        script.onload = () => resolve('success');
        script.onerror = () => reject(new Error('Loading was failed'));
        document.body.append(script);
    });
}

// loadPromisedScript('chainOne.js')
// .then(() => loadPromisedScript('chainTwo.js'))
// .then(() => loadPromisedScript('chainThree.js'))
// .then(() => console.log('all chaines loaded!'));





// https://jsonplaceholder.typicode.com/posts/1
// https://jsonplaceholder.typicode.com/posts/1/comments
// https://jsonplaceholder.typicode.com/users
function getPostandComments() {
    fetch('https://jsonplaceholder.typicode.com/posts/1')
        .then(res => res.json())
        .then(json => console.log(json));
}


async function asyncPostandComments() {
    let res = await fetch('https://jsonplaceholder.typicode.com/posts/1');
    let answer = await res.json();
    console.log(answer);
}