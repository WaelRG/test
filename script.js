$(function() {


// __________________________________________________________________________________ 
// _________________________________| Navi buttons |_________________________________ 


$("#about-btn").on("click", function() {                                        //wenn about angeklickt
    $(".about-card").toggleClass("active");                                 //activiert contact

    if  ($(".contact-card").hasClass("active")) {                           //wenn contact active
        $(".contact-card").removeClass("active");                           //löscht active des anderen
        
    }

    if  ($(".about-card").hasClass("active")) {                             //wenn contact active
        $(".trenn-rille-horizontal").addClass("trennt");                    //zeigt trennlinie
    } else {                                                                //sonst
        $(".trenn-rille-horizontal").removeClass("trennt");                 //versteckt trennlinie
    }

    if  ($(".about-card").hasClass("active")){                              ////////////////////////////////
        $(".lefter").removeClass("lefter-auf")                     
        $(".scroll-in-text").removeClass("scroll-in-text-auf") 
    } else {                                                               
        $(".lefter").addClass("lefter-auf")
        $(".scroll-in-text").addClass("scroll-in-text-auf") 

    }
    
});    

$("#contact-btn").on("click", function() {                                      //wenn contact angeklickt

        $(".contact-card").toggleClass("active");                               //activiert contact

        if   ($(".contact-card").hasClass("active")) {                          //wenn contact active
            $(".about-card").removeClass("active");                             //löscht active des anderen
        } 

        if  ($(".contact-card").hasClass("active")) {                           //wenn contact active
            $(".trenn-rille-horizontal").addClass("trennt");                    //zeigt trennlinie
        } else {                                                                //sonst
            $(".trenn-rille-horizontal").removeClass("trennt");                 //versteckt trennlinie
        }

        if  ($(".contact-card").hasClass("active")){                            ////////////////////////////////
            $(".lefter").removeClass("lefter-auf") 
            $(".scroll-in-text").removeClass("scroll-in-text-auf") 
                    
        } else {                                                               
            $(".lefter").addClass("lefter-auf")
            $(".scroll-in-text").addClass("scroll-in-text-auf") 
        }
            
});

$(".close-x").on("click", function() {
    $(".about-card").removeClass("active");
    $(".contact-card").removeClass("active");
    $(".trenn-rille-horizontal").removeClass("trennt");   
});


// ------ btn hovereffekt (einkerbung) ---------------


$("#about-btn").on("mouseenter", function() {
    $(".trv1").css("box-shadow","inset 0.1rem 0rem 0.2rem -0.1rem rgba(44, 39, 68, 0.542), inset -0.1rem 0rem 0.2rem -0.1rem rgb(255, 255, 255)") 
});
$("#about-btn").on("mouseleave", function() {
    $(".trv1").css("box-shadow","")

});


$("#contact-btn").on("mouseenter", function() {
    $(".trv2").css("box-shadow","inset 0.1rem 0rem 0.2rem -0.1rem rgba(44, 39, 68, 0.542), inset -0.1rem 0rem 0.2rem -0.1rem rgb(255, 255, 255)") 
});
$("#contact-btn").on("mouseleave", function() {
    $(".trv2").css("box-shadow","") 
});


// __________________________________________________________________________________ 
// _____________________________| loch zu scrollen |_________________________________ 


$("#home").on("wheel", function(e) {


    let delta = e.originalEvent.deltaY;

    let l1Gefloort = Math.floor( $(".loch1").height() );

    let l2Gefloort = Math.floor( $(".loch2").height() );

    let l3Gefloort = Math.floor( $(".loch3").height() );

    let l4Gefloort = Math.floor( $(".loch4").height() );

    let l5Gefloort = Math.floor( $(".loch5").height() );

    let rp91Gefloort = Math.floor( $(".rechtsplatte").height() /100 *91);
    
    let rp90Gefloort = Math.floor( $(".rechtsplatte").height() /100 *90);

    let l1BigGefloort = Math.floor( $(".loch1").height() /100 * 84);

    let l2BigGefloort = Math.floor( $(".loch2").height() /100 * 81);

    let l3BigGefloort = Math.floor( $(".loch3").height() /100 * 77);

    let l4BigGefloort = Math.floor( $(".loch4").height() /100 * 65);
    




// wenn runter gescrollt wird

    if (delta > 0){
        console.log(delta)


        if  (l5Gefloort !== l4Gefloort) {

            console.log("loch 5 ist nicht zu, loch 5 schließen")
            $(".loch5").removeClass("bewegt");
            $(".loch5").addClass("loch5-zu");
    
    
    
        } else if (l4Gefloort !== l3Gefloort) {
    
            console.log("loch 4 ist nicht zu, loch 4 schließen")
            $(".loch4").removeClass("bewegt");
            $(".loch4").addClass("loch4-zu");
    
    
    
        } else if (l3Gefloort !== l2Gefloort) {
    
            console.log("loch 3 ist nicht zu, loch 3 schließen")
            $(".loch3").removeClass("bewegt");
            $(".loch3").addClass("loch3-zu");
    
    
    
        } else if (l2Gefloort !== l1Gefloort) {
    
            console.log("loch 2 ist nicht zu, loch 2 schließen")
            $(".loch2").removeClass("bewegt");
            $(".loch2").addClass("loch2-zu");
    
    
    
        } else if (l1Gefloort !== rp91Gefloort) {
    
            console.log("loch 1 ist nicht zu, loch 1 schließen")
            $(".loch1").addClass("loch1-zu");
    
    
        } else if (l1Gefloort === rp91Gefloort){
            console.log("alle löcher sind zu, türen auf");
            $(".full-container").css("display", "none");
            $(".lefter").removeClass("lefter-auf");
            $(".scroll-in-text").removeClass("scroll-in-text-auf") 
            $(".lefter-container").addClass("zu");
            $(".left-door").addClass("open-left-door");
            $(".right-door").addClass("open-right-door");

   
    
           
            $("html").delay(1000).queue(function() {
    
                $(".scroll-schutz").css("display", "none");  
                $(this).dequeue();
            });
 
        }

        // wenn hochgescrollt wird

    }else if (delta < -1) {
        console.log(delta)

        if  (l1Gefloort !== rp90Gefloort) {

            console.log("loch 1 ist zu, loch 1 öffnen")
            $(".loch1").removeClass("loch1-zu");
            $(".loch1").addClass("bewegt");


        } else if (l2Gefloort !== l1BigGefloort) {
    
            console.log("loch 2 ist zu, loch 2 öffnen")
            $(".loch2").removeClass("loch2-zu");
            $(".loch2").addClass("bewegt");


        } else if (l3Gefloort !== l2BigGefloort) {
    
            console.log("loch 3 ist zu, loch 3 öffnen")
            $(".loch3").removeClass("loch3-zu");
            $(".loch3").addClass("bewegt");


        } else if (l4Gefloort !== l3BigGefloort) {
    
            console.log("loch 4 ist zu, loch 4 öffnen")
            $(".loch4").removeClass("loch4-zu");
            $(".loch4").addClass("bewegt");


        } else if (l5Gefloort !== l4BigGefloort) {
    
            console.log("loch 5 ist zu, loch 5 öffnen")
            $(".loch5").removeClass("loch5-zu");
            $(".loch5").addClass("bewegt");
        }

    };

});

$("#scroll-container").on("mouseenter", function() {
   
    $(".lefter-container").addClass("zu"); 
});


// __________________________________________________________________________________ 
// _____________________________| loch zu klicken |_________________________________ 

$(".loch5, .lefter").on("click", function() {

    $(".loch5").removeClass("bewegt");
    $(".loch5").addClass("loch5-zu");
  
    setTimeout(
        function() {
          
            $(".loch4").removeClass("bewegt");
            $(".loch4").addClass("loch4-zu");
          
        }, 
    300);

    setTimeout(
        function() {
          
            $(".loch3").removeClass("bewegt");
            $(".loch3").addClass("loch3-zu");
          
        }, 
    550);

    setTimeout(
        function() {
          
            $(".loch2").removeClass("bewegt");
            $(".loch2").addClass("loch2-zu");
          
        }, 
    750);

    setTimeout(
        function() {
          
            $(".loch1").removeClass("bewegt");
            $(".loch1").addClass("loch1-zu");
          
        }, 
    1050);

    setTimeout(
        function() {
          
            $(".full-container").css("display", "none");
            $(".lefter").removeClass("lefter-auf");
            $(".scroll-in-text").removeClass("scroll-in-text-auf") 
            $(".lefter-container").addClass("zu");
            $(".left-door").addClass("open-left-door");
            $(".right-door").addClass("open-right-door");

            // setTimeout(
            //     function() {
                  
            //         $(".door").css("display", "none");
                  
            //     }, 
            // 1000);
    
           
            $("html").delay(1000).queue(function() {
    
                $(".scroll-schutz").css("display", "none");  
                $(this).dequeue();
            });
          
        }, 
    1250);
 
    






});

// __________________________________________________________________________________ 
// ______________________________| loecher bewegt |__________________________________ 



$(".rechtsplatte").mousemove(function(event){            
    let relX = (event.pageX - $(".loch6").offset().left) / $(".rechtsplatte").width() *-10 ;
    let relY = (event.pageY - $(".loch6").offset().top) / $(".rechtsplatte").height() *-10 ;
    let relBoxCoords = "(" + relX + ", " + relY + ")";
    $(".mouse-cords").text(relBoxCoords);

    $(".bewegt").css("transform","translate("+relX+"%, "+relY+"%)");

});

$(".rechtsplatte").mouseleave(function(event){            
   
    setTimeout(
        function()  { $(".bewegt").css("transition","");
    }, 300);
    $(".bewegt").css("transform","translate(0px,0px)");
    $(".bewegt").css("transition","all 0.2s ease-in");
});


// // __________________________________________________________________________________ 
// // ____________________________| scroll Aufforderung |_______________________________


$(".full-container").on("mouseenter", function() {
    $(".lefter").addClass("lefter-auf")
    $(".scroll-in-text").addClass("scroll-in-text-auf") 
});


// // __________________________________________________________________________________ 
// // ______________________| ProjecktAuswahl preload images|__________________________



function preload(arrayOfImages) {
    $(arrayOfImages).each(function(){
        $('<img/>')[0].src = this;
    });
}

// Alle bilder die nach dem Hover erscheinen kommen hier

preload([
    "quatschbilder/plakat1.png",
    "quatschbilder/plakat2.png",
    "quatschbilder/plakat3.png",
    "quatschbilder/plakat4.png",
]);


// // __________________________________________________________________________________ 
// // ______________________| Projeckt Auswahl Farbveränderung|__________________________


// // // ----------- camelback --------------

// $("#camelback").on("mouseenter", 
// function() {
//     $(".zeilen-loch").css("transition", "all 2s ease-in-out 1s");
//     $(".zeilen-loch").css("background","rgb(255, 240, 221)");
// });

// $("#camelback").on("mouseleave", 
// function() {
//     $(".zeilen-loch").css("transition", "none");
//     $(".zeilen-loch").css("background","");
// });



// // ------------- aldente --------------

// $("#aldente").on("mouseenter", 
// function() {
//     $(".zeilen-loch").css("transition", "all 2s ease-in-out 1s");
//     $(".zeilen-loch").css("background","rgb(255, 220, 220)");
    

// });

// $("#aldente").on("mouseleave", 
// function() {
//     $(".zeilen-loch").css("transition", "none");
//     $(".zeilen-loch").css("background","");
// });




// // ------------- hawaki --------------

// $("#hawaki").on("mouseenter", 
// function() {
//     $(".zeilen-loch").css("transition", "all 2s ease-in-out 1s");
//     $(".zeilen-loch").css("background","rgb(235, 255, 235)");
    

// });

// $("#hawaki").on("mouseleave", 
// function() {
//     $(".zeilen-loch").css("transition", "none");
//     $(".zeilen-loch").css("background","");
// });



// // --------- arabic taste -----------

// $("#ar-taste").on("mouseenter", 
// function() {
//     $(".zeilen-loch").css("transition", "all 2s ease-in-out 1s");
//     $(".zeilen-loch").css("background","rgb(220, 220, 255)");
    
// });

// $("#ar-taste").on("mouseleave", 
// function() {
//     $(".zeilen-loch").css("transition", "none");
//     $(".zeilen-loch").css("background","");
// });


// // --------- Blaubeere -----------

// $(".ck-lo").on("mouseenter", 
// function() {
//     $(".kachel-loch").css("transition", "all 2s ease-in-out 1s");
//     $(".kachel-loch").css("background","rgb(220, 220, 255)");
    
// });

// $(".ck-lo").on("mouseleave", 
// function() {
//     $(".kachel-loch").css("transition", "none");
//     $(".kachel-loch").css("background","");
// });


// __________________________________________________________________________________ 
// _____________________________| pagis on scroll |__________________________________ 



$("#scroll-container").on("scroll",  // Event Listener für Scrollen (Mausrad und Scrollbar)
        function(){

        var scroll = $(window).scrollTop() + ($("#scroll-container").height() / 100);

        $("section").each(function() {

            

            if ($(this).position().top <= scroll && $(this).position().top + $(this).height() > scroll) {

                
                $(".pagi").removeClass("pagi-an");

                if ($(this).attr("id") === "Design-3D") {
                    $(".pagi1").addClass("pagi-an");
                }

                else if ($(this).attr("id") === "Type-Design") {
                    $(".pagi2").addClass("pagi-an");
            
                }

                else if ($(this).attr("id") === "Brand-Design") {
                    $(".pagi3").addClass("pagi-an");            
                }

                else if ($(this).attr("id") === "Motion-Design") {
                    $(".pagi4").addClass("pagi-an");            
                }

                else if ($(this).attr("id") === "Poster-Design") {
                    $(".pagi5").addClass("pagi-an");            
                }

                else if ($(this).attr("id") === "Web-Design") {
                    $(".pagi6").addClass("pagi-an");            
                }

                
            }
        });
});








// __________________________________________________________________________________ 
// ____________________________________| warnung |____________________________________ 

// alert("this website is still in maintanance, all uploaded content so far is just a place holder")


    
});















//---------------- sachen abfragen ------------------

// var test = $(".gr2").css("width");
// console.log(test);

