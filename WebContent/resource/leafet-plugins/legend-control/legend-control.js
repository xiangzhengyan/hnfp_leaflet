LegendControl = L.Control.extend({
    options: {
        position: 'bootomleft' ,
        list:'legendMap'
    }, 
    
    onAdd: function (map) {
    	var d = L.DomUtil.create('div', 'legend-control');
        d.id="legend-control";
        
        var button = L.DomUtil.create('button', 'legend-button');
        button.innerHTML="图例";
        button.id = "legend-button";
        button.onclick=showlegend;
        
        var legendDiv = L.DomUtil.create('div','show-legend');
        legendDiv.id = "show-legend";
        d.appendChild(legendDiv);
        
        var list = this.options.list;
        var html="";
        for(var i in list){
        	html+="<div class='row-legend' onclick='showlegend();'><img src=\""+list[i]+"\" class='row-img'>";
        	html+="<span class='row-span'>"+i+"</span></div>";
        }
        legendDiv.innerHTML=html;
        
        d.appendChild(button);
        
        return d;
    }
});
function showlegend(event){
	$("#show-legend").toggle();
}
