/*global $, console*/
$(function () {
   
    "use strict";
    
    /************  Start Navbar Options  *************/
    var navItem = $(".navbar-light .nav-item"),
        options = $(".options"),
        navbar  = $(".navbar-light"),
        navH    = navbar.innerHeight(),
        navOptions = $(".options > div"),
        winH    = $(window).height();
    
    
    
    navItem.on("mouseenter", function () {
        
        $($(this).data("class")).addClass("nav-active")
            .removeClass("nav-not-active")
            .siblings()
            .removeClass("nav-active").addClass("nav-not-active");
    });
    
    navOptions.on("mouseleave", function () {
        
        $(this)
            .addClass("nav-not-active")
            .removeClass("nav-active");
    });
    $("body").on("click", function () {
        
        navOptions.addClass("nav-not-active")
            .removeClass("nav-active");
    });
    $(".navbar-light .navbar-toggler").on("click", function () {
        
        $(this).toggleClass("menu-active");
    });
    /***************  End Navbar Options  ***************/
    
    //Trigger MixItUp v2
    $('.items').mixItUp();
    
    /*Start Slider*/
    $('.carousel').carousel({
        pause : false
    });
    $(".slider .carousel .carousel-inner .carousel-item .image, .slider .overlay").height(winH - navH);
    /*End Slider*/
    
    /*Start screen re-size*/
    function winResize() {
        if ($(window).outerWidth() <= 991) {
            console.log("small");
            options.css({display: "none"});
        } else {
            console.log("large");
            options.css({display: "block"});
            
        }
    }
    $(window).on("resize", function () {
        console.log($(window).outerWidth());
        winResize();
    });
    winResize();
    /*End screen re-size*/
    
    /*Start Window Scroll*/
    $(window).on("scroll", function () {
        var winSc = $(window).scrollTop();
        console.log(winSc);
        //animations scroll
        if (winSc > 5) {
            navbar.css({
                
                boxShadow : "0px 3px 4px rgba(0, 0, 0,.5)"
            });
            if (winSc >= 500) {
                
                navbar.css({opacity : ".7"});
                $(".go-up").addClass("go-up-animat");
            } else {
                navbar.css({opacity : "1"});
                $(".go-up").removeClass("go-up-animat");
            }
            
        } else {
            navbar.css({
                boxShadow : "none"
            });
        }
    });
    /*End Window Scroll*/
    
    /*Start Go Up Button*/
    $(".go-up").on("click", function () {
        
        $("html, body").animate({
            
            scrollTop : 0
        }, 800);
    });
    /*End Go Up Button*/
    
    
}); // <-- End jQuery redy

//////////////java Script










