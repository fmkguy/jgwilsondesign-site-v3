
$(document).ready(function(){

    $('.owl-carousel').owlCarousel({
        items: 1,
        loop: true,
        nav: true,
        responsive: {
            0: {
                autoHeight: true,
                touchDrag: true
            },
            768: {
                autoHeight: false,
                touchDrag: false
            }
        }
    });

});
