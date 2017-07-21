L.TileLayer.ChinaProvider = L.TileLayer.extend({

    initialize: function(type, options) { // (type, Object)
        var providers = L.TileLayer.ChinaProvider.providers;

        var parts = type.split('.');

        var providerName = parts[0]; 
        var mapName = parts[1];
        var mapType = parts[2];

        var url = providers[providerName][mapName][mapType];
        options.subdomains =providers[providerName].Subdomains;
        options.errorTileUrl="/resource/img/error-img.gif";
        
        L.TileLayer.prototype.initialize.call(this,url,options);
    }
});

L.TileLayer.ChinaProvider.providers ={
    TianDiTu : {
        Normal: {
            Map: "http://t{s}.tianditu.cn/DataServer?T=vec_w&X={x}&Y={y}&L={z}",
            Annotion: "http://t{s}.tianditu.cn/DataServer?T=cva_w&X={x}&Y={y}&L={z}",
        },
        Satellite: {
            Map: "http://t{s}.tianditu.cn/DataServer?T=img_w&X={x}&Y={y}&L={z}",
            Annotion: "http://t{s}.tianditu.cn/DataServer?T=cia_w&X={x}&Y={y}&L={z}",
        },
        Terrain: {
            Map: "http://t{s}.tianditu.cn/DataServer?T=ter_w&X={x}&Y={y}&L={z}",
            Annotion: "http://t{s}.tianditu.cn/DataServer?T=cta_w&X={x}&Y={y}&L={z}",
        },
        

        DiBiao: {
        	ShuiTi: 	"http://glcdata.tianditu.com/lcr_w/wmts?SERVICE=WMTS&REQUEST=GetTile&VERSION=1.0.0&LAYER=lcr&STYLE=default&TILEMATRIXSET=w&FORMAT=tiles&TILECOL={x}&TILEROW={y}&TILEMATRIX={z}",
        	ShiDi: 		"http://glcdata.tianditu.com/lcw_w/wmts?SERVICE=WMTS&REQUEST=GetTile&VERSION=1.0.0&LAYER=lcw&STYLE=default&TILEMATRIXSET=w&FORMAT=tiles&TILECOL={x}&TILEROW={y}&TILEMATRIX={z}",
        	GengDi: 	"http://glcdata.tianditu.com/lcc_w/wmts?SERVICE=WMTS&REQUEST=GetTile&VERSION=1.0.0&LAYER=lcc&STYLE=default&TILEMATRIXSET=w&FORMAT=tiles&TILECOL={x}&TILEROW={y}&TILEMATRIX={z}",
        	RenZao: 	"http://glcdata.tianditu.com/lci_w/wmts?SERVICE=WMTS&REQUEST=GetTile&VERSION=1.0.0&LAYER=lci&STYLE=default&TILEMATRIXSET=w&FORMAT=tiles&TILECOL={x}&TILEROW={y}&TILEMATRIX={z}",
        	SenLin: 	"http://glcdata.tianditu.com/lcf_w/wmts?SERVICE=WMTS&REQUEST=GetTile&VERSION=1.0.0&LAYER=lcf&STYLE=default&TILEMATRIXSET=w&FORMAT=tiles&TILECOL={x}&TILEROW={y}&TILEMATRIX={z}",
        	CaoDi: 		"http://glcdata.tianditu.com/lcg_w/wmts?SERVICE=WMTS&REQUEST=GetTile&VERSION=1.0.0&LAYER=lcg&STYLE=default&TILEMATRIXSET=w&FORMAT=tiles&TILECOL={x}&TILEROW={y}&TILEMATRIX={z}",
        	GuanMuDi: 	"http://glcdata.tianditu.com/lcs_w/wmts?SERVICE=WMTS&REQUEST=GetTile&VERSION=1.0.0&LAYER=lcs&STYLE=default&TILEMATRIXSET=w&FORMAT=tiles&TILECOL={x}&TILEROW={y}&TILEMATRIX={z}",
        },
        GengDi: {//耕地
        	
        }, 
        
        Subdomains:['0','1','2','3','4','5','6','7']
    },


    
    MapABC:{
        Normal:{
            Map:'http://emap{s}.mapabc.com/mapabc/maptile?&x={x}&y={y}&z={z}'
        },
        Subdomains:["0","1", "2", "3"]
    },
    
    GaoDe:{
        Normal:{
            Map:'http://webrd0{s}.is.autonavi.com/appmaptile?lang=zh_cn&size=1&scale=1&style=8&x={x}&y={y}&z={z}',
        },
        Satellite:{
            Map:'http://webst0{s}.is.autonavi.com/appmaptile?style=6&x={x}&y={y}&z={z}',
            Annotion:'http://webst0{s}.is.autonavi.com/appmaptile?style=8&x={x}&y={y}&z={z}'
        },
        Subdomains:["1","2","3","4"]
    }
};

L.tileLayer.chinaProvider= function(type, options) {
    return new L.TileLayer.ChinaProvider(type, options);
};