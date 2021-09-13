$(document).ready(function () {
    $('.review-inner').slick({
        // autoplay: true,
        // autoplaySpeed: 2000,
        dots: true,
        arrows: false,
    });
    $('.products-slick').slick({
        arrows: true,
        slidesToShow: 3,
        
    });
    $('.row-responsive').slick({
        
        slidesToShow:4,
        arrows: true,
        dots: true,
    });
    $('.introduce-responsive').slick({
        
        slidesToShow: 1,
        arrows: false,
        // dots: true,
    });
});