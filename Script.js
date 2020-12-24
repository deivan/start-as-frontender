var page=0;

var hourse=11;
var minutes=30;
document.getElementById('button').addEventListener('click', function () {
    switch(page){
        case 0 :{
            break;
        }
        case 1:{
            var e = document.getElementById('1');
            e.style.display = 'none';
            var d = document.getElementById('0');
            d.style.display = 'block';
            page=0;
            break;
        }
        case 2:{
            var f = document.getElementById('2');
            f.style.display = 'none';
            var g = document.getElementById('1');
            g.style.display = 'block';
            page=1;
            break;
        }
        case 3:{
            var h = document.getElementById('3');
            h.style.display = 'none';
            var j = document.getElementById('2');
            j.style.display = 'block';
            page=2;
            break;
        }
        
        break;
    }
  });
  document.getElementById('button_to2').addEventListener('click', function () {
    
    var k = document.getElementById('0');
        k.style.display = 'none';
    var l = document.getElementById('1');
    l.style.display = 'block';
    page=1;
  });
  document.getElementById('button_to2_2').addEventListener('click', function () {
    
    var e = document.getElementById('0');
        e.style.display = 'none';
    var e = document.getElementById('1');
    e.style.display = 'block';
    page=1;
  });
  document.getElementById('button_to3').addEventListener('click', function () {
    
    var k = document.getElementById('1');
        k.style.display = 'none';
    var l = document.getElementById('2');
    l.style.display = 'block';
    page=2;
  });
  document.getElementById('button_to3_2').addEventListener('click', function () {
    
    var e = document.getElementById('1');
        e.style.display = 'none';
    var e = document.getElementById('2');
    e.style.display = 'block';
    page=2;
  });
  document.getElementById('button_to4').addEventListener('click', function () {
    
    var e = document.getElementById('2');
        e.style.display = 'none';
    var e = document.getElementById('3');
    e.style.display = 'block';
    page=3;
  });
  document.getElementById('hoursup').addEventListener('click', function () {
    if(hourse<23){
    var e = document.getElementById('hourse');
    hourse=hourse+1;
        e.textContent=(hourse)+" h";
    }
  });
  document.getElementById('hoursdown').addEventListener('click', function () {
    if(hourse>0){
    var e = document.getElementById('hourse');
    hourse=hourse-1;
        e.textContent=(hourse)+" h";
    }
  });
  document.getElementById('minutsup').addEventListener('click', function () {
    if(minutes<59){
    var e = document.getElementById('minute');
    minutes=minutes+1;
        e.textContent=(minutes)+" m";
    }
  });

  minutsdown.onclick=function(){if(minutes>0){
        var e = document.getElementById('minute');
        minutes=minutes-1;
             e.textContent=(minutes)+" m";
        }}

        function myFunction() {
            var popup = document.getElementById("myPopup");
            popup.classList.toggle("show");
        }
//   document.getElementById('minutsdown').addEventListener('click', function () {
//     if(minutes>0){
//     var e = document.getElementById('minute');
//         e.textContent=(minutes-1)+" m";
//     }
//   });

