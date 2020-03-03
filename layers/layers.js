var wms_layers = [];

        var lyr_GOOGLESATLITE_0 = new ol.layer.Tile({
            'title': 'GOOGLESATLITE_0',
            'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: [new ol.Attribution({html: '<a href=""></a>'})],
                url: 'http://www.google.cn/maps/vt?lyrs=s@189&gl=cn&x={x}&y={y}&z={z}'
            })
        });
        var lyr_OpenStreetMap_1 = new ol.layer.Tile({
            'title': 'OpenStreetMap_1',
            'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: [new ol.Attribution({html: '<a href=""></a>'})],
                url: 'http://a.tile.openstreetmap.org/{z}/{x}/{y}.png'
            })
        });var format_Municipio_Lobatera_Parroquia_Capital_Vialidad_2 = new ol.format.GeoJSON();
var features_Municipio_Lobatera_Parroquia_Capital_Vialidad_2 = format_Municipio_Lobatera_Parroquia_Capital_Vialidad_2.readFeatures(json_Municipio_Lobatera_Parroquia_Capital_Vialidad_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Municipio_Lobatera_Parroquia_Capital_Vialidad_2 = new ol.source.Vector({
    attributions: [new ol.Attribution({html: '<a href=""></a>'})],
});
jsonSource_Municipio_Lobatera_Parroquia_Capital_Vialidad_2.addFeatures(features_Municipio_Lobatera_Parroquia_Capital_Vialidad_2);var lyr_Municipio_Lobatera_Parroquia_Capital_Vialidad_2 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Municipio_Lobatera_Parroquia_Capital_Vialidad_2, 
                style: style_Municipio_Lobatera_Parroquia_Capital_Vialidad_2,
                title: '<img src="styles/legend/Municipio_Lobatera_Parroquia_Capital_Vialidad_2.png" /> Municipio_Lobatera_Parroquia_Capital_Vialidad'
            });var format_Municipio_Lobatera_Parroquia_Capital_Lobatera_Hidrografia_3 = new ol.format.GeoJSON();
var features_Municipio_Lobatera_Parroquia_Capital_Lobatera_Hidrografia_3 = format_Municipio_Lobatera_Parroquia_Capital_Lobatera_Hidrografia_3.readFeatures(json_Municipio_Lobatera_Parroquia_Capital_Lobatera_Hidrografia_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Municipio_Lobatera_Parroquia_Capital_Lobatera_Hidrografia_3 = new ol.source.Vector({
    attributions: [new ol.Attribution({html: '<a href=""></a>'})],
});
jsonSource_Municipio_Lobatera_Parroquia_Capital_Lobatera_Hidrografia_3.addFeatures(features_Municipio_Lobatera_Parroquia_Capital_Lobatera_Hidrografia_3);var lyr_Municipio_Lobatera_Parroquia_Capital_Lobatera_Hidrografia_3 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Municipio_Lobatera_Parroquia_Capital_Lobatera_Hidrografia_3, 
                style: style_Municipio_Lobatera_Parroquia_Capital_Lobatera_Hidrografia_3,
                title: '<img src="styles/legend/Municipio_Lobatera_Parroquia_Capital_Lobatera_Hidrografia_3.png" /> Municipio_Lobatera_Parroquia_Capital_Lobatera_Hidrografia'
            });var format_Municipio_Lobatera_Parroquia_Capital_Unidades_de_Paisaje_4 = new ol.format.GeoJSON();
var features_Municipio_Lobatera_Parroquia_Capital_Unidades_de_Paisaje_4 = format_Municipio_Lobatera_Parroquia_Capital_Unidades_de_Paisaje_4.readFeatures(json_Municipio_Lobatera_Parroquia_Capital_Unidades_de_Paisaje_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Municipio_Lobatera_Parroquia_Capital_Unidades_de_Paisaje_4 = new ol.source.Vector({
    attributions: [new ol.Attribution({html: '<a href=""></a>'})],
});
jsonSource_Municipio_Lobatera_Parroquia_Capital_Unidades_de_Paisaje_4.addFeatures(features_Municipio_Lobatera_Parroquia_Capital_Unidades_de_Paisaje_4);var lyr_Municipio_Lobatera_Parroquia_Capital_Unidades_de_Paisaje_4 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Municipio_Lobatera_Parroquia_Capital_Unidades_de_Paisaje_4, 
                style: style_Municipio_Lobatera_Parroquia_Capital_Unidades_de_Paisaje_4,
    title: 'Municipio_Lobatera_Parroquia_Capital_Unidades_de_Paisaje<br />\
    <img src="styles/legend/Municipio_Lobatera_Parroquia_Capital_Unidades_de_Paisaje_4_0.png" /> Cumbres Montañosas<br />\
    <img src="styles/legend/Municipio_Lobatera_Parroquia_Capital_Unidades_de_Paisaje_4_1.png" /> Fondo de Valle<br />\
    <img src="styles/legend/Municipio_Lobatera_Parroquia_Capital_Unidades_de_Paisaje_4_2.png" /> Montaña Alta<br />\
    <img src="styles/legend/Municipio_Lobatera_Parroquia_Capital_Unidades_de_Paisaje_4_3.png" /> Montaña Baja<br />\
    <img src="styles/legend/Municipio_Lobatera_Parroquia_Capital_Unidades_de_Paisaje_4_4.png" /> Pie de Monte<br />'
        });var format_Municipio_Lobatera_Parroquia_Capital_Temperatura_5 = new ol.format.GeoJSON();
var features_Municipio_Lobatera_Parroquia_Capital_Temperatura_5 = format_Municipio_Lobatera_Parroquia_Capital_Temperatura_5.readFeatures(json_Municipio_Lobatera_Parroquia_Capital_Temperatura_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Municipio_Lobatera_Parroquia_Capital_Temperatura_5 = new ol.source.Vector({
    attributions: [new ol.Attribution({html: '<a href=""></a>'})],
});
jsonSource_Municipio_Lobatera_Parroquia_Capital_Temperatura_5.addFeatures(features_Municipio_Lobatera_Parroquia_Capital_Temperatura_5);var lyr_Municipio_Lobatera_Parroquia_Capital_Temperatura_5 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Municipio_Lobatera_Parroquia_Capital_Temperatura_5, 
                style: style_Municipio_Lobatera_Parroquia_Capital_Temperatura_5,
    title: 'Municipio_Lobatera_Parroquia_Capital_Temperatura<br />\
    <img src="styles/legend/Municipio_Lobatera_Parroquia_Capital_Temperatura_5_0.png" /> 20<br />\
    <img src="styles/legend/Municipio_Lobatera_Parroquia_Capital_Temperatura_5_1.png" /> 22<br />\
    <img src="styles/legend/Municipio_Lobatera_Parroquia_Capital_Temperatura_5_2.png" /> 24<br />\
    <img src="styles/legend/Municipio_Lobatera_Parroquia_Capital_Temperatura_5_3.png" /> 26<br />\
    <img src="styles/legend/Municipio_Lobatera_Parroquia_Capital_Temperatura_5_4.png" /> 28<br />\
    <img src="styles/legend/Municipio_Lobatera_Parroquia_Capital_Temperatura_5_5.png" /> 30<br />'
        });var format_Municipio_Lobatera_Parroquia_Capital_Recursos_Minerales_ZN_6 = new ol.format.GeoJSON();
var features_Municipio_Lobatera_Parroquia_Capital_Recursos_Minerales_ZN_6 = format_Municipio_Lobatera_Parroquia_Capital_Recursos_Minerales_ZN_6.readFeatures(json_Municipio_Lobatera_Parroquia_Capital_Recursos_Minerales_ZN_6, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Municipio_Lobatera_Parroquia_Capital_Recursos_Minerales_ZN_6 = new ol.source.Vector({
    attributions: [new ol.Attribution({html: '<a href=""></a>'})],
});
jsonSource_Municipio_Lobatera_Parroquia_Capital_Recursos_Minerales_ZN_6.addFeatures(features_Municipio_Lobatera_Parroquia_Capital_Recursos_Minerales_ZN_6);var lyr_Municipio_Lobatera_Parroquia_Capital_Recursos_Minerales_ZN_6 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Municipio_Lobatera_Parroquia_Capital_Recursos_Minerales_ZN_6, 
                style: style_Municipio_Lobatera_Parroquia_Capital_Recursos_Minerales_ZN_6,
                title: '<img src="styles/legend/Municipio_Lobatera_Parroquia_Capital_Recursos_Minerales_ZN_6.png" /> Municipio_Lobatera_Parroquia_Capital_Recursos_Minerales_ZN'
            });var format_Municipio_Lobatera_Parroquia_Capital_Precipitacion_7 = new ol.format.GeoJSON();
var features_Municipio_Lobatera_Parroquia_Capital_Precipitacion_7 = format_Municipio_Lobatera_Parroquia_Capital_Precipitacion_7.readFeatures(json_Municipio_Lobatera_Parroquia_Capital_Precipitacion_7, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Municipio_Lobatera_Parroquia_Capital_Precipitacion_7 = new ol.source.Vector({
    attributions: [new ol.Attribution({html: '<a href=""></a>'})],
});
jsonSource_Municipio_Lobatera_Parroquia_Capital_Precipitacion_7.addFeatures(features_Municipio_Lobatera_Parroquia_Capital_Precipitacion_7);var lyr_Municipio_Lobatera_Parroquia_Capital_Precipitacion_7 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Municipio_Lobatera_Parroquia_Capital_Precipitacion_7, 
                style: style_Municipio_Lobatera_Parroquia_Capital_Precipitacion_7,
    title: 'Municipio_Lobatera_Parroquia_Capital_Precipitacion<br />\
    <img src="styles/legend/Municipio_Lobatera_Parroquia_Capital_Precipitacion_7_0.png" /> 1000 - 1400<br />\
    <img src="styles/legend/Municipio_Lobatera_Parroquia_Capital_Precipitacion_7_1.png" /> 1400 - 1800<br />\
    <img src="styles/legend/Municipio_Lobatera_Parroquia_Capital_Precipitacion_7_2.png" /> 600 - 1000<br />'
        });var format_Municipio_Lobatera_Parroquia_Capital_Lobatera_Oronimia_8 = new ol.format.GeoJSON();
var features_Municipio_Lobatera_Parroquia_Capital_Lobatera_Oronimia_8 = format_Municipio_Lobatera_Parroquia_Capital_Lobatera_Oronimia_8.readFeatures(json_Municipio_Lobatera_Parroquia_Capital_Lobatera_Oronimia_8, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Municipio_Lobatera_Parroquia_Capital_Lobatera_Oronimia_8 = new ol.source.Vector({
    attributions: [new ol.Attribution({html: '<a href=""></a>'})],
});
jsonSource_Municipio_Lobatera_Parroquia_Capital_Lobatera_Oronimia_8.addFeatures(features_Municipio_Lobatera_Parroquia_Capital_Lobatera_Oronimia_8);var lyr_Municipio_Lobatera_Parroquia_Capital_Lobatera_Oronimia_8 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Municipio_Lobatera_Parroquia_Capital_Lobatera_Oronimia_8, 
                style: style_Municipio_Lobatera_Parroquia_Capital_Lobatera_Oronimia_8,
                title: '<img src="styles/legend/Municipio_Lobatera_Parroquia_Capital_Lobatera_Oronimia_8.png" /> Municipio_Lobatera_Parroquia_Capital_Lobatera_Oronimia'
            });var format_Municipio_Lobatera_Parroquia_Capital_Lobatera_Isoyetas_9 = new ol.format.GeoJSON();
var features_Municipio_Lobatera_Parroquia_Capital_Lobatera_Isoyetas_9 = format_Municipio_Lobatera_Parroquia_Capital_Lobatera_Isoyetas_9.readFeatures(json_Municipio_Lobatera_Parroquia_Capital_Lobatera_Isoyetas_9, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Municipio_Lobatera_Parroquia_Capital_Lobatera_Isoyetas_9 = new ol.source.Vector({
    attributions: [new ol.Attribution({html: '<a href=""></a>'})],
});
jsonSource_Municipio_Lobatera_Parroquia_Capital_Lobatera_Isoyetas_9.addFeatures(features_Municipio_Lobatera_Parroquia_Capital_Lobatera_Isoyetas_9);var lyr_Municipio_Lobatera_Parroquia_Capital_Lobatera_Isoyetas_9 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Municipio_Lobatera_Parroquia_Capital_Lobatera_Isoyetas_9, 
                style: style_Municipio_Lobatera_Parroquia_Capital_Lobatera_Isoyetas_9,
                title: '<img src="styles/legend/Municipio_Lobatera_Parroquia_Capital_Lobatera_Isoyetas_9.png" /> Municipio_Lobatera_Parroquia_Capital_Lobatera_Isoyetas'
            });var format_Municipio_Lobatera_Parroquia_Capital_Curvas_de_Nivel_10 = new ol.format.GeoJSON();
var features_Municipio_Lobatera_Parroquia_Capital_Curvas_de_Nivel_10 = format_Municipio_Lobatera_Parroquia_Capital_Curvas_de_Nivel_10.readFeatures(json_Municipio_Lobatera_Parroquia_Capital_Curvas_de_Nivel_10, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Municipio_Lobatera_Parroquia_Capital_Curvas_de_Nivel_10 = new ol.source.Vector({
    attributions: [new ol.Attribution({html: '<a href=""></a>'})],
});
jsonSource_Municipio_Lobatera_Parroquia_Capital_Curvas_de_Nivel_10.addFeatures(features_Municipio_Lobatera_Parroquia_Capital_Curvas_de_Nivel_10);var lyr_Municipio_Lobatera_Parroquia_Capital_Curvas_de_Nivel_10 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Municipio_Lobatera_Parroquia_Capital_Curvas_de_Nivel_10, 
                style: style_Municipio_Lobatera_Parroquia_Capital_Curvas_de_Nivel_10,
                title: '<img src="styles/legend/Municipio_Lobatera_Parroquia_Capital_Curvas_de_Nivel_10.png" /> Municipio_Lobatera_Parroquia_Capital_Curvas_de_Nivel'
            });var format_Municipio_Lobatera_Parroquia_Capital_Geologia_Formaciones_11 = new ol.format.GeoJSON();
var features_Municipio_Lobatera_Parroquia_Capital_Geologia_Formaciones_11 = format_Municipio_Lobatera_Parroquia_Capital_Geologia_Formaciones_11.readFeatures(json_Municipio_Lobatera_Parroquia_Capital_Geologia_Formaciones_11, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Municipio_Lobatera_Parroquia_Capital_Geologia_Formaciones_11 = new ol.source.Vector({
    attributions: [new ol.Attribution({html: '<a href=""></a>'})],
});
jsonSource_Municipio_Lobatera_Parroquia_Capital_Geologia_Formaciones_11.addFeatures(features_Municipio_Lobatera_Parroquia_Capital_Geologia_Formaciones_11);var lyr_Municipio_Lobatera_Parroquia_Capital_Geologia_Formaciones_11 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Municipio_Lobatera_Parroquia_Capital_Geologia_Formaciones_11, 
                style: style_Municipio_Lobatera_Parroquia_Capital_Geologia_Formaciones_11,
    title: 'Municipio_Lobatera_Parroquia_Capital_Geologia_Formaciones<br />\
    <img src="styles/legend/Municipio_Lobatera_Parroquia_Capital_Geologia_Formaciones_11_0.png" /> Aguardiente<br />\
    <img src="styles/legend/Municipio_Lobatera_Parroquia_Capital_Geologia_Formaciones_11_1.png" /> Apon<br />\
    <img src="styles/legend/Municipio_Lobatera_Parroquia_Capital_Geologia_Formaciones_11_2.png" /> Barco<br />\
    <img src="styles/legend/Municipio_Lobatera_Parroquia_Capital_Geologia_Formaciones_11_3.png" /> Capacho<br />\
    <img src="styles/legend/Municipio_Lobatera_Parroquia_Capital_Geologia_Formaciones_11_4.png" /> Carbonera<br />\
    <img src="styles/legend/Municipio_Lobatera_Parroquia_Capital_Geologia_Formaciones_11_5.png" /> Colon<br />\
    <img src="styles/legend/Municipio_Lobatera_Parroquia_Capital_Geologia_Formaciones_11_6.png" /> La Luna<br />\
    <img src="styles/legend/Municipio_Lobatera_Parroquia_Capital_Geologia_Formaciones_11_7.png" /> Los Cuervos<br />\
    <img src="styles/legend/Municipio_Lobatera_Parroquia_Capital_Geologia_Formaciones_11_8.png" /> Luna<br />\
    <img src="styles/legend/Municipio_Lobatera_Parroquia_Capital_Geologia_Formaciones_11_9.png" /> Mirador<br />\
    <img src="styles/legend/Municipio_Lobatera_Parroquia_Capital_Geologia_Formaciones_11_10.png" /> Rio Negro<br />'
        });var format_Municipio_Lobatera_Parroquia_Capital_Geologia_Estructural_12 = new ol.format.GeoJSON();
var features_Municipio_Lobatera_Parroquia_Capital_Geologia_Estructural_12 = format_Municipio_Lobatera_Parroquia_Capital_Geologia_Estructural_12.readFeatures(json_Municipio_Lobatera_Parroquia_Capital_Geologia_Estructural_12, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Municipio_Lobatera_Parroquia_Capital_Geologia_Estructural_12 = new ol.source.Vector({
    attributions: [new ol.Attribution({html: '<a href=""></a>'})],
});
jsonSource_Municipio_Lobatera_Parroquia_Capital_Geologia_Estructural_12.addFeatures(features_Municipio_Lobatera_Parroquia_Capital_Geologia_Estructural_12);var lyr_Municipio_Lobatera_Parroquia_Capital_Geologia_Estructural_12 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Municipio_Lobatera_Parroquia_Capital_Geologia_Estructural_12, 
                style: style_Municipio_Lobatera_Parroquia_Capital_Geologia_Estructural_12,
                title: '<img src="styles/legend/Municipio_Lobatera_Parroquia_Capital_Geologia_Estructural_12.png" /> Municipio_Lobatera_Parroquia_Capital_Geologia_Estructural'
            });var format_Municipio_Lobatera_Parroquia_Capital_Cronoestratigrafia_13 = new ol.format.GeoJSON();
var features_Municipio_Lobatera_Parroquia_Capital_Cronoestratigrafia_13 = format_Municipio_Lobatera_Parroquia_Capital_Cronoestratigrafia_13.readFeatures(json_Municipio_Lobatera_Parroquia_Capital_Cronoestratigrafia_13, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Municipio_Lobatera_Parroquia_Capital_Cronoestratigrafia_13 = new ol.source.Vector({
    attributions: [new ol.Attribution({html: '<a href=""></a>'})],
});
jsonSource_Municipio_Lobatera_Parroquia_Capital_Cronoestratigrafia_13.addFeatures(features_Municipio_Lobatera_Parroquia_Capital_Cronoestratigrafia_13);var lyr_Municipio_Lobatera_Parroquia_Capital_Cronoestratigrafia_13 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Municipio_Lobatera_Parroquia_Capital_Cronoestratigrafia_13, 
                style: style_Municipio_Lobatera_Parroquia_Capital_Cronoestratigrafia_13,
    title: 'Municipio_Lobatera_Parroquia_Capital_Cronoestratigrafia<br />\
    <img src="styles/legend/Municipio_Lobatera_Parroquia_Capital_Cronoestratigrafia_13_0.png" /> Cretáceo<br />\
    <img src="styles/legend/Municipio_Lobatera_Parroquia_Capital_Cronoestratigrafia_13_1.png" /> Paleogeno<br />'
        });var format_Municipio_Lobatera_Parroquia_Capital_Capacidad_Uso_del_Suelo_14 = new ol.format.GeoJSON();
var features_Municipio_Lobatera_Parroquia_Capital_Capacidad_Uso_del_Suelo_14 = format_Municipio_Lobatera_Parroquia_Capital_Capacidad_Uso_del_Suelo_14.readFeatures(json_Municipio_Lobatera_Parroquia_Capital_Capacidad_Uso_del_Suelo_14, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Municipio_Lobatera_Parroquia_Capital_Capacidad_Uso_del_Suelo_14 = new ol.source.Vector({
    attributions: [new ol.Attribution({html: '<a href=""></a>'})],
});
jsonSource_Municipio_Lobatera_Parroquia_Capital_Capacidad_Uso_del_Suelo_14.addFeatures(features_Municipio_Lobatera_Parroquia_Capital_Capacidad_Uso_del_Suelo_14);var lyr_Municipio_Lobatera_Parroquia_Capital_Capacidad_Uso_del_Suelo_14 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Municipio_Lobatera_Parroquia_Capital_Capacidad_Uso_del_Suelo_14, 
                style: style_Municipio_Lobatera_Parroquia_Capital_Capacidad_Uso_del_Suelo_14,
    title: 'Municipio_Lobatera_Parroquia_Capital_Capacidad_Uso_del_Suelo<br />\
    <img src="styles/legend/Municipio_Lobatera_Parroquia_Capital_Capacidad_Uso_del_Suelo_14_0.png" /> Clase V<br />\
    <img src="styles/legend/Municipio_Lobatera_Parroquia_Capital_Capacidad_Uso_del_Suelo_14_1.png" /> Clase VI<br />\
    <img src="styles/legend/Municipio_Lobatera_Parroquia_Capital_Capacidad_Uso_del_Suelo_14_2.png" /> Clase VII<br />'
        });var format_Municipio_Lobatera_Parroquia_Capital_Poblados_Capitales_15 = new ol.format.GeoJSON();
var features_Municipio_Lobatera_Parroquia_Capital_Poblados_Capitales_15 = format_Municipio_Lobatera_Parroquia_Capital_Poblados_Capitales_15.readFeatures(json_Municipio_Lobatera_Parroquia_Capital_Poblados_Capitales_15, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Municipio_Lobatera_Parroquia_Capital_Poblados_Capitales_15 = new ol.source.Vector({
    attributions: [new ol.Attribution({html: '<a href=""></a>'})],
});
jsonSource_Municipio_Lobatera_Parroquia_Capital_Poblados_Capitales_15.addFeatures(features_Municipio_Lobatera_Parroquia_Capital_Poblados_Capitales_15);var lyr_Municipio_Lobatera_Parroquia_Capital_Poblados_Capitales_15 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Municipio_Lobatera_Parroquia_Capital_Poblados_Capitales_15, 
                style: style_Municipio_Lobatera_Parroquia_Capital_Poblados_Capitales_15,
                title: '<img src="styles/legend/Municipio_Lobatera_Parroquia_Capital_Poblados_Capitales_15.png" />  Municipio_Lobatera_Parroquia_Capital_Poblados_Capitales'
            });var format_Municipio_Lobatera_Parroquia_Capital_Centros_Poblados_16 = new ol.format.GeoJSON();
var features_Municipio_Lobatera_Parroquia_Capital_Centros_Poblados_16 = format_Municipio_Lobatera_Parroquia_Capital_Centros_Poblados_16.readFeatures(json_Municipio_Lobatera_Parroquia_Capital_Centros_Poblados_16, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Municipio_Lobatera_Parroquia_Capital_Centros_Poblados_16 = new ol.source.Vector({
    attributions: [new ol.Attribution({html: '<a href=""></a>'})],
});
jsonSource_Municipio_Lobatera_Parroquia_Capital_Centros_Poblados_16.addFeatures(features_Municipio_Lobatera_Parroquia_Capital_Centros_Poblados_16);var lyr_Municipio_Lobatera_Parroquia_Capital_Centros_Poblados_16 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Municipio_Lobatera_Parroquia_Capital_Centros_Poblados_16, 
                style: style_Municipio_Lobatera_Parroquia_Capital_Centros_Poblados_16,
                title: '<img src="styles/legend/Municipio_Lobatera_Parroquia_Capital_Centros_Poblados_16.png" /> Municipio_Lobatera_Parroquia_Capital_Centros_Poblados'
            });

lyr_GOOGLESATLITE_0.setVisible(true);lyr_OpenStreetMap_1.setVisible(true);lyr_Municipio_Lobatera_Parroquia_Capital_Vialidad_2.setVisible(true);lyr_Municipio_Lobatera_Parroquia_Capital_Lobatera_Hidrografia_3.setVisible(true);lyr_Municipio_Lobatera_Parroquia_Capital_Unidades_de_Paisaje_4.setVisible(true);lyr_Municipio_Lobatera_Parroquia_Capital_Temperatura_5.setVisible(true);lyr_Municipio_Lobatera_Parroquia_Capital_Recursos_Minerales_ZN_6.setVisible(true);lyr_Municipio_Lobatera_Parroquia_Capital_Precipitacion_7.setVisible(true);lyr_Municipio_Lobatera_Parroquia_Capital_Lobatera_Oronimia_8.setVisible(true);lyr_Municipio_Lobatera_Parroquia_Capital_Lobatera_Isoyetas_9.setVisible(true);lyr_Municipio_Lobatera_Parroquia_Capital_Curvas_de_Nivel_10.setVisible(true);lyr_Municipio_Lobatera_Parroquia_Capital_Geologia_Formaciones_11.setVisible(true);lyr_Municipio_Lobatera_Parroquia_Capital_Geologia_Estructural_12.setVisible(true);lyr_Municipio_Lobatera_Parroquia_Capital_Cronoestratigrafia_13.setVisible(true);lyr_Municipio_Lobatera_Parroquia_Capital_Capacidad_Uso_del_Suelo_14.setVisible(true);lyr_Municipio_Lobatera_Parroquia_Capital_Poblados_Capitales_15.setVisible(true);lyr_Municipio_Lobatera_Parroquia_Capital_Centros_Poblados_16.setVisible(true);
var layersList = [lyr_GOOGLESATLITE_0,lyr_OpenStreetMap_1,lyr_Municipio_Lobatera_Parroquia_Capital_Vialidad_2,lyr_Municipio_Lobatera_Parroquia_Capital_Lobatera_Hidrografia_3,lyr_Municipio_Lobatera_Parroquia_Capital_Unidades_de_Paisaje_4,lyr_Municipio_Lobatera_Parroquia_Capital_Temperatura_5,lyr_Municipio_Lobatera_Parroquia_Capital_Recursos_Minerales_ZN_6,lyr_Municipio_Lobatera_Parroquia_Capital_Precipitacion_7,lyr_Municipio_Lobatera_Parroquia_Capital_Lobatera_Oronimia_8,lyr_Municipio_Lobatera_Parroquia_Capital_Lobatera_Isoyetas_9,lyr_Municipio_Lobatera_Parroquia_Capital_Curvas_de_Nivel_10,lyr_Municipio_Lobatera_Parroquia_Capital_Geologia_Formaciones_11,lyr_Municipio_Lobatera_Parroquia_Capital_Geologia_Estructural_12,lyr_Municipio_Lobatera_Parroquia_Capital_Cronoestratigrafia_13,lyr_Municipio_Lobatera_Parroquia_Capital_Capacidad_Uso_del_Suelo_14,lyr_Municipio_Lobatera_Parroquia_Capital_Poblados_Capitales_15,lyr_Municipio_Lobatera_Parroquia_Capital_Centros_Poblados_16];
lyr_Municipio_Lobatera_Parroquia_Capital_Vialidad_2.set('fieldAliases', {'pk': 'pk', 'id': 'id', 'estado': 'estado', 'nombre': 'nombre', 'tipo': 'tipo', 'fuente': 'fuente', });
lyr_Municipio_Lobatera_Parroquia_Capital_Lobatera_Hidrografia_3.set('fieldAliases', {'pk': 'pk', 'id': 'id', 'estado': 'estado', 'nombre': 'nombre', 'fuente': 'fuente', 'id_2': 'id_2', 'estado_2': 'estado_2', 'nombre_2': 'nombre_2', 'fuente_2': 'fuente_2', });
lyr_Municipio_Lobatera_Parroquia_Capital_Unidades_de_Paisaje_4.set('fieldAliases', {'pk': 'pk', 'rowid': 'rowid', 'id': 'id', 'estado': 'estado', 'unidad': 'unidad', 'fuente': 'fuente', });
lyr_Municipio_Lobatera_Parroquia_Capital_Temperatura_5.set('fieldAliases', {'pk': 'pk', 'id': 'id', 'estado': 'estado', 'temperatur': 'temperatur', 'fuente': 'fuente', });
lyr_Municipio_Lobatera_Parroquia_Capital_Recursos_Minerales_ZN_6.set('fieldAliases', {'pk': 'pk', 'id': 'id', 'estado': 'estado', 'mineral': 'mineral', 'fuente': 'fuente', });
lyr_Municipio_Lobatera_Parroquia_Capital_Precipitacion_7.set('fieldAliases', {'pk': 'pk', 'id': 'id', 'estado': 'estado', 'valor_men': 'valor_men', 'valor_may': 'valor_may', 'rango': 'rango', 'valor': 'valor', 'fuente': 'fuente', });
lyr_Municipio_Lobatera_Parroquia_Capital_Lobatera_Oronimia_8.set('fieldAliases', {'pk': 'pk', 'id': 'id', 'código': 'código', 'código_est': 'código_est', 'estado': 'estado', 'capital_es': 'capital_es', 'código_mun': 'código_mun', 'municipio': 'municipio', 'capital_mu': 'capital_mu', 'código_par': 'código_par', 'parroquia': 'parroquia', 'capital_pa': 'capital_pa', 'nombre': 'nombre', 'fuente': 'fuente', });
lyr_Municipio_Lobatera_Parroquia_Capital_Lobatera_Isoyetas_9.set('fieldAliases', {'pk': 'pk', 'id': 'id', 'estado': 'estado', 'precipitac': 'precipitac', 'fuente': 'fuente', });
lyr_Municipio_Lobatera_Parroquia_Capital_Curvas_de_Nivel_10.set('fieldAliases', {'pk': 'pk', 'id': 'id', 'estado': 'estado', 'altitud_ms': 'altitud_ms', 'fuente': 'fuente', });
lyr_Municipio_Lobatera_Parroquia_Capital_Geologia_Formaciones_11.set('fieldAliases', {'pk': 'pk', 'id': 'id', 'estado': 'estado', 'nomenclatu': 'nomenclatu', 'formacion': 'formacion', 'fuente': 'fuente', });
lyr_Municipio_Lobatera_Parroquia_Capital_Geologia_Estructural_12.set('fieldAliases', {'pk': 'pk', 'id': 'id', 'estado': 'estado', 'nombre': 'nombre', 'n': 'n', 'fuente': 'fuente', });
lyr_Municipio_Lobatera_Parroquia_Capital_Cronoestratigrafia_13.set('fieldAliases', {'pk': 'pk', 'id': 'id', 'estado': 'estado', 'número': 'número', 'era': 'era', 'período': 'período', 'época': 'época', 'roca': 'roca', 'fuente': 'fuente', });
lyr_Municipio_Lobatera_Parroquia_Capital_Capacidad_Uso_del_Suelo_14.set('fieldAliases', {'pk': 'pk', 'id': 'id', 'estado': 'estado', 'clase_suel': 'clase_suel', 'fuente': 'fuente', });
lyr_Municipio_Lobatera_Parroquia_Capital_Poblados_Capitales_15.set('fieldAliases', {'pk': 'pk', 'id': 'id', 'código': 'código', 'código_est': 'código_est', 'estado': 'estado', 'capital_es': 'capital_es', 'código_mun': 'código_mun', 'municipio': 'municipio', 'capital_mu': 'capital_mu', 'código_par': 'código_par', 'parroquia': 'parroquia', 'capital_pa': 'capital_pa', 'nombre': 'nombre', 'descripció': 'descripció', 'fuente': 'fuente', });
lyr_Municipio_Lobatera_Parroquia_Capital_Centros_Poblados_16.set('fieldAliases', {'pk': 'pk', 'id': 'id', 'código': 'código', 'código_est': 'código_est', 'estado': 'estado', 'capital_es': 'capital_es', 'código_mun': 'código_mun', 'municipio': 'municipio', 'capital_mu': 'capital_mu', 'código_par': 'código_par', 'parroquia': 'parroquia', 'capital_pa': 'capital_pa', 'nombre': 'nombre', 'descripció': 'descripció', 'fuente': 'fuente', });
lyr_Municipio_Lobatera_Parroquia_Capital_Vialidad_2.set('fieldImages', {'pk': 'TextEdit', 'id': 'TextEdit', 'estado': 'TextEdit', 'nombre': 'TextEdit', 'tipo': 'TextEdit', 'fuente': 'TextEdit', });
lyr_Municipio_Lobatera_Parroquia_Capital_Lobatera_Hidrografia_3.set('fieldImages', {'pk': 'TextEdit', 'id': 'TextEdit', 'estado': 'TextEdit', 'nombre': 'TextEdit', 'fuente': 'TextEdit', 'id_2': 'TextEdit', 'estado_2': 'TextEdit', 'nombre_2': 'TextEdit', 'fuente_2': 'TextEdit', });
lyr_Municipio_Lobatera_Parroquia_Capital_Unidades_de_Paisaje_4.set('fieldImages', {'pk': 'TextEdit', 'rowid': 'TextEdit', 'id': 'TextEdit', 'estado': 'TextEdit', 'unidad': 'TextEdit', 'fuente': 'TextEdit', });
lyr_Municipio_Lobatera_Parroquia_Capital_Temperatura_5.set('fieldImages', {'pk': 'TextEdit', 'id': 'TextEdit', 'estado': 'TextEdit', 'temperatur': 'TextEdit', 'fuente': 'TextEdit', });
lyr_Municipio_Lobatera_Parroquia_Capital_Recursos_Minerales_ZN_6.set('fieldImages', {'pk': 'TextEdit', 'id': 'TextEdit', 'estado': 'TextEdit', 'mineral': 'TextEdit', 'fuente': 'TextEdit', });
lyr_Municipio_Lobatera_Parroquia_Capital_Precipitacion_7.set('fieldImages', {'pk': 'TextEdit', 'id': 'TextEdit', 'estado': 'TextEdit', 'valor_men': 'TextEdit', 'valor_may': 'TextEdit', 'rango': 'TextEdit', 'valor': 'TextEdit', 'fuente': 'TextEdit', });
lyr_Municipio_Lobatera_Parroquia_Capital_Lobatera_Oronimia_8.set('fieldImages', {'pk': 'TextEdit', 'id': 'TextEdit', 'código': 'TextEdit', 'código_est': 'TextEdit', 'estado': 'TextEdit', 'capital_es': 'TextEdit', 'código_mun': 'TextEdit', 'municipio': 'TextEdit', 'capital_mu': 'TextEdit', 'código_par': 'TextEdit', 'parroquia': 'TextEdit', 'capital_pa': 'TextEdit', 'nombre': 'TextEdit', 'fuente': 'TextEdit', });
lyr_Municipio_Lobatera_Parroquia_Capital_Lobatera_Isoyetas_9.set('fieldImages', {'pk': 'TextEdit', 'id': 'TextEdit', 'estado': 'TextEdit', 'precipitac': 'TextEdit', 'fuente': 'TextEdit', });
lyr_Municipio_Lobatera_Parroquia_Capital_Curvas_de_Nivel_10.set('fieldImages', {'pk': 'TextEdit', 'id': 'TextEdit', 'estado': 'TextEdit', 'altitud_ms': 'TextEdit', 'fuente': 'TextEdit', });
lyr_Municipio_Lobatera_Parroquia_Capital_Geologia_Formaciones_11.set('fieldImages', {'pk': 'TextEdit', 'id': 'TextEdit', 'estado': 'TextEdit', 'nomenclatu': 'TextEdit', 'formacion': 'TextEdit', 'fuente': 'TextEdit', });
lyr_Municipio_Lobatera_Parroquia_Capital_Geologia_Estructural_12.set('fieldImages', {'pk': 'TextEdit', 'id': 'TextEdit', 'estado': 'TextEdit', 'nombre': 'TextEdit', 'n': 'TextEdit', 'fuente': 'TextEdit', });
lyr_Municipio_Lobatera_Parroquia_Capital_Cronoestratigrafia_13.set('fieldImages', {'pk': 'TextEdit', 'id': 'TextEdit', 'estado': 'TextEdit', 'número': 'TextEdit', 'era': 'TextEdit', 'período': 'TextEdit', 'época': 'TextEdit', 'roca': 'TextEdit', 'fuente': 'TextEdit', });
lyr_Municipio_Lobatera_Parroquia_Capital_Capacidad_Uso_del_Suelo_14.set('fieldImages', {'pk': 'TextEdit', 'id': 'TextEdit', 'estado': 'TextEdit', 'clase_suel': 'TextEdit', 'fuente': 'TextEdit', });
lyr_Municipio_Lobatera_Parroquia_Capital_Poblados_Capitales_15.set('fieldImages', {'pk': 'TextEdit', 'id': 'TextEdit', 'código': 'TextEdit', 'código_est': 'TextEdit', 'estado': 'TextEdit', 'capital_es': 'TextEdit', 'código_mun': 'TextEdit', 'municipio': 'TextEdit', 'capital_mu': 'TextEdit', 'código_par': 'TextEdit', 'parroquia': 'TextEdit', 'capital_pa': 'TextEdit', 'nombre': 'TextEdit', 'descripció': 'TextEdit', 'fuente': 'TextEdit', });
lyr_Municipio_Lobatera_Parroquia_Capital_Centros_Poblados_16.set('fieldImages', {'pk': 'TextEdit', 'id': 'TextEdit', 'código': 'TextEdit', 'código_est': 'TextEdit', 'estado': 'TextEdit', 'capital_es': 'TextEdit', 'código_mun': 'TextEdit', 'municipio': 'TextEdit', 'capital_mu': 'TextEdit', 'código_par': 'TextEdit', 'parroquia': 'TextEdit', 'capital_pa': 'TextEdit', 'nombre': 'TextEdit', 'descripció': 'TextEdit', 'fuente': 'TextEdit', });
lyr_Municipio_Lobatera_Parroquia_Capital_Vialidad_2.set('fieldLabels', {'pk': 'no label', 'id': 'no label', 'estado': 'no label', 'nombre': 'no label', 'tipo': 'no label', 'fuente': 'no label', });
lyr_Municipio_Lobatera_Parroquia_Capital_Lobatera_Hidrografia_3.set('fieldLabels', {'pk': 'no label', 'id': 'no label', 'estado': 'no label', 'nombre': 'no label', 'fuente': 'no label', 'id_2': 'no label', 'estado_2': 'no label', 'nombre_2': 'no label', 'fuente_2': 'no label', });
lyr_Municipio_Lobatera_Parroquia_Capital_Unidades_de_Paisaje_4.set('fieldLabels', {'pk': 'no label', 'rowid': 'no label', 'id': 'no label', 'estado': 'no label', 'unidad': 'no label', 'fuente': 'no label', });
lyr_Municipio_Lobatera_Parroquia_Capital_Temperatura_5.set('fieldLabels', {'pk': 'no label', 'id': 'no label', 'estado': 'no label', 'temperatur': 'no label', 'fuente': 'no label', });
lyr_Municipio_Lobatera_Parroquia_Capital_Recursos_Minerales_ZN_6.set('fieldLabels', {'pk': 'no label', 'id': 'no label', 'estado': 'no label', 'mineral': 'no label', 'fuente': 'no label', });
lyr_Municipio_Lobatera_Parroquia_Capital_Precipitacion_7.set('fieldLabels', {'pk': 'no label', 'id': 'no label', 'estado': 'no label', 'valor_men': 'no label', 'valor_may': 'no label', 'rango': 'no label', 'valor': 'no label', 'fuente': 'no label', });
lyr_Municipio_Lobatera_Parroquia_Capital_Lobatera_Oronimia_8.set('fieldLabels', {'pk': 'no label', 'id': 'no label', 'código': 'no label', 'código_est': 'no label', 'estado': 'no label', 'capital_es': 'no label', 'código_mun': 'no label', 'municipio': 'no label', 'capital_mu': 'no label', 'código_par': 'no label', 'parroquia': 'no label', 'capital_pa': 'no label', 'nombre': 'no label', 'fuente': 'no label', });
lyr_Municipio_Lobatera_Parroquia_Capital_Lobatera_Isoyetas_9.set('fieldLabels', {'pk': 'no label', 'id': 'no label', 'estado': 'no label', 'precipitac': 'no label', 'fuente': 'no label', });
lyr_Municipio_Lobatera_Parroquia_Capital_Curvas_de_Nivel_10.set('fieldLabels', {'pk': 'no label', 'id': 'no label', 'estado': 'no label', 'altitud_ms': 'no label', 'fuente': 'no label', });
lyr_Municipio_Lobatera_Parroquia_Capital_Geologia_Formaciones_11.set('fieldLabels', {'pk': 'no label', 'id': 'no label', 'estado': 'no label', 'nomenclatu': 'no label', 'formacion': 'no label', 'fuente': 'no label', });
lyr_Municipio_Lobatera_Parroquia_Capital_Geologia_Estructural_12.set('fieldLabels', {'pk': 'no label', 'id': 'no label', 'estado': 'no label', 'nombre': 'no label', 'n': 'no label', 'fuente': 'no label', });
lyr_Municipio_Lobatera_Parroquia_Capital_Cronoestratigrafia_13.set('fieldLabels', {'pk': 'no label', 'id': 'no label', 'estado': 'no label', 'número': 'no label', 'era': 'no label', 'período': 'no label', 'época': 'no label', 'roca': 'no label', 'fuente': 'no label', });
lyr_Municipio_Lobatera_Parroquia_Capital_Capacidad_Uso_del_Suelo_14.set('fieldLabels', {'pk': 'no label', 'id': 'no label', 'estado': 'no label', 'clase_suel': 'no label', 'fuente': 'no label', });
lyr_Municipio_Lobatera_Parroquia_Capital_Poblados_Capitales_15.set('fieldLabels', {'pk': 'no label', 'id': 'no label', 'código': 'no label', 'código_est': 'no label', 'estado': 'no label', 'capital_es': 'no label', 'código_mun': 'no label', 'municipio': 'no label', 'capital_mu': 'no label', 'código_par': 'no label', 'parroquia': 'no label', 'capital_pa': 'no label', 'nombre': 'no label', 'descripció': 'no label', 'fuente': 'no label', });
lyr_Municipio_Lobatera_Parroquia_Capital_Centros_Poblados_16.set('fieldLabels', {'pk': 'no label', 'id': 'no label', 'código': 'no label', 'código_est': 'no label', 'estado': 'no label', 'capital_es': 'no label', 'código_mun': 'no label', 'municipio': 'no label', 'capital_mu': 'no label', 'código_par': 'no label', 'parroquia': 'no label', 'capital_pa': 'no label', 'nombre': 'no label', 'descripció': 'no label', 'fuente': 'no label', });
lyr_Municipio_Lobatera_Parroquia_Capital_Centros_Poblados_16.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});