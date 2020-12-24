jQuery(document).ready(function($){
    $('.button-next-one').click(function(){
        $('#one').hide();
        $('#two').show();
    })
    $('.button-next-two').click(function(){
        $('#two').hide();
        $('#three').show();
    })
    $('#callback-two').click(function(){
        $('#two').hide();
        $('#one').show();
    })
    $('#button-next-three').click(function(){
        $('#three').hide();
        $('#four').show();
    })
    $('#callback-three').click(function(){
        $('#three').hide();
        $('#two').show();
    })
    $('#button-final').click(function(){
        $('#four').hide();
        $('#final').show();
    });
    $('#callback-four').click(function(){
        $('#four').hide();
        $('#three').show();
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

    
});


