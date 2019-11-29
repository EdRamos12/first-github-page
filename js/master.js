/* =======================================
=                form js                =
=========================================*/

function enviar() {
    var fname = document.getElementById("fname").value, femail = document.getElementById("femail").value, fmsg = document.getElementById("fmsg").value;
    var ername = document.getElementById("ername"), eremail = document.getElementById("eremail"), ermsg = document.getElementById("ermsg");

    if (fname.length > 2) {
        document.getElementById("fname").classList.remove("form-error");
        ername.innerHTML = " ";
    } else {
        console.log(fname.length)
        ername.innerHTML = "(Insira um nome valido)";
        document.getElementById("fname").classList.add("form-error");
        return false;
    }
    if (femail.length > 5 && femail.includes("@") && femail.includes(".")) {
        eremail.innerHTML = " ";
        document.getElementById("femail").classList.remove("form-error");
    } else {
        console.log(femail.length);
        eremail.innerHTML = "(Insira um e-mail valido)";
        document.getElementById("femail").classList.add("form-error");
        return false;
    }
    if (fmsg.length >= 10) {
        ermsg.innerHTML = " ";
        document.getElementById("fmsg").classList.remove("form-error");
    } else {
        console.log(fmsg.length);
        ermsg.innerHTML = "(Contextualize sua mensagem)";
        document.getElementById("fmsg").classList.add("form-error");
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

(function () {
    
    function fadeScroll() {
        var $target = $('.fade'), animationClass = 'fade-begin', offset = $(window).height() * 3 / 4,  documentTop = $(document).scrollTop();
        $target.each(function () {
            var itemTop = $(this).offset().top;
            if (documentTop > itemTop - offset) {
                $(this).addClass(animationClass);
            }
        })
    }
    function fadeportScroll() {
        var $target = $('.fadeport'), animationClass = 'fade-begin', offset = $(window).height() * 3 / 4, documentTop = $(document).scrollTop();
        $target.each(function () {
            var itemTop = $(this).offset().top;
            if (documentTop > itemTop - offset) {
                $(this).addClass(animationClass);
            }
        })
    }
    fadeScroll();
    document.addEventListener('scroll', function (event) {
        fadeScroll();
        fadeportScroll();
    }, true);
}())

/* =======================================
= carregar conteudo em todas as paginas  =
=========================================*/

$(function () {
    $("footer").load("content/footer.html");
    console.log("content loaded");
});