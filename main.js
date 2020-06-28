$(document).ready(function() {
    $('.menu-toggler').on('click', function() {
        $(this).toggleClass('open');
        $('.top-nav').toggleClass('open');
    });

    $('.top-nav .nav-link').on('click', function() {
        $('.menu-toggler').removeClass('open');
        $('.top-nav').removeClass('open');
    });

    $('nav a[href*="#"]').on('click', function() {
        $('html, body').animate({
            scrollTop: $($(this).attr('href')).offset().top
        }, 2000);
    });

    $('#up').on('click', function() {
        $('html, body').animate({
            scrollTop: 0
        }, 2000);
    });

    AOS.init({
        easeing: 'ease',
        duration: 1800,
        once: true
    });
});

window.onscroll = function() { scrollFunction() };

function scrollFunction() {
    if (document.body.scrollTop > 775 || document.documentElement.scrollTop > 775) {
        document.getElementById("navbar").style.top = "0";
    } else {
        document.getElementById("navbar").style.top = "-70px";
    }
}