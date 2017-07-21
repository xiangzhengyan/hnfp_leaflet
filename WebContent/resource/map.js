var layerMap = {};
var dataMap = {};
var heatmapLayer={};
var clusterGroup={};
TLControl = L.Control.extend({
    options: {
        position: 'bottomleft'
    },

    onAdd: function (map) {
        var d = L.DomUtil.create('div', 'tl-control');
        
    d.innerHTML = "<img style='opacity: 0.8' src='../resource/img/tlbig.png'/>";
    return d;
    }
    
});

TreeControl = L.Control.extend({
    options: {
        position: 'topleft'
    },

    onAdd: function (map) {
        var d = L.DomUtil.create('div', 'pkh-control');
        d.id="pkh-control";
        var html="";
		html+="<div><div id='tree' class='pre-scrollable' style='width:280px;height:400px'></div></div>";
		d.innerHTML = html;
        return d;
});

PKHControl = L.Control.extend({
    options: {
        position: 'topright'
    },

    onAdd: function (map) {
        var d = L.DomUtil.create('div', 'pkh-control');
        d.id="pkh-control";
        var html="";
		html+="<div><iframe id='pkhTable' style='height:430px;width:630px' src='pkh_list.jsp?title=陵水黎族自治县'></iframe></div>",
		d.innerHTML = html;
        return d;
    },
});

ReportControl = L.Control.extend({
    options: {
        position: 'topright'
    },

    onAdd: function (map) {
        var d = L.DomUtil.create('div', 'pkh-control');
        d.id="report-control";
        var html="";
		html+="<div><iframe id='reportChart' style='height:310px;width:630px' src='../pages/report.jsp'></iframe></div>";
		d.innerHTML = html;
        return d;
    },
});

$(function(){
	buildMap();
	initEvent();
});

function buildMap(){
	
	var osmUrl = "http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png";
	var osmLayer = L.tileLayer(osmUrl, {id: 'osm'});
	var terraina = L.tileLayer.chinaProvider('TianDiTu.Terrain.Annotion',{});
	var terrainm = L.tileLayer.chinaProvider('TianDiTu.Terrain.Map',{});
	var terrainLayer = L.layerGroup([terrainm,terraina]);
	var imgm = L.tileLayer.chinaProvider('TianDiTu.Satellite.Map',{});
	var imga = L.tileLayer.chinaProvider('TianDiTu.Satellite.Annotion',{});
	var imageLayer = L.layerGroup([imgm,imga]);
	var baseLayers = {"地　图": osmLayer,"地　形":terrainLayer,"卫　星":imageLayer};

	map = L.map('map',{
		maxZoom:18,
		minZoom:3,
		center:new L.LatLng(19.1644, 109.7846),
		zoom:9,
		zoomControl:false,
		attributionControl:false,
		layers:[osmLayer]
	}); 
	
//	L.esri.tiledMapLayer({
//		  url: 'http://192.168.2.110:6080/arcgis/rest/services/cxgis/sl_06/MapServer',
//		  maxZoom: 15
//		}).addTo(map);
	

	map.addControl(new PKHControl());
	map.addControl(new ReportControl());
	map.addControl(new TreeControl());
	
	firstLoad();
	
	map.setView([19.2169, 110.0744], 9);
    var first = new L.LatLng(18.752776,109.879526);
    var second = new L.LatLng(18.449954, 110.085489);
    var bounds = new L.LatLngBounds([first, second]);
    map.fitBounds(bounds);
	
	var extLayers= {
		"<span class='dibiao-layer-label' style='background-color:#0000ff;'>水　体</span>":	L.tileLayer.chinaProvider('TianDiTu.DiBiao.ShuiTi',{minZoom:0,maxZoom:10,opacity:0.8}),
		"<span class='dibiao-layer-label' style='background-color:#0064ff;'>湿　地</span>":	L.tileLayer.chinaProvider('TianDiTu.DiBiao.ShiDi',{minZoom:0,maxZoom:10,opacity:0.8}),
		"<span class='dibiao-layer-label' style='background-color:#ffa0ff;'>耕　地</span>":	L.tileLayer.chinaProvider('TianDiTu.DiBiao.GengDi',{minZoom:0,maxZoom:10,opacity:0.8}),
		"<span class='dibiao-layer-label' style='background-color:#006400;'>森　林</span>":	L.tileLayer.chinaProvider('TianDiTu.DiBiao.SenLin',{minZoom:0,maxZoom:10,opacity:0.8}),
		"<span class='dibiao-layer-label' style='background-color:#64ff00;'>草　地</span>":	L.tileLayer.chinaProvider('TianDiTu.DiBiao.CaoDi',{minZoom:0,maxZoom:10,opacity:0.8}),
		"<span class='dibiao-layer-label' style='background-color:#00ff78;'>灌木地</span>":	L.tileLayer.chinaProvider('TianDiTu.DiBiao.GuanMuDi',{minZoom:0,maxZoom:10,opacity:0.8}),
		"<span class='dibiao-layer-label' style='background-color:#ff0000;'>人造地</span>":	L.tileLayer.chinaProvider('TianDiTu.DiBiao.RenZao',{minZoom:0,maxZoom:10,opacity:0.8}),
	};

	L.control.layers(baseLayers,extLayers,{collapsed:true}).addTo(map); 
	L.control.scale({imperial:false}).addTo(map);

	map.addControl(new TLControl());
	window.zoomHome = L.Control.zoomHome({zoomInTitle:'放大', zoomOutTitle:'缩小',zoomHomeTitle:'起始',position: 'topleft'}).addTo(map);
	var miniMap = new L.Control.MiniMap(new L.TileLayer(osmUrl), { toggleDisplay: true,strings: {hideText: '', showText: '鹰眼'}, }).addTo(map);
	miniMap._toggleDisplayButtonClicked();
	
//	var legendMap={"污水厂":"img/marker-icon.png","污水厂（数据错误）":"img/marker-warn-icon.png","污水厂（未部署）":"img/marker-disable-icon.png"};
//	var legend = new LegendControl({list:legendMap,position:'bottomleft'});
//	map.addControl(legend);
	
	
	var heatdata=[];
	clusterGroup=L.markerClusterGroup();
	
	for(var i=0;i<points.length;i++){
		var p = points[i]
		var marker =L.marker(p/**,{icon:icon}**/);
//		marker.on('click',function(e){
//		});
		debugger;
		var pe = people[Math.round(Math.random()*98)];
		if(pe){
			marker.bindPopup("姓名："+pe.name+"<br/>"+"身份证："+pe.id+"<br/>性别："+pe.sex+"<br/>年龄："+pe.age+"<br/>工作状况："+pe.job);
		}
		clusterGroup.addLayer(marker);
		
		//热点图数据
		if(i%6==0){ 
			heatdata[heatdata.length] ={lat: p[0], lng:p[1], count: 3};
		}
		
	}
	map.addLayer(clusterGroup);
	
	//热点图
	var testData = {
			  max: 8,
			  data:heatdata
			};

	var cfg = {
			  // radius should be small ONLY if scaleRadius is true (or small radius is intended)
			  // if scaleRadius is false it will be the constant radius used in pixels
			  "radius": 0.015,
			  "maxOpacity": .8, 
			  // scales the radius based on map zoom
			  "scaleRadius": true, 
			  // if set to false the heatmap uses the global maximum for colorization
			  // if activated: uses the data maximum within the current map boundaries 
			  //   (there will always be a red spot with useLocalExtremas true)
			  "useLocalExtrema": true,
			  // which field name in your data represents the latitude - default "lat"
			  latField: 'lat',
			  // which field name in your data represents the longitude - default "lng"
			  lngField: 'lng',
			  // which field name in your data represents the data value - default "value"
			  valueField: 'count'
			};
	
	heatmapLayer = new HeatmapOverlay(cfg);
	map.addLayer(heatmapLayer);
	heatmapLayer.setData(testData);
	map.removeLayer(heatmapLayer);
}

function firstLoad(){
	
	for(var i=0;i< window.data.nodes.length;i++){
		var data =  window.data.nodes[i];
		
		var unitCode=data.id;
		var num=data.num;
		var geo;
		var color;
		
		
		if(unitCode==460100){
		geo=haikou_geo;
				}else if(unitCode==460200){
		geo=sanya_geo;
			}else if(unitCode==460300){
		geo=sansha_geo;
			}else if(unitCode==460400){
		geo=danzhou_geo;
			}else if(unitCode==469001){
		geo=wzs_geo;
			}else if(unitCode==469002){
		geo=qh_geo;
			}else if(unitCode==469005){
		geo=wc_geo;
			}else if(unitCode==469006){
		geo=wn_geo;
			}else if(unitCode==469007){
		geo=df_geo;
			}else if(unitCode==469021){
		geo=dax_geo;
			}else if(unitCode==469022){
		geo=tcx_geo;
			}else if(unitCode==469023){
		geo=cmx_geo;
			}else if(unitCode==469024){
		geo=lgx_geo;
			}else if(unitCode==469025){
		geo=bslzzzx_geo;
			}else if(unitCode==469026){
		geo=cjlzzzx_geo;
			}else if(unitCode==469027){
		geo=ldlzzzx_geo;
			}else if(unitCode==469028){
		geo=lslzzzx_geo;
			}else if(unitCode==469029){
		geo=btlzmzzzx_geo;
			}else if(unitCode==469030){
		geo=qzlzmzzzx_geo;
			}else{
		continue;
			}

		if(num==null){
			color="#FFFF00";
		}else if(num<5000){
			color="#FFFF00";
		}else if(num<10000){
			color="#FFE100";
		}else if(num<20000){
			color="#FFC300";
		}else if(num<30000){
			color="#FFA600";
		}else if(num<50000){
			color="#FF8800";
		}else{
			color="#FF6600";
		}
		qhPolygon = L.geoJson(geo, {
			className:"qh-polygon",
		    style: {
		    	"color": "white",
		    	"fillColor": color,
		        "weight": 2,
		        "opacity": 1,
		        "fillOpacity": 0.5
		    }
		}).bindPopup(function (layer) {
		    var name = layer.feature.properties.name;
//		    var num = layerMap[name].data.num;
//		    if(!num){
//		    	num=0;
//		    }
		     return name;
		  });
		qhPolygon.addTo(map);
		
		layerMap[data.text] = qhPolygon;
		qhPolygon.data = data;
	}
	
}
	
function position(data){
	
    var first = new L.LatLng(data.p1Lat,data.p1Lon);
    var second = new L.LatLng(data.p2Lat,data.p2Lon);
    var bounds = new L.LatLngBounds([first, second]);
    map.fitBounds(bounds);
    /*
    var name = data.text;
    var num = data.num;
    if(!num){
    	num=0;
    }
    var layer = layerMap[data.text];
    var popup = L.popup()
    .setLatLng(bounds.getCenter())
    .setContent(name+"<br/>贫困人口："+num)
    .openOn(map);
    */

}

function initEvent(){
	map.on('baselayerchange', function(e) {
	    if(e.name=="地图"){
	    	ynPolygon.setStyle({"fillOpacity": 0.05,"weight": 0});
	    }else if(e.name=="地形"){
	    	ynPolygon.setStyle({"fillOpacity": 0,"weight": 0,"color": "black"});
	    }else if(e.name=="卫星"){
	    	ynPolygon.setStyle({"fillOpacity": 0,"weight": 0,"color": "orange"});
	    }
	});
	
}

//fix：通过代码改变地图大小位置时，label位置没有跟随变换的问题
function fixLabelPos(){
	$.each(markerMap, function(plantId, marker) {
		marker.label.setLatLng(marker.getLatLng());
	});
}

function showPersonStatus(id){
	
}

function refresh(data){
	$("#pkhTable").attr("src","../pages/pkh_list.jsp?title="+data.text);
	$("#reportChart").attr("src","../pages/report.jsp");
	position(data);
	
}

function showHeatmap(){
  map.addLayer(heatmapLayer);
}

function hideHeatmap(){
  map.removeLayer(heatmapLayer);
}

function showMarker(){
	map.addLayer(clusterGroup);
}

function hideMarker(){
	map.removeLayer(clusterGroup);
}

setTimeout(function(){
  resizeHeight(); 
},1);

function resizeHeight() {
  $("#tree")[0].style.height ="400px";// (window.parent.window.document.body.scrollHeight)+"px";
}