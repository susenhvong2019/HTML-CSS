function init(){
    $("#lar").click(animatefun);
}

function imghide(){
    $("img").animate(
        {opacity:0.0}
    );
}

function imgshow() {
    $("img").animete(
        {opacity:0.5}
    );
}

function animatefun(){

    $(".box").animate({width:"300px"});
    $(".box").animate({height:"300px"});
    $(".box").animate({marginleft:"150px"});
    $(".box").animate({borderwidth:"10px"});
    $(".box").animate({opcity:"0.5"});
    $(".img").mouseenter(imghide);
    $(".img").mouseenter(imgshow);
}

$(document).ready(init);
