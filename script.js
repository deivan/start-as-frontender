function onDragStart(event) {
    event
      .dataTransfer
      .setData('text/plain', event.target.id);
  
    event
      .currentTarget
      .style
      .backgroundColor = 'yellow';
  }

function onDragOver(event) {
    event.preventDefault();
}

function onDrop(event) {
    const id = event.dataTransfer.getData('text');
    const draggableElement = document.getElementById(id);
    const dropzone = event.target;

    dropzone.appendChild(draggableElement);
    event.dataTransfer.clearData();
}

// ondragstart="onDragStart(event);"
// ondragover="onDragOver(event);"
// ondrop="onDrop(event);"

var x = 0;
var y = 0;
var isdrawing = false;
const cnv = document.getElementById("canvas");
const ctx = cnv.getContext("2d");
cnv.addEventListener("mousedown", (e) => {
   x = e.offsetX;
   y = e.offsetY;
   isdrawing = true;
});
cnv.addEventListener("mousemove" ,(e) =>{
   if(isdrawing === true){
      drawLine(x, y, e.offsetX, e.offsetY);
      x = e.offsetX;
      y = e.offsetY;
   }
});
cnv.addEventListener("mouseup" ,(e) => {
   if( isdrawing === true){
      drawLine(x, y, e.offsetX, e.offsetY);
      x = 0;
      y = 0;
      isdrawing = false;
   }
});
function drawLine(x1, y1, x2, y2){
   ctx.beginPath();
   ctx.strokeStyle = "black";
   ctx.lineWidth = 1;
   ctx.moveTo(x1, y1);
   ctx.lineTo(x2, y2);
   ctx.stroke();
   ctx.closePath();
}