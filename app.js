'use strict';

$(document).ready( () => {
  console.log('app started');
  new Catalog();
});

class Catalog {
  constructor () {

    $("#accordion" ).accordion({
      animate: 500,
      collapsible: true
    });
    
    this.initMap();
    this.startTwenty();
    this.startZoom();
  }
  
  initMap () {

  }
  
  startTwenty() {
     $("#twentytwenty-container").twentytwenty();
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