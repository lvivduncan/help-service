
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
if(window.matchMedia('(max-width: 1200px)').matches){
	$('#mobile-nav-links').on('click', function(){
        $('#nav-links').toggleClass('show');
        $('#mobile-nav-links').toggleClass('active');
    });
}

// // мобільне меню
// if(window.matchMedia('(max-width: 1200px)').matches){
// 	$('#nav-links').addClass('mobile');
// } else {
//     $('#nav-links').removeClass('mobile');
// }

