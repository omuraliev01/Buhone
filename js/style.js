$(document).ready(function(){
    let owl = $('#home');
    owl.owlCarousel({
        items: 1,
        loop: true,
        dots: false
        // dots: false,
        // dotsClass: 'owl-dots',
        // dotClass: 'owl-dot',
    });
// Go to the next item
$('.customNext1').click(function() {
    owl.trigger('next.owl.carousel');
});
    $('.owl-dots').click(function() {
        owl.trigger('next.owl.carousel');
        });
// Go to the previous item
$('.customPrev1').click(function() {
    // With optional speed parameter
    // Parameters has to be in square bracket '[]'
    owl.trigger('prev.owl.carousel', [300]);
})
});
$(document).ready(function(){
    let owl1 = $('#our-clients');
    owl1.owlCarousel({
        items: 1,
        loop: true,
        dots: true,
        dotsEach: true,
         autoplay: true,
        autoplaySpeed: 1500,
        dotsClass: 'owl-dots1',
        dotClass: 'owl-dot',

    });
    // Go to the next item
    $('.customNext2').click(function() {
        owl1.trigger('next.owl.carousel');
    });
    $('.owl-dots1').click(function() {
        owl1.trigger('next.owl.carousel');
    });
// Go to the previous item
    $('.customPrev2').click(function() {
        // With optional speed parameter
        // Parameters has to be in square bracket '[]'
        owl1.trigger('prev.owl.carousel', [300]);
    });

    $(document).ready(function() {
        let owl2 = $('#feedback');
        owl2.owlCarousel({
            items: 1,
            loop: true,
            dots: true,
            dotsClass: 'owl-dots2',
            dotClass: 'owl-dot',
            dotsEach: true

        });
        // Go to the next item
        $('.customNext3').click(function () {
            owl2.trigger('next.owl.carousel');
        });
        $('.owl-dots2').click(function () {
            owl2.trigger('next.owl.carousel');
        });
// Go to the previous item
        $('.customPrev3').click(function () {
            // With optional speed parameter
            // Parameters has to be in square bracket '[]'
            owl2.trigger('prev.owl.carousel', [300]);
        })
    });


    $(window).scroll(function () {
        if($(this).scrollTop() > 500){
            $('.up-arrow').fadeIn();
        } else {
            $('.up-arrow').fadeOut();
        }
    });

    $('.form-btn').on('click', function (e) {
        e.preventDefault();
        $('.overlay, .popup, .thanks').fadeIn('slow');
    });
    $('.popup__close').on('click', function () {
        $('.overlay, .popup').fadeOut('slow');
    });

    $('.header__burger').on('click', function () {
        $('.header__burger').toggleClass('header__burger_active');
        $('.header-menu-call').toggleClass('header-menu-call_active')
    });

    $('.overlay').on('click', function () {
        $('.overlay, .popup,  .thanks').fadeOut('slow');
    });
});