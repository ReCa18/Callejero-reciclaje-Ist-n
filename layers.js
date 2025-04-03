var wms_layers = [];


        var lyr_OpenStreetMap_0 = new ol.layer.Tile({
            'title': 'OpenStreetMap',
            'type':'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' ',
                url: 'http://tile.openstreetmap.org/{z}/{x}/{y}.png'
            })
        });

        var lyr_GoogleHybrid_1 = new ol.layer.Tile({
            'title': 'Google Hybrid',
            'type':'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' &nbsp &middot; <a href="https://www.google.at/permissions/geoguidelines/attr-guide.html">Map data ©2015 Google</a>',
                url: 'https://mt1.google.com/vt/lyrs=y&x={x}&y={y}&z={z}'
            })
        });
var format_MINIISLAECOLGICA_2 = new ol.format.GeoJSON();
var features_MINIISLAECOLGICA_2 = format_MINIISLAECOLGICA_2.readFeatures(json_MINIISLAECOLGICA_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_MINIISLAECOLGICA_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_MINIISLAECOLGICA_2.addFeatures(features_MINIISLAECOLGICA_2);
var lyr_MINIISLAECOLGICA_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_MINIISLAECOLGICA_2, 
                style: style_MINIISLAECOLGICA_2,
                popuplayertitle: 'MINIISLA ECOLÓGICA',
                interactive: true,
                title: '<img src="styles/legend/MINIISLAECOLGICA_2.png" /> MINIISLA ECOLÓGICA'
            });
var format_ISLASECOLGICAS_3 = new ol.format.GeoJSON();
var features_ISLASECOLGICAS_3 = format_ISLASECOLGICAS_3.readFeatures(json_ISLASECOLGICAS_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_ISLASECOLGICAS_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ISLASECOLGICAS_3.addFeatures(features_ISLASECOLGICAS_3);
var lyr_ISLASECOLGICAS_3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_ISLASECOLGICAS_3, 
                style: style_ISLASECOLGICAS_3,
                popuplayertitle: 'ISLAS ECOLÓGICAS',
                interactive: true,
                title: '<img src="styles/legend/ISLASECOLGICAS_3.png" /> ISLAS ECOLÓGICAS'
            });
var format_CONTENEDORESDERECICLAJE_4 = new ol.format.GeoJSON();
var features_CONTENEDORESDERECICLAJE_4 = format_CONTENEDORESDERECICLAJE_4.readFeatures(json_CONTENEDORESDERECICLAJE_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_CONTENEDORESDERECICLAJE_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_CONTENEDORESDERECICLAJE_4.addFeatures(features_CONTENEDORESDERECICLAJE_4);
var lyr_CONTENEDORESDERECICLAJE_4 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_CONTENEDORESDERECICLAJE_4, 
                style: style_CONTENEDORESDERECICLAJE_4,
                popuplayertitle: 'CONTENEDORES DE RECICLAJE',
                interactive: true,
                title: '<img src="styles/legend/CONTENEDORESDERECICLAJE_4.png" /> CONTENEDORES DE RECICLAJE'
            });
var format_CONTENEDORROPAUSADA_5 = new ol.format.GeoJSON();
var features_CONTENEDORROPAUSADA_5 = format_CONTENEDORROPAUSADA_5.readFeatures(json_CONTENEDORROPAUSADA_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_CONTENEDORROPAUSADA_5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_CONTENEDORROPAUSADA_5.addFeatures(features_CONTENEDORROPAUSADA_5);
var lyr_CONTENEDORROPAUSADA_5 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_CONTENEDORROPAUSADA_5, 
                style: style_CONTENEDORROPAUSADA_5,
                popuplayertitle: 'CONTENEDOR ROPA USADA',
                interactive: true,
                title: '<img src="styles/legend/CONTENEDORROPAUSADA_5.png" /> CONTENEDOR ROPA USADA'
            });
var format_CONTENEDORDEPILAS_6 = new ol.format.GeoJSON();
var features_CONTENEDORDEPILAS_6 = format_CONTENEDORDEPILAS_6.readFeatures(json_CONTENEDORDEPILAS_6, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_CONTENEDORDEPILAS_6 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_CONTENEDORDEPILAS_6.addFeatures(features_CONTENEDORDEPILAS_6);
var lyr_CONTENEDORDEPILAS_6 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_CONTENEDORDEPILAS_6, 
                style: style_CONTENEDORDEPILAS_6,
                popuplayertitle: 'CONTENEDOR DE PILAS',
                interactive: true,
                title: '<img src="styles/legend/CONTENEDORDEPILAS_6.png" /> CONTENEDOR DE PILAS'
            });
var format_PAPELERASCANINAS_7 = new ol.format.GeoJSON();
var features_PAPELERASCANINAS_7 = format_PAPELERASCANINAS_7.readFeatures(json_PAPELERASCANINAS_7, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_PAPELERASCANINAS_7 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_PAPELERASCANINAS_7.addFeatures(features_PAPELERASCANINAS_7);
var lyr_PAPELERASCANINAS_7 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_PAPELERASCANINAS_7, 
                style: style_PAPELERASCANINAS_7,
                popuplayertitle: 'PAPELERAS CANINAS',
                interactive: true,
                title: '<img src="styles/legend/PAPELERASCANINAS_7.png" /> PAPELERAS CANINAS'
            });

lyr_OpenStreetMap_0.setVisible(false);lyr_GoogleHybrid_1.setVisible(false);lyr_MINIISLAECOLGICA_2.setVisible(true);lyr_ISLASECOLGICAS_3.setVisible(true);lyr_CONTENEDORESDERECICLAJE_4.setVisible(true);lyr_CONTENEDORROPAUSADA_5.setVisible(true);lyr_CONTENEDORDEPILAS_6.setVisible(true);lyr_PAPELERASCANINAS_7.setVisible(true);
var layersList = [lyr_OpenStreetMap_0,lyr_GoogleHybrid_1,lyr_MINIISLAECOLGICA_2,lyr_ISLASECOLGICAS_3,lyr_CONTENEDORESDERECICLAJE_4,lyr_CONTENEDORROPAUSADA_5,lyr_CONTENEDORDEPILAS_6,lyr_PAPELERASCANINAS_7];
lyr_MINIISLAECOLGICA_2.set('fieldAliases', {'Name': 'Name', 'description': 'description', 'timestamp': 'timestamp', 'begin': 'begin', 'end': 'end', 'altitudeMode': 'altitudeMode', 'tessellate': 'tessellate', 'extrude': 'extrude', 'visibility': 'visibility', 'drawOrder': 'drawOrder', 'icon': 'icon', });
lyr_ISLASECOLGICAS_3.set('fieldAliases', {'Name': 'Name', 'description': 'description', 'timestamp': 'timestamp', 'begin': 'begin', 'end': 'end', 'altitudeMode': 'altitudeMode', 'tessellate': 'tessellate', 'extrude': 'extrude', 'visibility': 'visibility', 'drawOrder': 'drawOrder', 'icon': 'icon', });
lyr_CONTENEDORESDERECICLAJE_4.set('fieldAliases', {'Name': 'Name', 'description': 'description', 'timestamp': 'timestamp', 'begin': 'begin', 'end': 'end', 'altitudeMode': 'altitudeMode', 'tessellate': 'tessellate', 'extrude': 'extrude', 'visibility': 'visibility', 'drawOrder': 'drawOrder', 'icon': 'icon', });
lyr_CONTENEDORROPAUSADA_5.set('fieldAliases', {'Name': 'Name', 'description': 'description', 'timestamp': 'timestamp', 'begin': 'begin', 'end': 'end', 'altitudeMode': 'altitudeMode', 'tessellate': 'tessellate', 'extrude': 'extrude', 'visibility': 'visibility', 'drawOrder': 'drawOrder', 'icon': 'icon', });
lyr_CONTENEDORDEPILAS_6.set('fieldAliases', {'Name': 'Name', 'description': 'description', 'timestamp': 'timestamp', 'begin': 'begin', 'end': 'end', 'altitudeMode': 'altitudeMode', 'tessellate': 'tessellate', 'extrude': 'extrude', 'visibility': 'visibility', 'drawOrder': 'drawOrder', 'icon': 'icon', });
lyr_PAPELERASCANINAS_7.set('fieldAliases', {'qc_id': 'qc_id', 'name': 'name', 'description': 'description', 'timestamp': 'timestamp', 'begin': 'begin', 'end': 'end', 'altitudemode': 'altitudemode', 'tessellate': 'tessellate', 'extrude': 'extrude', 'visibility': 'visibility', 'draworder': 'draworder', 'icon': 'icon', });
lyr_MINIISLAECOLGICA_2.set('fieldImages', {'Name': 'TextEdit', 'description': 'TextEdit', 'timestamp': 'DateTime', 'begin': 'DateTime', 'end': 'DateTime', 'altitudeMode': 'TextEdit', 'tessellate': 'Range', 'extrude': 'Range', 'visibility': 'Range', 'drawOrder': 'Range', 'icon': 'TextEdit', });
lyr_ISLASECOLGICAS_3.set('fieldImages', {'Name': 'TextEdit', 'description': 'TextEdit', 'timestamp': 'DateTime', 'begin': 'DateTime', 'end': 'DateTime', 'altitudeMode': 'TextEdit', 'tessellate': 'Range', 'extrude': 'Range', 'visibility': 'Range', 'drawOrder': 'Range', 'icon': 'TextEdit', });
lyr_CONTENEDORESDERECICLAJE_4.set('fieldImages', {'Name': 'TextEdit', 'description': 'TextEdit', 'timestamp': 'DateTime', 'begin': 'DateTime', 'end': 'DateTime', 'altitudeMode': 'TextEdit', 'tessellate': 'Range', 'extrude': 'Range', 'visibility': 'Range', 'drawOrder': 'Range', 'icon': 'TextEdit', });
lyr_CONTENEDORROPAUSADA_5.set('fieldImages', {'Name': 'TextEdit', 'description': 'TextEdit', 'timestamp': 'DateTime', 'begin': 'DateTime', 'end': 'DateTime', 'altitudeMode': 'TextEdit', 'tessellate': 'Range', 'extrude': 'Range', 'visibility': 'Range', 'drawOrder': 'Range', 'icon': 'TextEdit', });
lyr_CONTENEDORDEPILAS_6.set('fieldImages', {'Name': 'TextEdit', 'description': 'TextEdit', 'timestamp': 'DateTime', 'begin': 'DateTime', 'end': 'DateTime', 'altitudeMode': 'TextEdit', 'tessellate': 'Range', 'extrude': 'Range', 'visibility': 'Range', 'drawOrder': 'Range', 'icon': 'TextEdit', });
lyr_PAPELERASCANINAS_7.set('fieldImages', {'qc_id': 'TextEdit', 'name': 'TextEdit', 'description': 'TextEdit', 'timestamp': 'DateTime', 'begin': 'DateTime', 'end': 'DateTime', 'altitudemode': 'TextEdit', 'tessellate': 'Range', 'extrude': 'Range', 'visibility': 'Range', 'draworder': 'Range', 'icon': 'TextEdit', });
lyr_MINIISLAECOLGICA_2.set('fieldLabels', {'Name': 'no label', 'description': 'no label', 'timestamp': 'no label', 'begin': 'no label', 'end': 'no label', 'altitudeMode': 'no label', 'tessellate': 'no label', 'extrude': 'no label', 'visibility': 'no label', 'drawOrder': 'no label', 'icon': 'no label', });
lyr_ISLASECOLGICAS_3.set('fieldLabels', {'Name': 'no label', 'description': 'no label', 'timestamp': 'no label', 'begin': 'no label', 'end': 'no label', 'altitudeMode': 'no label', 'tessellate': 'no label', 'extrude': 'no label', 'visibility': 'no label', 'drawOrder': 'no label', 'icon': 'no label', });
lyr_CONTENEDORESDERECICLAJE_4.set('fieldLabels', {'Name': 'no label', 'description': 'no label', 'timestamp': 'no label', 'begin': 'no label', 'end': 'no label', 'altitudeMode': 'no label', 'tessellate': 'no label', 'extrude': 'no label', 'visibility': 'no label', 'drawOrder': 'no label', 'icon': 'no label', });
lyr_CONTENEDORROPAUSADA_5.set('fieldLabels', {'Name': 'no label', 'description': 'no label', 'timestamp': 'no label', 'begin': 'no label', 'end': 'no label', 'altitudeMode': 'no label', 'tessellate': 'no label', 'extrude': 'no label', 'visibility': 'no label', 'drawOrder': 'no label', 'icon': 'no label', });
lyr_CONTENEDORDEPILAS_6.set('fieldLabels', {'Name': 'no label', 'description': 'no label', 'timestamp': 'no label', 'begin': 'no label', 'end': 'no label', 'altitudeMode': 'no label', 'tessellate': 'no label', 'extrude': 'no label', 'visibility': 'no label', 'drawOrder': 'no label', 'icon': 'no label', });
lyr_PAPELERASCANINAS_7.set('fieldLabels', {'qc_id': 'no label', 'name': 'no label', 'description': 'no label', 'timestamp': 'no label', 'begin': 'no label', 'end': 'no label', 'altitudemode': 'no label', 'tessellate': 'no label', 'extrude': 'no label', 'visibility': 'no label', 'draworder': 'no label', 'icon': 'no label', });
lyr_PAPELERASCANINAS_7.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});