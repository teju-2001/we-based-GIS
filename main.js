var myview= new ol.View({
    center:  [0,0],
    zoom: 4
  })

  var mylayer= new ol.layer.Tile({
    source: new ol.source.OSM()
    
  })

  var layer=[mylayer]

var map = new ol.Map({
    target: 'map',
    layers: layer,
    view: myview
  });
   //Basemaplayers
 var stamenwatercolor = new ol.layer.Tile({
    source: new ol.source.Stamen({
        layer: 'watercolor'
    }),
    visible: false,
    title: 'Stamen watercolor'
});

var stamenterrain = new ol.layer.Tile({
  source: new ol.source.Stamen({
      layer: 'terrain'
  }),
  visible: false,
  title: 'Stamen terrain'
});

var stamentoner = new ol.layer.Tile({
  source: new ol.source.Stamen({
      layer: 'toner'
  }),
  visible: false,
  title: 'Stamen toner'
});
const baselayergroup= new ol.layer.Group({
    layers:[stamenwatercolor, stamenterrain, stamentoner]
})
  
  map.addLayer(baselayergroup);
  //code for selecting the layers
  const baseLayerElements= document.querySelectorAll('.sidebar > input[type= radio]');
  for(baseLayerElement of baseLayerElements)// to run the code for each layer 
  {
    baseLayerElement.addEventListener('change',function(){
        let baseLayerElementVaule= this.value;
        baselayergroup.getLayers().forEach(function(element,index,array){
            let baseLayerTitle= element.get('title');
            element.setVisible(baseLayerTitle === baseLayerElementVaule );// this sets the value of layer to true in order to change it
        })
    })
  }
  var mygeojsonspatial= new ol.layer.Vector({
    title:"Spatial",
  source: new ol.source.Vector({
      format: new ol.format.GeoJSON(),
      
       url:'spatial.geojson'
       
  }),
  
});
map.addLayer(mygeojsonspatial);
var mygeojsonstate= new ol.layer.Vector({
    title:"States",
  source: new ol.source.Vector({
      format: new ol.format.GeoJSON(),
      
       url:'states.geojson'
       
  }),
  
});
map.addLayer(mygeojsonstate);
  var mygeojsoncity= new ol.layer.Vector({
      title:"Cities",
    source: new ol.source.Vector({
        format: new ol.format.GeoJSON(),
        
         url:'cities.geojson'
         
    }),
    
  });
  
  map.addLayer(mygeojsoncity);

 

  var mygeojsonroute= new ol.layer.Vector({
    title:"Routes",
  source: new ol.source.Vector({
      format: new ol.format.GeoJSON(),
      
       url:'routes.geojson'
       
  }),
  
});

map.addLayer(mygeojsonroute);
var layerSwitcher = new ol.control.LayerSwitcher({
    activationMode: 'click',
    startActive: false,
    groupSelectStyle: 'children'
});
map.addControl(layerSwitcher);
  
  
  
  