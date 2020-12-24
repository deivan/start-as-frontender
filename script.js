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
    $('#back-page2').click(function(){
        $('#page2').hide();
        $('#page1').show();
    })
    $('#back-page3').click(function(){
        $('#page3').hide();
        $('#page2').show();
    })
    $('#back-page4').click(function(){
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
    $('#final').click(function(){
        alert("Thank you for yoir choise!");
    });
});

