function swiperInit(){if(!$("#hero-banner").length)return!1;new Swiper("#hero-banner",{pagination:".swiper-pagination",paginationClickable:!0,autoplay:2500});if(!$("#equipment-slider").length)return!1;new Swiper("#equipment-slider",{slidesPerView:4,nextButton:".swiper-button-next",prevButton:".swiper-button-prev",spaceBetween:30})}$(document).ready(function(){swiperInit()});