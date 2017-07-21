<%@ page language="java" contentType="text/html; charset=utf-8" pageEncoding="utf-8"%>

<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=utf-8">
<title>海南扶贫项目Demo</title>

<link rel="stylesheet" href="../resource/leafet-1.0-beta2/leaflet.css" />
<script src="../resource/leafet-1.0-beta2/leaflet-src.js"></script>


<!-- Load Leaflet from CDN-->
<!-- 
  <link rel="stylesheet" href="https://unpkg.com/leaflet@1.0.3/dist/leaflet.css" />
  <script src="https://unpkg.com/leaflet@1.0.3/dist/leaflet-src.js"></script>
  <script src="https://unpkg.com/esri-leaflet@2.0.8"></script>
 -->

<script src="../resource/leafet-plugins/ChineseTmsProviders/leaflet.ChineseTmsProviders.js"></script>

<script src="../resource/leafet-plugins/Leaflet.label/leaflet.label-xzy.js"></script>
<link rel="stylesheet" href="../resource/leafet-plugins/Leaflet.label/leaflet.label-xzy.css"/>

<script src="../resource/leafet-plugins/leaflet.zoomhome/leaflet.zoomhome.js"></script>
<link rel="stylesheet" href="../resource/leafet-plugins/leaflet.zoomhome/leaflet.zoomhome.css"/>

<link rel="stylesheet" href="../resource/leafet-plugins/Leaflet-MiniMap/dist/Control.MiniMap.min.css" />
<script src="../resource/leafet-plugins\Leaflet-MiniMap\dist\Control.MiniMap.min.js"></script>

<script src="../resource/leafet-plugins/legend-control/legend-control.js"></script>
<link rel="stylesheet" href="../resource/leafet-plugins/legend-control/legend-control.css" />

<script src="../resource/leafet-plugins/leaflet-heatmap/heatmap.min.js"></script>
<script src="../resource/leafet-plugins/leaflet-heatmap/leaflet-heatmap.js"></script>

<script src="../resource/jquery-2.2.0.min.js"></script>

<link rel="stylesheet" href="../resource/font-awesomer-4.4.0/css/font-awesome.min.css"/>

<link rel="stylesheet" href="../resource/bootstrap/bootstrap-3.3.4.css"/>

<link rel="stylesheet" href="../resource/bootstrap-tree/bootstrap-treeview.css"/>
<script src="../resource/bootstrap-tree/bootstrap-treeview.js"></script>

<link rel="stylesheet" href="../resource/map.css"/>

<link rel="stylesheet" href="../resource/jquery-ui/jquery-ui-1.12.1.min.css"/>
<script src="../resource/jquery-ui/jquery-ui-1.12.1.min.js"></script>

 <script src="../resource/leafet-plugins/Leaflet-markercluster/src/leaflet.markercluster-src.js"></script>
<link rel="stylesheet" href="../resource/leafet-plugins/Leaflet-markercluster/dist/MarkerCluster.css" />
<link rel="stylesheet" href="../resource/leafet-plugins/Leaflet-markercluster/dist/MarkerCluster.Default.css" />

 <script src="../resource/leafet-plugins/leaflet-heatmap/heatmap.min.js"></script>
 <script src="../resource/leafet-plugins/leaflet-heatmap/leaflet-heatmap.js"></script>
<script src="../resource/points.js"></script>
<script src="../resource/people.js"></script>
<script src="../resource/geojson/haikou.js"></script>
<script src="../resource/geojson/sanya.js"></script>
<script src="../resource/geojson/sansha.js"></script>
<script src="../resource/geojson/danzhou.js"></script>
<script src="../resource/geojson/bslzzzx.js"></script>
<script src="../resource/geojson/btlzmzzzx.js"></script>
<script src="../resource/geojson/cjlzzzx.js"></script>
<script src="../resource/geojson/cmx.js"></script>
<script src="../resource/geojson/dax.js"></script>
<script src="../resource/geojson/df.js"></script>
<script src="../resource/geojson/hn.js"></script>
<script src="../resource/geojson/ldlzzzx.js"></script>
<script src="../resource/geojson/lgx.js"></script>
<script src="../resource/geojson/lslzzzx.js"></script>
<script src="../resource/geojson/qh.js"></script>
<script src="../resource/geojson/qzlzmzzzx.js"></script>
<script src="../resource/geojson/tcx.js"></script>
<script src="../resource/geojson/wc.js"></script>
<script src="../resource/geojson/wn.js"></script>
<script src="../resource/geojson/wzs.js"></script>
</head>
<body>
	<div id="map" style="height:100%; width:100%"></div>
	<div id="fphDialog" title="扶贫信息"></div>
	<div id="baobiaoDialog" title="数据报表"></div>
<script src="../resource/map.js"></script>
<script src="../resource/xzqhTree.js"></script>
</body>
</html>