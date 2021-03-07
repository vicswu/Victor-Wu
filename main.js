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

const chk = document.getElementById('chk');

chk.addEventListener('change', () => {
    document.body.classList.toggle('dark');
    document.getElementById("html").classList.toggle('dark');
    document.getElementById("navbar").classList.toggle('dark');
    document.getElementById("icon-container1").classList.toggle('dark');
    document.getElementById("icon-container2").classList.toggle('dark');
    document.getElementById("icon-container3").classList.toggle('dark');
    document.getElementById("icon-container4").classList.toggle('dark');
    document.getElementById("icon-container5").classList.toggle('dark');
    document.getElementById("icon-container6").classList.toggle('dark');
    document.getElementById("icon-container7").classList.toggle('dark');
    document.getElementById("icon-container8").classList.toggle('dark');
    document.getElementById("icon-container9").classList.toggle('dark');
    document.getElementById("icon-container10").classList.toggle('dark');
    document.getElementById("icon-container11").classList.toggle('dark');
    document.getElementById("icon-container12").classList.toggle('dark');
    document.getElementById("icon-container13").classList.toggle('dark');
    document.getElementById("icon1").classList.toggle('dark');
    document.getElementById("icon2").classList.toggle('dark');
    document.getElementById("icon3").classList.toggle('dark');
    document.getElementById("icon4").classList.toggle('dark');
    document.getElementById("phone").classList.toggle('dark');
    document.getElementById("mail").classList.toggle('dark');
    document.getElementById("resume").classList.toggle('dark');
    document.getElementById("resume-link").classList.toggle('dark');
    document.getElementById("h1skills").classList.toggle('dark');
    document.getElementById("h1portfolio").classList.toggle('dark');
    document.getElementById("h1experience").classList.toggle('dark');
    document.getElementById("h1education").classList.toggle('dark');
    document.getElementById("container-skill").classList.toggle('dark');
});

const countEl = document.getElementById('count');

updateVisitCount();

function updateVisitCount() {
	fetch('https://api.countapi.xyz/update/vicswu/website/?amount=1')
	.then(res => res.json())
	.then(res => {
		countEl.innerHTML = res.value;
	})
}