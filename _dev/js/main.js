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
    }

    if ($('#equipment-slider').length) {
        var mySwiper = new Swiper('#equipment-slider', {
            slidesPerView: 4,
            loop: true,
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
    }

    if ($('#js-feedback').length) {
        var mySwiper = new Swiper('#js-feedback', {
            nextButton: '.swiper-button-next',
            prevButton: '.swiper-button-prev',
            loop: 'true'
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

            myPlacemark = new ymaps.Placemark([57.99951057, 56.17403000], {
                hintContent: 'ТОРУМ',
                balloonContent: 'Офис компании'
            }, {
                    // Опции.
                    // Необходимо указать данный тип макета.
                    iconLayout: 'default#image',
                    // Своё изображение иконки метки.
                    iconImageHref: '../img/placeholder.png',
                    // Размеры метки.
                    iconImageSize: [45, 62],
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

            myPlacemark = new ymaps.Placemark([57.99489318, 55.92399294], {
                hintContent: 'ТОРУМ',
                balloonContent: 'Склад компании'
            }, {
                // Опции.
                // Необходимо указать данный тип макета.
                iconLayout: 'default#image',
                    // Своё изображение иконки метки.
                    iconImageHref: '../img/placeholder.png',
                    // Размеры метки.
                    iconImageSize: [45, 62],
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
        .mouseenter(
            function () {
                $(secMenu).addClass('is-active')
            })

        .mouseleave(
            function () {
                $(secMenu).removeClass('is-active');
            })
}

function emulateAsideMenu(){
    var menu = $('#aside-menu'),
        link = menu.find('a'),
        table = $('.js-table');

    if (menu.length){
        link.click(function(e){
            e.preventDefault();

            var tableId = $(this).attr('href');

            if($(tableId).hasClass('js-hide')){
                $(link).removeClass('is-active');
                $(this).addClass('is-active');
                $(table).addClass('js-hide');
                $(tableId).removeClass('js-hide');
            }
            else return false;
        })
    }
else return false;

}

function initTab(){
    var tabLink = $('.js-tab'),
        tabContent = $('.js-content')

    if(tabLink.length){
        tabLink.click(function(){
            var idContent = $(this).attr('data-id');

            if($(this).hasClass('current')){
                return false;
            }
            else{
                $(tabLink).removeClass('current');
                $(tabContent).removeClass('is-active');
                $(this).addClass('current');
                $(idContent).addClass('is-active');
            }
        })
    }
    else return false
}

$(window).resize(function(){
    swiperPartner();
});


$(document).ready(function () {
    secondMenu();
    magnificPopup();
    swiperInit();
    swiperPartner();
    yandexMap();
    switchMap();
    emulateAsideMenu();
    initTab();
});


