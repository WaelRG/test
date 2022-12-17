$(function() {

    $(".opener").css("box-shadow", "var(--shadow-in)");
    $(".opener-left").addClass("opener-left-open");
    $(".opener-right").addClass("opener-right-open");
    $(".kachel-loch").css("box-shadow", "none");

    $(".ck-lo").addClass("ebenerdig");
    $(".ck-lu").addClass("ebenerdig");
    $(".ck-ro").addClass("ebenerdig");
    $(".ck-ru").addClass("ebenerdig");

    $(".ck-lu").css("opacity", "0");

    $("html").delay(300).queue(function() {
    
        $(".ck-ro").css("opacity", "0");
        $(".ck-ru").css("opacity", "0");

        $(this).dequeue();
    }); 

    
    $("html").delay(350).queue(function() {
    
        $(".ck-ro").addClass("plopped-to-right");
        $(".kz-bot").addClass("plopped-down");
        $(".kz-top").css("height", "");
        $(".ck-lo").addClass("plopped-out");
 
        $(this).dequeue();
    }); 
    
    
    
    
    
    
    
    // var test = $(".gr2").css("width");





































});