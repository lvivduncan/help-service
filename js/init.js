
// слайдер на головній
$('#carousel').owlCarousel({
    animateOut: 'slideOutDown',
    animateIn: 'flipInX',
    items: 1,
    margin: 30,
    stagePadding: 30,
    smartSpeed: 450,
    dots: true,
    autoplay: true
});

// відгуки
$('#testimonials').owlCarousel({
    loop: true,
    margin: 40,
    dots: true,
    autoplay: true,
    items: 2,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:2
        }
    }
})

// плавне підвантаження блоків
new WOW().init();

// top-menu
$('#mobile-nav-links').on('click', function(){
    $('#nav-links').toggleClass('show');
    $('#mobile-nav-links').toggleClass('active');
});

// nav-menu
if(window.matchMedia('(max-width: 1200px)').matches){
    
    $('#nav').append('<span id="menu-close">&times;</span>');
    
    
    // відкриваємо оффсет-меню
    $('#menu-arrow').on('click', function(){
        $('#nav').width('300px');
        $('body').addClass('fixed');
        setTimeout(function(){
            $('#menu-close').addClass('show');
        },500);
    });

    // закриваємо оффсет-меню
    $('#menu-close').on('click', function(){

        $('#menu-close').removeClass('show');
        setTimeout(function(){
            $('#nav').width('0');
            $('body').removeClass('fixed');
        },100);
    });
}

// to top
$(window).scroll(function(){
        if ($(this).scrollTop() > 100) {
            $('#up').fadeIn();
        } else {
            $('#up').fadeOut();
    }
});

$('#up').click(function(e){
    e.preventDefault();
    $("html, body").animate({ 
            scrollTop: 0 
        }, 600);
    }
);