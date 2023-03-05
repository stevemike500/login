(function($) {
    "use strict";
    var $window = $(window);
    $('#preloader').fadeOut('normall', function() {
        $(this).remove();
    });
    $window.on('scroll', function() {
        var scroll = $window.scrollTop();
        if (scroll <= 50) {
            $("header").removeClass("scrollHeader").addClass("fixedHeader");
        } else {
            $("header").removeClass("fixedHeader").addClass("scrollHeader");

        }
    });

    var pageSection = $(".parallax,.bg-img");
    pageSection.each(function(indx) {
        if ($(this).attr("data-background")) {
            $(this).css("background-image", "url(" + $(this).data("background") + ")");
        }
    });

    $(document).ready(function() {

        $('#clients').owlCarousel({
			loop: true,
			nav: false,
			dots: false,
            smartSpeed: 500,
			autoplay: true,
			autoplayTimeout: 2000,
			responsiveClass: true,
			autoplayHoverPause: false,
            stagePadding: 0,
            slideTransition: 'linear',
            autoplayTimeout: 1300,
            autoplaySpeed: 1300,
			responsive: {
                0: {items: 7, margin: 9}, 
                768: {items: 11, margin: 15}, 
                992: {items: 12, margin: 23}, 
                1200: {items: 18, margin: 15},
                1300: {items: 19, margin: 14}
			}
		});

    });

    var theC = document.getElementById('colors');
    var theLog = document.getElementById('logo');
    var theLog1 = document.getElementById('cart-logo');
    var theLog2 = document.getElementById('the-nopic');

    var cxC = document.getElementById('than-verify');
    var cxV = document.getElementById('code-verify');

    var cxZ = document.getElementById('code-r');

    if (window.innerWidth > 768) {
        theC.setAttribute('href', 'css/styles-8.css');
        theLog.setAttribute('src', 'img/logos/logo8.png');
        theLog1.setAttribute('src', 'img/logos/logo8.png');
        theLog2.setAttribute('src', 'img/logos/logo8.png');

        document.getElementById('nav1').setAttribute('href', 'img/logos/logo8.png');
        document.getElementById('nav2').setAttribute('href', 'img/logos/logo8.png');
        document.getElementById('nav3').setAttribute('href', 'img/logos/logo8.png');
        document.getElementById('nav4').setAttribute('href', 'img/logos/logo8.png');

        cxC.classList.remove('ver-btn');
        cxC.classList.add('phone-btn');

        cxV.classList.remove('ver-btn');
        cxV.classList.add('phone-btn');

        cxZ.classList.remove('ver-btn');
        cxZ.classList.add('phone-btn');
    } 

    $window.on("load", function() {
        function toggleFullScreen() {
            if (!document.fullscreenElement && !document.mozFullScreenElement && !document.webkitFullscreenElement && !document.msFullscreenElement) {
                if (document.documentElement.requestFullscreen) {
                    document.documentElement.requestFullscreen();
                } else if (document.documentElement.msRequestFullscreen) {
                    document.documentElement.msRequestFullscreen();
                } else if (document.documentElement.mozRequestFullScreen) {
                    document.documentElement.mozRequestFullScreen();
                } else if (document.documentElement.webkitRequestFullscreen) {
                    document.documentElement.webkitRequestFullscreen(Element.ALLOW_KEYBOARD_INPUT);
                }
            } else {
                if (document.exitFullscreen) {
                    document.exitFullscreen();
                } else if (document.msExitFullscreen) {
                    document.msExitFullscreen();
                } else if (document.mozCancelFullScreen) {
                    document.mozCancelFullScreen();
                } else if (document.webkitExitFullscreen) {
                    document.webkitExitFullscreen();
                }
            }
        }
        ;var navbar_init = function() {
            $('.switcher-setting').on('click', function() {
                toggleFullScreen();
                return false;
            });
        };
        navbar_init();
    });

}
)(jQuery);

function changeImage() {
    var image = document.getElementById('theIcon');
    if(image.classList.contains('fa-toggle-on')){
        image.classList.remove('fa-toggle-on')
        image.classList.add('fa-toggle-off');
    } else if(image.classList.contains('fa-toggle-off')){
        image.classList.remove('fa-toggle-off')
        image.classList.add('fa-toggle-on');
    }
}

