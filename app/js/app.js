$(document).ready(function () {

    let frontpage = new Swiper('.frontpage-slider', {
        slidesPerView: 1,
        speed: 800,
        loop: true,
        disableOnInteraction: true,
        autoplay: {
            delay: 8000,
        },
        pagination: {
            el: '.big-slider.frontpage .swiper-pagination',
            clickable: true,
        },
        navigation: {
            nextEl: '.frontpage-slider .swiper-button-next',
            prevEl: '.frontpage-slider .swiper-button-prev',
        },
        breakpoints: {
            0: {
                slidesPerView: 1,
                direction: 'horizontal',
            },
            1024: {
                slidesPerView: 1,
                direction: 'vertical',
            }

        }
    });

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

    let frontpage_services = new Swiper('.frontpage-service_slider', {
        slidesPerView: 3,
        spaceBetween: 60,
        watchSlidesVisibility: true,
        preloadImages: false,
        lazy: true,
        pagination: {
            el: '.service-block.simple .swiper-pagination',
            clickable: true,
        },
        navigation: {
            nextEl: '.service-block.simple .swiper-button-next',
            prevEl: '.service-block.simple .swiper-button-prev',
        },
        breakpoints: {
            0: {
                slidesPerView: 1,
            },
            900: {
                slidesPerView: 2,
                spaceBetween: 30,
            },
            1355: {
                slidesPerView: 3,
                spaceBetween: 60,
            },
        }
    });

    let partners = new Swiper('.partners-slider', {
        slidesPerView: 3,
        spaceBetween: 30,
        watchSlidesVisibility: true,
        preloadImages: false,
        lazy: true,
        pagination: {
            el: '.partners-block .swiper-pagination',
            clickable: true,
        },
        navigation: {
            nextEl: '.partners-block .swiper-button-next',
            prevEl: '.partners-block .swiper-button-prev',
        },
        breakpoints: {
            0: {
                slidesPerView: 1,
            },
            900: {
                slidesPerView: 2,
                spaceBetween: 30,
            },
            1355: {
                slidesPerView: 3,
                spaceBetween: 60,
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

    let reviews = new Swiper('.reviews-slider', {
        pagination: {
            el: '.reviews-block .swiper-pagination',
            clickable: true,
        },
        navigation: {
            nextEl: '.reviews-block .swiper-button-next',
            prevEl: '.reviews-block .swiper-button-prev',
        },
        breakpoints: {
            0: {
                slidesPerView: 1,
                spaceBetween: 30
            },
            950: {
                slidesPerView: 2,
                spaceBetween: 30
            },
            1218: {
                slidesPerView: 'auto',
                spaceBetween: 90
            }
        }
    });

    let service = new Swiper('.service-info_slider', {
        slidesPerView: 1,
        spaceBetween: 30,
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
                spaceBetween: 30
            },
            950: {
                slidesPerView: 2,
                spaceBetween: 30
            },
            1218: {
                slidesPerView: 'auto',
                spaceBetween: 90
            }
        }
    });

    $(window).resize(function() {
        if ($('.service-info_slider').length > 0) {
            service.update();
        }

        if ($('.reviews-slider').length > 0) {
            if ($(window).width() > 1218) {
                $('.reviews-slider .swiper-slide').css('width', '840');
            }
            reviews.update();
        }
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