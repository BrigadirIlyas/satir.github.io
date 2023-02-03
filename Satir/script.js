//menu
var tombolMenu = $(".tombol-menu");
var menu = $("nav .menu ul");
var kotak = $(".kotak");
var kotak2 = $(".kotak2")

function klikMenu(){
    tombolMenu.click(function(){
        menu.toggle();
    });
    menu.click(function(){
        menu.toggle();
    })
}

$(document).ready(function () {
    var width = $(window).width();
    if(width < 990) {
        klikMenu();
    }
});

//check lebar
$(window).resize(function(){
    var width = $(window).width();
    if(width > 989) {
        menu.css("display","block");
    }
    else {
        menu.css("display","none");
    }
    klikMenu();
})

function kotakPosition(){
    kotak + $("<section></section>")
}