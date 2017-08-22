'use strict';

$(document).ready( () => {
  console.log('app started');
  new Catalog();
});

class Catalog {
  constructor () {
    let tags = ['Nokia', 'motorola', 'lg', 'Samsung'];
    
    $("#accordion" ).accordion({
      animate: 500,
      collapsible: true
    });
    
    $( "#slider-range" ).slider({
      range: true,
      min: 0,
      max: 100,
      values: [ 0, 100 ],
      slide: function( event, ui ) {
        $('#left-slider').text(ui.values[0]);
        $('#right-slider').text(ui.values[1]);
      }
    });
    
    $( "#tags" ).autocomplete({
      source: tags
    });
    
    $( "#datepicker" ).datepicker({
      showOn: "button",
      dateFormat: "dd-mm-yy",
      buttonImage: "images/calendar.gif",
      buttonImageOnly: true,
      buttonText: "Select date",
      changeMonth: true,
      changeYear: true
    }).datepicker("setDate", new Date());
    
    $( "#dialog-confirm" ).dialog({
      resizable: false,
      height: "auto",
      width: 300,
      modal: true,
      show: {
        effect: "blind",
        duration: 1000
      },
      hide: {
        effect: "explode",
        duration: 1000
      },
      buttons: {
        Yes: function() {
          $( this ).dialog( "close" );
        },
        No: function() {
          $( this ).dialog( "close" );
        },
        Cancel: function() {
          $( this ).dialog( "close" );
        }
      }
    });
    $('#launchDialog').on('click', () => {
      $('#dialog-confirm').dialog('open');
    });
    
    let progressbar = $( "#progressbar" ),
        progressLabel = progressbar.find('div.progress-label');
    progressbar.progressbar({
      value: false,
      change: () => {
        progressLabel.text( progressbar.progressbar( "value" ) + "%" );
      },
      complete: () => {
        progressLabel.text( "Complete!" );
      }
    });
    $('#launchBar').on('click', () => {
      setTimeout( progress, 2000 );
      
      function progress() {
        var val = progressbar.progressbar( "value" ) || 0;
 
        progressbar.progressbar( "value", val + 2 );

        if ( val < 99 ) {
          setTimeout( progress, 80 );
        }
      }
    });
  }
  
}