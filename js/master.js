/* =======================================
=             fade on scroll            =
=========================================*/

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        }, 1000);
    });
});


/* =======================================
=             fade on scroll            =
=========================================*/

(function () {
    var $target = $('.fade'), animationClass = 'fade-begin', offset = $(window).height() * 3 / 4;
    function fadeScroll() {
        var documentTop = $(document).scrollTop();
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
    }, true /*Capture event*/);
}())

/* =======================================
= carregar conteudo em todas as paginas  =
=========================================*/

$(function () {
    $("footer").load("content/footer.html");
    console.log("content loaded");
});