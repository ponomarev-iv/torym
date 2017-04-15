/**
 * Created by ponomarev-iv on 16.11.2016.
 */

function swiperInit() {
    if ($('#hero-banner').length) {
        var mySwiper = new Swiper('#hero-banner', {
            pagination: '.swiper-pagination',
            paginationClickable: true,
            autoplay: 7000,
            speed: 400,
            loop: true
        });
    } else {
        return false;
    }

    if ($('#equipment-slider').length) {
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
                768: {
                    slidesPerView: 2,
                    spaceBetween: 10
                },
                480: {
                    slidesPerView: 1
                }
            }
        });
    } else {
        return false;
    }
}

function swiperPartner() {
    var windowWidth = document.documentElement.clientWidth;

    if ($('#partner-swiper').length) {


        if (windowWidth <= 480) {
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

    } else {
        return false;
    }
}

function yandexMap() {
    if($('#js-office').length){
        ymaps.ready(init);
        ymaps.ready(initTwo);
        var myMap,
            myPlacemark;

        function init() {
            myMap = new ymaps.Map("js-office", {
                center: [57.99921057, 56.17411600],
                zoom: 17,
                controls: []
            });

            myPlacemark = new ymaps.Placemark([57.99916057, 56.17455000], {
                hintContent: 'ТОРУМ',
                balloonContent: 'Офис компании'
            }, {
                    // Опции.
                    // Необходимо указать данный тип макета.
                    iconLayout: 'default#image',
                    // Своё изображение иконки метки.
                    iconImageHref: '../img/arrow-map.png',
                    // Размеры метки.
                    iconImageSize: [53, 42],
                    // Смещение левого верхнего угла иконки относительно
                    // её "ножки" (точки привязки).
                    iconImageOffset: [-5, -38]
                });

            myMap.geoObjects.add(myPlacemark);
        }

        function initTwo() {
            myMap = new ymaps.Map("js-sklad", {
                center: [57.99467318, 55.92399294],
                zoom: 17,
                controls: []
            });

            myPlacemark = new ymaps.Placemark([57.99469318, 55.92339294], {
                hintContent: 'ТОРУМ',
                balloonContent: 'Склад компании'
            }, {
                // Опции.
                // Необходимо указать данный тип макета.
                iconLayout: 'default#image',
                    // Своё изображение иконки метки.
                    iconImageHref: '../img/arrow-map-two.png',
                    // Размеры метки.
                    iconImageSize: [53, 42],
                    // Смещение левого верхнего угла иконки относительно
                    // её "ножки" (точки привязки).
                    iconImageOffset: [-5, -38]
            });

            myMap.geoObjects.add(myPlacemark);
        }
    }
}

function switchMap() {
    var switchLink = $('.js-map-switch'),
        officeMap = $('#js-office'),
        skladMap = $('#js-sklad');


    $(switchLink).on('click', function () {
        if (officeMap.hasClass('is-active')) {
            officeMap.removeClass('is-active');
            skladMap.addClass('is-active');
        } else if (skladMap.hasClass('is-active')) {
            skladMap.removeClass('is-active');
            officeMap.addClass('is-active');
        }
        else return false;
    })
}

function magnificPopup() {
    $('.img-block').magnificPopup({
        delegate: 'a', // child items selector, by clicking on it popup will open
        type: 'image',
        gallery: {
            enabled: true,
            navigateByImgClick: true,
            preload: [0, 1] // Will preload 0 - before current, and 1 after the current image
        }
    });
}

function secondMenu() {
    var secMenu = $('.second-nav'),
        menuLink = $('.js-menu');

    $(menuLink)
        .mouseover(
            function () {
                $(secMenu).addClass('is-active')
            })

        .mouseout(
            function () {
                $(secMenu).removeClass('is-active');
            })
}

$(window).resize(function () {
    swiperPartner();
});

$(window).resize();

$(document).ready(function () {
    secondMenu();
    magnificPopup();
    swiperInit();
    swiperPartner();
    yandexMap();
    switchMap();
});


