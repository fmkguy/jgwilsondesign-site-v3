
$(document).ready(function(){

    $('.owl-carousel').owlCarousel({
        items: 1,
        loop: true,
        nav: true,
        responsive: {
            0: {
                // autoHeight: true,
                touchDrag: true
            },
            768: {
                // autoHeight: false,
                touchDrag: false
            }
        }
    });

    $('a.menu__trigger').on('click', function(e) {
        e.preventDefault();
        $('nav.menu').toggleClass('state--visible');
    });

    $('a.hero__scroll-notice').on('click', function(e) {
        e.preventDefault();
        var targetRef = this.getAttribute('href');
        $('html, body').animate({
            scrollTop: $(targetRef).offset().top
        }, 300);
    });

});
