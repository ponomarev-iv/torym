/**
 * Created by ponomarev-iv on 16.11.2016.
 */

function swiperInit(){
    if($('#hero-banner').length){
        var mySwiper = new Swiper('#hero-banner', {
            pagination: '.swiper-pagination',
            paginationClickable: true,
            autoplay: 2500
        });
    } else{
        return false;
    }

    if($('#equipment-slider').length){
        var mySwiper = new Swiper('#equipment-slider', {
            slidesPerView: 4,
            nextButton: '.swiper-button-next',
            prevButton: '.swiper-button-prev',
            spaceBetween: 30
        });
    } else{
        return false;
    }
}

$(document).ready(function(){
    swiperInit();
});
