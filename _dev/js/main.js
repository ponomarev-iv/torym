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
            spaceBetween: 30,
            breakpoints: {
                991: {
                    slidesPerView: 3,
                    spaceBetween: 20
                },
                768:{
                    slidesPerView: 2,
                    spaceBetween: 10
                },
                480:{
                    slidesPerView: 1
                }
            }
        });
    } else{
        return false;
    }
}

function swiperPartner(){
    var windowWidth = document.documentElement.clientWidth;

    if($('#partner-swiper').length){


        if(windowWidth <= 480){
                var partnerSwiper = new Swiper('#partner-swiper', {
                autoplay: 2500,
                nextButton: '.swiper-button-next',
                prevButton: '.swiper-button-prev',
                loop: true
            });
        }
        else {
            return false;
        }

    } else{
        return false;
    }
}

function switchMap(){
    var switchLink = $('.js-map-switch'),
        switchTab = $('.js-tab');

    $(switchLink).on('click', function () {
        if($(this).hasClass('is-active')){
            return false;
        }else{
            $(switchTab).removeClass('is-active');
            $(switchLink).removeClass('is-active');
            $(this).addClass('is-active');
            var tabLink = $(this).data('href');
            $(tabLink).addClass('is-active');
            $('.js-map').toggleClass('map_sklad');
        }
    })
}

$(window).resize(function(){
    swiperPartner();
});

$(window).resize();

$(document).ready(function(){
    swiperInit();
    swiperPartner();
    switchMap();
});


