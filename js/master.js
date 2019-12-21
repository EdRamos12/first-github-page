/* =======================================
= carregar conteudo em todas as paginas  =
=========================================*/

$(function () {
    $("footer").load("content/footer.html");
    console.log("content loaded");
});

/* =======================================
=           white/black theme            =
=========================================*/

var themeInfo, darkModePallette;

if (!localStorage.isWhite) {
    localStorage.setItem('isWhite', 'yes')
}

themeInfo = localStorage.isWhite;
darkModePallette = '#121212';

function setTheme(pallette) {
    var cropo = document.querySelector('.cropo'),
        port = document.querySelectorAll('.port'),
        btntheme = document.querySelector('.black-theme span'),
        btnimg = document.querySelector('.sun-moon'),
        p = document.querySelectorAll('p'),
        h1 = document.querySelectorAll('h1'),
        habilidades = document.querySelector('.habilidades'),
        sobremim = document.querySelector('.sobre-mim'),
        noscroll = document.querySelector('.parallax-noscroll'),
		githubico = document.querySelector('#github');

    if (localStorage.isWhite == 'no') {
        // section background
        cropo.style.background = pallette;
        // triangle colors
        habilidades.style.color = pallette;
        sobremim.style.color = pallette;
        noscroll.style.color = pallette;
        // btn set theme
        btnimg.style.webkitFilter = 'invert(100%)';
        btntheme.innerHTML = 'Desligar tema escuro';
        btntheme.style.color = 'white';
        // font color
        h1.forEach(e => { e.style.color = 'white'; });
        p.forEach(e => { e.style.color = 'white'; });
        // form
        noscroll.style.backgroundImage = 'url("img/bg.jpg")';
        // port
        port.forEach(e => { e.style.background = pallette; e.style.color = 'white'; });
		// social-media
		githubico.style.webkitFilter = 'invert(100%)';
    } else {
        cropo.style.background = 'white';
        // btn set theme
        btnimg.style.webkitFilter = 'invert(0)';
        btntheme.innerHTML = 'Ligar tema escuro';
        btntheme.style.color = 'black';
        // form
        noscroll.style.backgroundImage = 'url("img/bg3.jpg")';
        // triangle colors
        habilidades.style.color = 'white';
        sobremim.style.color = 'white';
        noscroll.style.color = 'white';
        // h1 colors
        document.querySelector('h1#titleH').style.color = 'black';
        document.querySelector('h1#sobremim').style.color = 'black';
        // set text color 
        p.forEach(e => { e.style.color = 'black'; });
        //port backgorund color
        port.forEach(e => { e.style.background = 'white';});
		// social-media
		githubico.style.webkitFilter = 'invert(00)';
    }
}

setTheme(darkModePallette);

function blackify() {
    if (localStorage.isWhite == 'yes') {
        localStorage.setItem('isWhite', 'no');
    } else {
        localStorage.setItem('isWhite', 'yes');
    }
    themeInfo = localStorage.isWhite;
    setTheme(darkModePallette);
}

/* =======================================
=           typing animation             =
=========================================*/

function Typer(e) {
    var listaText = e.innerHTML.split("");
    e.innerHTML = "";
    listaText.forEach(function (letra, i) {
        setTimeout(function () {
            e.innerHTML += letra;
        }, 35 * i)
    })
}

var subtitulo = document.querySelector("h3");
Typer(subtitulo);

/* =======================================
=                form js                =
=========================================*/

function enviar() {
    var fname = document.getElementById("fname"), femail = document.getElementById("femail"), fmsg = document.getElementById("fmsg");
    var ername = document.getElementById("ername"), eremail = document.getElementById("eremail"), ermsg = document.getElementById("ermsg");

    if (fname.value.length >= 2) {
        fname.classList.remove("form-error");
        ername.innerHTML = " ";
    } else {
        ername.innerHTML = "(Insira um nome valido)";
        fname.classList.add("form-error");
        return false;
    }

    if (femail.value.length > 5 && femail.includes("@") && femail.includes(".")) {
        eremail.innerHTML = " ";
        femail.classList.remove("form-error");
    } else {
        eremail.innerHTML = "(Insira um e-mail valido)";
        femail.classList.add("form-error");
        return false;
    }
    
    if (fmsg.value.length >= 10) {
        ermsg.innerHTML = " ";
        fmsg.classList.remove("form-error");
    } else {
        ermsg.innerHTML = "(Contextualize sua mensagem)";
        fmsg.classList.add("form-error");
        return false;
    }
}

/* =======================================
=            smooth scroll js            =
=========================================*/

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});


/* =======================================
=             fade on scroll            =
=========================================*/

var animationClass = 'fade-begin',
    offset = $(window).height() * 3 / 4,
    documentTop = $(document).scrollTop();

function fadeScroll() {
    let $target = $('.fade');
    $target.each(function () {
        var itemTop = $(this).offset().top;
        if (documentTop > itemTop - offset) {
            $(this).addClass(animationClass);
        }
    })
}
function fadeportScroll() {
    let $target = $('.fadeport');
    $target.each(function () {
        var itemTop = $(this).offset().top;
        if (documentTop > itemTop - offset) {
            $(this).addClass(animationClass);
        }
    })
}
document.addEventListener('scroll', function () {
    fadeScroll();
    fadeportScroll();
}, true);