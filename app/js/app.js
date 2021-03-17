$(document).ready(function () {

});

let map;

// 0: 55.342913
// 1: 86.080155

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