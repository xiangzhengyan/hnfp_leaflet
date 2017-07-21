window.data=   {text:"海南省",id:"460000",p1Lat:"20.1797",p1Lon:"108.3911",p2Lat:"18.0049",p2Lon:"111.2366",
        nodes:[{text:"陵水黎族自治县",id:"469028",p1Lat:"18.8257",p1Lon:"109.7026",p2Lat:"18.361",p2Lon:"110.2245",
       	 nodes:[
				{text:"椰林镇",id:"469028100"},
				{text:"光坡镇",id:"469028101"},
				{text:"三才镇",id:"469028102"},
				{text:"英州镇",id:"469028103"},
				{text:"隆广镇",id:"469028104"},
				{text:"文罗镇",id:"469028105"},
				{text:"本号镇",id:"469028106"},
				{text:"新村镇",id:"469028107"},
				{text:"黎安镇",id:"469028108"},
				{text:"提蒙乡",id:"469028200"},
				{text:"群英乡",id:"469028201"}
       	        
       	        ]
       	 
        },{text:"海口市",id:"460100",p1Lat:"20.1127",p1Lon:"110.0954",p2Lat:"19.5184",p2Lon:"110.7367",num:""
       	 	// nodes:[{text:"市辖区",id:"460101"},{text:"秀英区",id:"460105"},{text:"龙华区",id:"460106"},{text:"琼山区",id:"460107"},{text:"美兰区",id:"460108"}]
        		},
               {text:"三亚市",id:"460200",p1Lat:"18.6423",p1Lon:"108.9336",p2Lat:"18.1772",p2Lon:"109.8317",
        		// nodes:[{text:"市辖区",id:"460201"},{text:"海棠区",id:"460202"},{text:"吉阳区",id:"460203"},{text:"天涯区",id:"460204"},{text:"崖州区",id:"460205"}]
               },
               {text:"三沙市",id:"460300",p1Lat:"12.7689",p1Lon:"109.0063",p2Lat:"6.6428",p2Lon:"117.4438"},
               {text:"儋州市",id:"460400",p1Lat:"19.9101",p1Lon:"108.869",p2Lat:"19.1672",p2Lon:"109.7603"}, 
               {text:"五指山市",id:"469001",p1Lat:"19.0271",p1Lon:"109.2975",p2Lat:"18.6215",p2Lon:"109.7314",num:"14644"},
               {text:"琼海市",id:"469002",p1Lat:"19.477",p1Lon:"110.1064",p2Lat:"18.9764",p2Lon:"110.6927",num:"15405"},
               {text:"文昌市",id:"469005",p1Lat:"20.1127",p1Lon:"110.4071",p2Lat:"19.3604",p2Lon:"111.0608",num:"19044"},
               {text:"万宁市",id:"469006",p1Lat:"19.1231",p1Lon:"109.9869",p2Lat:"18.5799",p2Lon:"110.5678",num:"20000"},
               {text:"东方市",id:"469007",p1Lat:"19.306",p1Lon:"108.5641",p2Lat:"18.7165",p2Lon:"109.1519",num:"31400"},
               {text:"定安县",id:"469021",p1Lat:"19.7331",p1Lon:"110.0748",p2Lat:"19.2243",p2Lon:"110.5664"},
               {text:"屯昌县",id:"469022",p1Lat:"19.6038",p1Lon:"109.7891",p2Lat:"19.1218",p2Lon:"110.2931",num:"8136"},
               {text:"澄迈县",id:"469023",p1Lat:"20.0301",p1Lon:"109.6902",p2Lat:"19.3824",p2Lon:"110.289",num:"7000"},
               {text:"临高县",id:"469024",p1Lat:"20.0198",p1Lon:"109.5021",p2Lat:"19.5624",p2Lon:"109.9127",num:"12452"},
               {text:"白沙黎族自治县",id:"469025",p1Lat:"19.5468",p1Lon:"108.972",p2Lat:"18.9388",p2Lon:"109.6889",num:"15700"},
               {text:"昌江黎族自治县",id:"469026",p1Lat:"19.5559",p1Lon:"108.6424",p2Lat:"18.8816",p2Lon:"109.3126",num:"14000"},
               {text:"乐东黎族自治县",id:"469027",p1Lat:"18.9972",p1Lon:"108.6452",p2Lat:"18.3467",p2Lon:"109.4142",num:"31108"},
               {text:"保亭黎族苗族自治县",id:"469029",p1Lat:"18.853",p1Lon:"109.3991",p2Lat:"18.3493",p2Lon:"109.8564",num:"11406"},
               {text:"琼中黎族苗族自治县",id:"469030",p1Lat:"19.4031",p1Lon:"109.4952",p2Lat:"18.7165",p2Lon:"110.186",num:"11700"}
              ]
       };

$(function(){
	var tree = [window.data
	         
	            ];
	$("#tree").treeview({
		data:tree,
		levels: 2,
		onNodeSelected:function(event,data){
			refresh(data);
		}
	});
});