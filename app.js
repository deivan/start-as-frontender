'use strict';

let CATALOG;

$(document).ready( () => {
  console.log('app started');
  CATALOG = new Catalog();
});

class Catalog {
  constructor () {

    $("#accordion" ).accordion({
      animate: 500,
      collapsible: true
    });
  }
  
  startCountdown () {
    let counter = $("#getting-started");
    counter.countdown("2018/01/01", (e) => {
      counter.text(
        e.strftime('%D days %H:%M:%S')
      );
    });
  }
  
  startTwenty() {
     $("#container1").twentytwenty();
  }
  
  startZoom () {
    $('#zoom_01').elevateZoom({
      zoomType: "inner",
      cursor: "crosshair",
      zoomWindowFadeIn: 500,
      zoomWindowFadeOut: 750
    }); 
  }
}