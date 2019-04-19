var wms_layers = [];
var lyr_Cartedespaysages2050_0 = new ol.layer.Image({
                            opacity: 1,
                            title: "Carte des paysages 2050",
                            
                            
                            source: new ol.source.ImageStatic({
                               url: "./layers/Cartedespaysages2050_0.png",
    attributions: '<a href=""></a>',
                                projection: 'EPSG:3857',
                                alwaysInRange: true,
                                imageExtent: [-134639.902892, 5739420.952212, -80746.064894, 5793005.369323]
                            })
                        });

lyr_Cartedespaysages2050_0.setVisible(true);
var layersList = [lyr_Cartedespaysages2050_0];
