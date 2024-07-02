function renderYandexMap(objects) {
    ymaps.ready(
        function initMap() {
            var mapElement = document.getElementById("map");
            mapElement.innerHTML = '';
            var map = new ymaps.Map(mapElement, {
                //center: [60.00729266, 30.23136365], // дефолт дом
                // center: [59.902824, 30.489140], // бонч
                // center: [59.890521, 30.491702], // микрорайон №2
                //center: [59.926810, 30.317892], // метро Адмиралтейства
                center: [59.896540, 30.318789], // Admiral
                zoom: 17,
                type: 'yandex#satellite',
                controls: ['zoomControl']
            });
            drawGeoObjects(map, objects);
        }
    )
}
//function drawGeoObjects(map, objects) {
//    objects.forEach(e => {
//        var polygon = new ymaps.Polygon([
//            JSON.parse(e.geometry.borderGeocodes)
//        ], {
//            hintContent: e.name
//        }, {
//            //fillColor: e.geoNameFeature.geoNamesFeatureCode === 'BLDG' ? 'rgba(224,143,0,0.53)' : 'rgba(0,122,222,0.53)',
//            strokeColor: e.geoNameFeature.geoNamesFeatureCode === 'BLDG' ? 'rgba(204,76,3,0.53)' : 'rgba(0,40,206,0.53)',
//            //fillColor: e.geoNameFeature.geoNamesFeatureCode === 'ADM3-1' ? 'rgba(110,0,255,0.53)' : 'rgba(0,122,222,0.53)',
//            strokeColor: e.geoNameFeature.geoNamesFeatureCode === 'ADM3-1' ? 'rgba(206,0,255,0.53)' : 'rgba(0,40,206,0.53)',
//            switch(e.geoNameFeature.geoNamesFeatureCode)
//            {
//                case 'BLDG':
//                    fillColor = 'rgba(224,143,0,0.53)';
//                    break;
//                case 'ADM3-1':
//                    fillColor = 'rgba(110,0,255,0.53)';
//                    break;
//            },
//            strokeWidth: e.geoNameFeature.geoNamesFeatureCode === 'BLDG' ? 3 : 2
//        });
//        map.geoObjects.add(polygon);
//    })
//}

    function drawGeoObjects(map, objects) {
        const colors = {
            'BLDG': {
                fillColor: 'rgba(224,143,0,0.53)',
                strokeColor: 'rgba(204,76,3,0.53)',
                strokeWidth: 3
            },
            'ADM3-admiral': {
                fillColor: 'rgba(110,0,255,0.53)',
                strokeColor: 'rgba(206,0,255,0.53)',
                strokeWidth: 3
            }, 
            'ADM3-center': {
                fillColor: 'rgba(218,167,184,0.53)',
                strokeColor: 'rgba(206, 185,184,0.53)',
                strokeWidth: 3
            },
            'ADM3-nevsky': {
                fillColor: 'rgba(205,229,131,0.53)',
                strokeColor: 'rgba(200,240,140,0.53)',
                strokeWidth: 3
            },
            'ADM3-kirov': {
                fillColor: 'rgba(232,189,141,0.53)',
                strokeColor: 'rgba(255,190,140,0.53)',
                strokeWidth: 3
            },
            'ADM3-krasnosel': {
                fillColor: 'rgba(255,161,122,0.53)',
                strokeColor: 'rgba(230,170,200,0.53)',
                strokeWidth: 3
            },
            'ADM3-frunz': {
                fillColor: 'rgba(223,217,120,0.53)',
                strokeColor: 'rgba(230,225,109,0.53)',
                strokeWidth: 3
            },
            'ADM3-mos': {
                fillColor: 'rgba(252,137,123,0.53)',
                strokeColor: 'rgba(206,0,255,0.53)',
                strokeWidth: 3
            },
            'ADM3-kalin': {
                fillColor: 'rgba(227,154,173,0.53)',
                strokeColor: 'rgba(206,132,200,0.53)',
                strokeWidth: 3
            },
            'ADM3-prim': {
                fillColor: 'rgba(172,200,213,0.53)',
                strokeColor: 'rgba(180,205,200,0.53)',
                strokeWidth: 3
            },
            'ADM3-vyborg': {
                fillColor: 'rgba(217,203,228,0.53)',
                strokeColor: 'rgba(230,195,215,0.53)',
                strokeWidth: 3
            },
            'ADM3-petrograg': {
                fillColor: 'rgba(51,117,255,0.53)',
                strokeColor: 'rgba(70,130,240,0.53)',
                strokeWidth: 3
            },
            'ADM3-petrodvor': {
                fillColor: 'rgba(125,217,160,0.53)',
                strokeColor: 'rgba(110,240,160,0.53)',
                strokeWidth: 3
            },
            'ADM3-vasil': {
                fillColor: 'rgba(3,195,78,0.53)',
                strokeColor: 'rgba(20,180,80,0.53)',
                strokeWidth: 3
            },
            'ADM3-krasnogvar': {
                fillColor: 'rgba(221,172,115,0.53)',
                strokeColor: 'rgba(240,170,110,0.53)',
                strokeWidth: 2
            },
            'DEFAULT': {
                fillColor: 'rgba(0,122,222,0.53)',
                strokeColor: 'rgba(0,40,206,0.53)',
                strokeWidth: 2
            }
        };

        objects.forEach(e => {
            const geoCode = e.geoNameFeature.geoNamesFeatureCode;
            const color = colors[geoCode] || colors['DEFAULT'];

            var polygon = new ymaps.Polygon([
                JSON.parse(e.geometry.borderGeocodes)
            ], {
                hintContent: e.name
            }, {
                fillColor: color.fillColor,
                strokeColor: color.strokeColor,
                strokeWidth: color.strokeWidth
            });

            map.geoObjects.add(polygon);
        });
    }