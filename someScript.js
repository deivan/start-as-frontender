(function (window) {
    console.log('Hooray! I was loaded from remote host!');

    window.myFunction = () => {
        console.log('= Function from remote =');
    };
})(window);