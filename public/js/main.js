function swiperInit(){if($("#hero-banner").length){new Swiper("#hero-banner",{pagination:".swiper-pagination",paginationClickable:!0,autoplay:7e3,speed:400,loop:!0})}if($("#equipment-slider").length){new Swiper("#equipment-slider",{slidesPerView:4,loop:!0,nextButton:".swiper-button-next",prevButton:".swiper-button-prev",spaceBetween:30,breakpoints:{991:{slidesPerView:3,spaceBetween:20},768:{slidesPerView:2,spaceBetween:10},480:{slidesPerView:1}}})}if(!$("#js-feedback").length)return!1;new Swiper("#js-feedback",{nextButton:".swiper-button-next",prevButton:".swiper-button-prev",loop:"true"})}function swiperPartner(){var e=document.documentElement.clientWidth;if(!$("#partner-swiper").length)return!1;if(!(e<=480))return!1;new Swiper("#partner-swiper",{autoplay:2500,nextButton:".swiper-button-next",prevButton:".swiper-button-prev",loop:!0})}function yandexMap(){function e(){t=new ymaps.Map("js-office",{center:[57.99921057,56.174116],zoom:17,controls:[]}),i=new ymaps.Placemark([57.99951057,56.17403],{hintContent:"ТОРУМ",balloonContent:"Офис компании"},{iconLayout:"default#image",iconImageHref:"../img/placeholder.png",iconImageSize:[45,62],iconImageOffset:[-5,-38]}),t.geoObjects.add(i)}function n(){t=new ymaps.Map("js-sklad",{center:[57.99467318,55.92399294],zoom:17,controls:[]}),i=new ymaps.Placemark([57.99489318,55.92399294],{hintContent:"ТОРУМ",balloonContent:"Склад компании"},{iconLayout:"default#image",iconImageHref:"../img/placeholder.png",iconImageSize:[45,62],iconImageOffset:[-5,-38]}),t.geoObjects.add(i)}if($("#js-office").length){ymaps.ready(e),ymaps.ready(n);var t,i}}function switchMap(){var e=$(".js-map-switch"),n=$("#js-office"),t=$("#js-sklad");$(e).on("click",function(){if(n.hasClass("is-active"))n.removeClass("is-active"),t.addClass("is-active");else{if(!t.hasClass("is-active"))return!1;t.removeClass("is-active"),n.addClass("is-active")}})}function magnificPopup(){$(".img-block").magnificPopup({delegate:"a",type:"image",gallery:{enabled:!0,navigateByImgClick:!0,preload:[0,1]}})}function secondMenu(){var e=$(".second-nav"),n=$(".js-menu");$(n).mouseenter(function(){$(e).addClass("is-active")}).mouseleave(function(){$(e).removeClass("is-active")})}function emulateAsideMenu(){var e=$("#aside-menu"),n=e.find("a"),t=$(".js-table");return!!e.length&&void n.click(function(e){e.preventDefault();var i=$(this).attr("href");return!!$(i).hasClass("js-hide")&&($(n).removeClass("is-active"),$(this).addClass("is-active"),$(t).addClass("js-hide"),$(i).removeClass("js-hide"),void 0)})}function initTab(){var e=$(".js-tab"),n=$(".js-content");return!!e.length&&void e.click(function(){var t=$(this).attr("data-id");return!$(this).hasClass("current")&&($(e).removeClass("current"),$(n).removeClass("is-active"),$(this).addClass("current"),$(t).addClass("is-active"),void 0)})}function stylingInputFile(){$(".inputfile").length&&$(".inputfile").each(function(){var e=$(this),n=e.next("label"),t=n.html();e.on("change",function(e){var i="";this.files&&this.files.length>1?i=(this.getAttribute("data-multiple-caption")||"").replace("{count}",this.files.length):e.target.value&&(i=e.target.value.split("\\").pop()),i?n.find("span").html(i):n.html(t)})})}function sendForm(){var e=$("#order-form");e.length&&e.submit(function(){return $.ajax({type:"POST",url:"send.php",data:$(this).serialize()}).done(function(){$(this).find("input").val(""),alert("Спасибо за обращение. В ближайшее время мы свяжемся с вами."),e.trigger("reset")}),!1})}function sendTemp(){$("#sendform").validate({submitHandler:function(e){var e=document.forms.sendform,n=new FormData(e),t=new XMLHttpRequest;t.open("POST","/send.php"),t.onreadystatechange=function(){4==t.readyState&&200==t.status&&$("#sendform").html('<p class="thank">Данные отправлены!<p>')},t.send(n)}})}function mobileMenu(){var e=$(".js-mobile"),n=$(".js-mobile-menu");e.length&&$(e).click(function(){$(this).toggleClass("open"),$(n).toggleClass("is-open")})}$(window).resize(function(){swiperPartner()}),$(document).ready(function(){secondMenu(),magnificPopup(),swiperInit(),swiperPartner(),yandexMap(),switchMap(),emulateAsideMenu(),initTab(),stylingInputFile(),mobileMenu()});