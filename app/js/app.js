$(document).ready(function () {

    let documents = new Swiper('.documents-slider', {
        slidesPerView: 3,
        spaceBetween: 30,
        watchSlidesVisibility: true,
        preloadImages: false,
        lazy: true,
        pagination: {
            el: '.documents-block .swiper-pagination',
            clickable: true,
        },
        navigation: {
            nextEl: '.documents-block .swiper-button-next',
            prevEl: '.documents-block .swiper-button-prev',
        },
        breakpoints: {
            0: {
                slidesPerView: 1,
                spaceBetween: 30,
            },
            900: {
                slidesPerView: 2,
                spaceBetween: 30,
            },
            1355: {
                slidesPerView: 3,
                spaceBetween: 30,
            },
        }
    });

    let projects = new Swiper('.projects-slider', {
        slidesPerView: 3,
        spaceBetween: 60,
        watchSlidesVisibility: true,
        preloadImages: false,
        lazy: true,
        pagination: {
            el: '.service-block .swiper-pagination',
            clickable: true,
        },
        navigation: {
            nextEl: '.service-block .swiper-button-next',
            prevEl: '.service-block .swiper-button-prev',
        },
        breakpoints: {
            0: {
                slidesPerView: 1,
                spaceBetween: 60,
            },
            900: {
                slidesPerView: 2,
                spaceBetween: 60,
            },
            1355: {
                slidesPerView: 3,
                spaceBetween: 60,
            },
        }
    });

    let service = new Swiper('.service-info_slider', {
        pagination: {
            el: '.service-info .swiper-pagination',
            clickable: true,
        },
        navigation: {
            nextEl: '.service-info_slider .swiper-button-next',
            prevEl: '.service-info_slider .swiper-button-prev',
        },
        breakpoints: {
            0: {
                slidesPerView: 1,
                spaceBetween: 90
            },
            950: {
                slidesPerView: 2,
                spaceBetween: 45
            },
            1218: {
                slidesPerView: 'auto',
                spaceBetween: 90
            }
        }
    });

    $(window).resize(function(){
        service.reInit();
    })

    $(window).trigger('resize');
});

let map;

function mapInit() {
    map = new ymaps.Map('map', {
        center: [55.342913, 86.080155],
        zoom: 17,
        autoFitToViewport: 'always'
    });

    let pin = new ymaps.Placemark([55.342913, 86.080155], {},
        {
            iconLayout: 'default#image',
            iconImageHref: 'app/images/sprite.svg#map-pin',
            iconImageSize: [108, 91],
            iconImageOffset: [-54, -91]
        });
    map.geoObjects.add(pin);
}

if ($('#map').length > 0) {
    // setTimeout(function () {
        let element = document.createElement('script');
        element.type = 'text/javascript';
        element.src = '//api-maps.yandex.ru/2.0/?load=package.standard&apikey=c9ce0622-7330-423d-9283-8cc8aa933cb6&lang=ru-RU&onload=mapInit';
        document.getElementsByTagName('body')[0].appendChild(element);
    // }, 1000);
}