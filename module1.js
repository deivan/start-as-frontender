export const PI = 3.1415;

export function blackHole () {
    let hole = document.createElement('div'), step = 1;
    hole.setAttribute('style', 'position:absolute;background-color:black;width:1%;height:1%;border-radius:50%;z-index:99999;left:-50%;top:-50%');
    document.body.appendChild(hole);
    draw();

    function draw() {
        if(step <= 200) {
            setTimeout(() => {
                hole.style.width = hole.style.height = `${step}%`;
                step++;
                draw();
            }, 5);
        } else {
            setTimeout(() => {
                hole.remove();
            }, 1000);
        }
    }
}
