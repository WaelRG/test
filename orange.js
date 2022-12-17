$(function() {


    // ---- alles wird ebenerdig ----------------------

    $(".kachel-loch").css("box-shadow", "inset 0 0 0 0  rgba(67, 63, 92, 0.308), inset 0 0 0 0 rgb(255, 255, 255)");
    $(".kachel-loch").css("background", "rgba(0, 0, 0, 0)");
    $(".kachel").css("box-shadow", "inset 0 0 0 0  rgba(67, 63, 92, 0.308), inset 0 0 0 0 rgb(255, 255, 255)");
    $(".kachel").css("background-color", "rgba(0, 0, 0, 0)");




    // ---- Türen Auf ------------------------


    $("html").delay(400).queue(function() {
    
        $(".opener").css("box-shadow", "var(--shadow-out)");
        $(".opener-left").css("left", "-200vw");
        $(".opener-right").css("right", "-200vw");

        $(this).dequeue();
    }); 
    



    // ---- Orange wird größer ------------------------

    
    $("html").delay(600).queue(function() {
    
        $(".kz").addClass("slow-animation");
        $(".kachel").addClass("slow-animation");
        $(".ck-unhovered").css("width", "0");
        $(".ck-hovered").css("width", "100%");
        $(".kz-hovered").css("height", "100%");
        $(".kz-unhovered").css("height", "0");


        $(this).dequeue();
    }); 
    
    
    
    
    
    
    
    // var test = $(".gr2").css("width");





































});