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
    document.getElementById("h1skills").classList.toggle('dark');
    document.getElementById("h1portfolio").classList.toggle('dark');
    document.getElementById("h1experience").classList.toggle('dark');
    document.getElementById("h1education").classList.toggle('dark');
});

var TxtRotate = function(el, toRotate, period) {
    this.toRotate = toRotate;
    this.el = el;
    this.loopNum = 0;
    this.period = parseInt(period, 10) || 3000;
    this.txt = '';
    this.tick();
    this.isDeleting = false;
};

TxtRotate.prototype.tick = function() {
    var i = this.loopNum % this.toRotate.length;
    var fullTxt = this.toRotate[i];

    if (this.isDeleting) {
        this.txt = fullTxt.substring(0, this.txt.length - 1);
    } else {
        this.txt = fullTxt.substring(0, this.txt.length + 1);
    }

    this.el.innerHTML = '<span class="wrap">' + this.txt + '</span>';

    var that = this;
    var delta = 150 - Math.random() * 100;

    if (this.isDeleting) { delta /= 2; }

    if (!this.isDeleting && this.txt === fullTxt) {
        delta = this.period;
        this.isDeleting = true;
    } else if (this.isDeleting && this.txt === '') {
        this.isDeleting = false;
        this.loopNum++;
        delta = 500;
    }

    setTimeout(function() {
        that.tick();
    }, delta);
};

window.onload = function() {
    var elements = document.getElementsByClassName('txt-rotate');
    for (var i = 0; i < elements.length; i++) {
        var toRotate = elements[i].getAttribute('data-rotate');
        var period = elements[i].getAttribute('data-period');
        if (toRotate) {
            new TxtRotate(elements[i], JSON.parse(toRotate), period);
        }
    }
    var css = document.createElement("style");
    css.type = "text/css";
    css.innerHTML = ".txt-rotate > .wrap { border-right: 0.08em solid #666 }";
    document.body.appendChild(css);
};