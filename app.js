$(document).ready(function(){

    $('a.gotop').click(function(){ 
        var elementClicked = $(this).attr("href");
        var destination = $(elementClicked).offset().top;
        $("html:not(:animated),body:not(:animated)").animate({scrollTop: destination}, 1500,'easeInOutExpo' );
        return false;
    });			


    $('a.goabout').click(function(){ 
        var elementClicked = $(this).attr("href");
        var destination = $(elementClicked).offset().top;
        $("html:not(:animated),body:not(:animated)").animate({scrollTop: destination}, 1500,'easeInOutExpo' );
        return false;
    });

    $('a.goongoing').click(function(){ 
        var elementClicked = $(this).attr("href");
        var destination = $(elementClicked).offset().top;
        $("html:not(:animated),body:not(:animated)").animate({scrollTop: destination}, 1500,'easeInOutExpo' );
        return false;
    });

    $('a.goinformation').click(function(){ 
        var elementClicked = $(this).attr("href");
        var destination = $(elementClicked).offset().top;
        $("html:not(:animated),body:not(:animated)").animate({scrollTop: destination}, 1500,'easeInOutExpo' );
        return false;
    });

    $('a.afigure').click(function(){
        $(this).children('.figure').toggleClass('bfigure');
        return false;
    });
});