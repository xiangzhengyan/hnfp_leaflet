<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
<title>Insert title here</title>

<link rel="stylesheet" href="../resource/bootstrap/bootstrap-3.3.4.css" />
<link rel="stylesheet" href="../resource/highcharts-5.0.9/highcharts.css" />
<script src="../resource/highcharts-5.0.9/highcharts.js"></script>
</head>

<body>
<div id="container" style="height:300px;width:600px;"></div>
	
<script>
Highcharts.chart('container', {
    chart: {
        type: 'column'
    },
    title: {
        text: '致贫原因排行'
    },
    xAxis: {
        categories: [
            '缺技术',
            '缺资金',
            '因病',
            '缺劳动力',
            '自身动力不足'
        ],
        crosshair: true
    },
    yAxis: {
        min: 0,
        title: {
            text: '数量(人)'
        }
    },
    legend: {
        enabled:false
     },
     credits: {
         enabled: false
     },
    tooltip: {
        headerFormat: '<span style="font-size:10px">{point.key}</span><table>',
        pointFormat: '<tr><td style="color:{series.color};padding:0">{series.name}: </td>' +
            '<td style="padding:0"><b>{point.y:1f} 人</b></td></tr>',
        footerFormat: '</table>',
        shared: true,
        useHTML: true
    },
    plotOptions: {
        column: {
            pointPadding: 0.2,
            borderWidth: 0
        }
    },
    series: [{
        name: '数量',
        data: [1026, 832, 754, 621, 231]
    }]
});
</script>

</body>
</html>