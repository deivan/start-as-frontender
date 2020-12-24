jQuery(document).ready(function($){
    $('.button-next-page1').click(function(){
        $('#page1').hide();
        $('#page2').show();
    })
    $('.button-next-page2').click(function(){
        $('#page2').hide();
        $('#page3').show();
    })
    $('#button-next-page3').click(function(){
        $('#page3').hide();
        $('#page4').show();
    })
    $('#button-next-page4').click(function(){

    })
    $('#back-icon-page2').click(function(){
        $('#page2').hide();
        $('#page1').show();
    })
    $('#back-icon-page3').click(function(){
        $('#page3').hide();
        $('#page2').show();
    })
    $('#back-icon-page4').click(function(){
        $('#page4').hide();
        $('#page3').show();
    })

    var hour = 0;
    document.getElementById("hour").innerHTML = hour;
    $('#up-hour').click(function(){
        hour = hour + 1;
        if(hour == 24){
            hour = 0;
        }
        document.getElementById("hour").innerHTML = hour;
    });
    $('#down-hour').click(function(){
        hour = hour - 1;
        if(hour == -1){
            hour = 23;
        }
        document.getElementById("hour").innerHTML = hour;
    });

    var minute = 0;
    document.getElementById("minute").innerHTML = minute;
    $('#up-minute').click(function(){
        minute = minute + 15;
        if(minute == 60){
            minute = 0;
        }
        document.getElementById("minute").innerHTML = minute;
    });
    $('#down-minute').click(function(){
        minute = minute - 15;
        if(minute < 0){
            minute = 45;
        }
        document.getElementById("minute").innerHTML = minute;
    });
    $('#button-final').click(function(){
        alert("Thank you for yoir choise!");
    });
    
    function Calendar2(id, year, month) {
        var Dlast = new Date(year,month+1,0).getDate(),
            D = new Date(year,month,Dlast),
            DNlast = new Date(D.getFullYear(),D.getMonth(),Dlast).getDay(),
            DNfirst = new Date(D.getFullYear(),D.getMonth(),1).getDay(),
            calendar = '<tr>',
            month=["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
        if (DNfirst != 0) {
          for(var  i = 1; i < DNfirst; i++) calendar += '<td>';
        }else{
          for(var  i = 0; i < 6; i++) calendar += '<td>';
        }
        for(var  i = 1; i <= Dlast; i++) {
          if (i == new Date().getDate() && D.getFullYear() == new Date().getFullYear() && D.getMonth() == new Date().getMonth()) {
            calendar += '<td class="today">' + i;
          }else{
            calendar += '<td>' + i;
          }
          if (new Date(D.getFullYear(),D.getMonth(),i).getDay() == 0) {
            calendar += '<tr>';
          }
        }
        for(var  i = DNlast; i < 7; i++) calendar += '<td>&nbsp;';
        document.querySelector('#'+id+' tbody').innerHTML = calendar;
        document.querySelector('#'+id+' thead td:nth-child(2)').innerHTML = month[D.getMonth()] +' '+ D.getFullYear();
        document.querySelector('#'+id+' thead td:nth-child(2)').dataset.month = D.getMonth();
        document.querySelector('#'+id+' thead td:nth-child(2)').dataset.year = D.getFullYear();
        if (document.querySelectorAll('#'+id+' tbody tr').length < 6) { 
            document.querySelector('#'+id+' tbody').innerHTML += '<tr><td>&nbsp;<td>&nbsp;<td>&nbsp;<td>&nbsp;<td>&nbsp;<td>&nbsp;<td>&nbsp;';
        }
        }
        Calendar2("calendar2", new Date().getFullYear(), new Date().getMonth());
        document.querySelector('#calendar2 thead tr:nth-child(1) td:nth-child(1)').onclick = function() {
          Calendar2("calendar2", document.querySelector('#calendar2 thead td:nth-child(2)').dataset.year, parseFloat(document.querySelector('#calendar2 thead td:nth-child(2)').dataset.month)-1);
        }
        document.querySelector('#calendar2 thead tr:nth-child(1) td:nth-child(3)').onclick = function() {
          Calendar2("calendar2", document.querySelector('#calendar2 thead td:nth-child(2)').dataset.year, parseFloat(document.querySelector('#calendar2 thead td:nth-child(2)').dataset.month)+1);
        }
});


