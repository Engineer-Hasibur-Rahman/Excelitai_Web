 

// for testimonial
$(document).ready(function(){
  $(".owl-carousel").owlCarousel();
});


$('.owl-carousel').owlCarousel({
loop:true,
autoplay:true,
dots:false,
autoplayTimeout:3000,
margin:10,
responsiveClass:true,
responsive:{
    0:{
        items:1,
        nav:false
    },
    600:{
        items:1,
        nav:false,
        loop:true
    },
    1000:{
        items:1,
        nav:false,
        dots:false,
        loop:true
    }
}
})
// testimonial end

// for counting 
$(document).ready(function(){
    $('.counter-value').each(function(){
        $(this).prop('Counter',0).animate({
            Counter: $(this).text()
        },{
            duration: 3500,
            easing: 'swing',
            step: function (now){
                $(this).text(Math.ceil(now));
            }
        });
    });
});
// counting js end

