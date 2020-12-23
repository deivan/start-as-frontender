$(".page1_button1").click(function(){
    $(".page1").hide();
    $(".page2").show();
});

$(".page1_button2").click(function(){
    $(".page1").hide();
    $(".page2").show();
});

$(".page2_button1").click(function(){
    $(".page2").hide();
    $(".page3").show();
});

$(".page2_button2").click(function(){
    $(".page2").hide();
    $(".page3").show();
});

$(".page3_button").click(function(){
    $(".page3").hide();
    $(".page4").show();
});

$(".page2_arrow").click(function(){
    $(".page2").hide();
    $(".page1").show();
});

$(".page3_arrow").click(function(){
    $(".page3").hide();
    $(".page2").show();
});

$(".page4_arrow").click(function(){
    $(".page4").hide();
    $(".page3").show();
});

$(".page4_button").click(function(){
    alert("Thank you for yoir choise!");
});