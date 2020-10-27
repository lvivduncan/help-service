
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