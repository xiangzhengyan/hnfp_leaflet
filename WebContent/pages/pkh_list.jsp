<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
<title>Insert title here</title>
<link rel="stylesheet" href="../resource/bootstrap/bootstrap-3.3.4.css" />
<script src="../resource/jquery-2.2.0.min.js"></script>

<link rel="stylesheet" type="text/css" href="../resource/jquery-datatable/jquery.dataTables.css">
<script type="text/javascript" charset="utf8" src="../resource/jquery-datatable/jquery.dataTables.js"></script>

<script>
$(document).ready(function(){
    $('#myTable').DataTable({
    	"lengthMenu": [[10, 25, 50, -1], [5, 10, 20, "All"]]
    });
    
    $("#heatmap").on("click",function(){
        if($("#heatmap").attr("checked")=="checked"){
          window.parent.hideHeatmap();
          $("#heatmap").removeAttr("checked");
        }else{
          window.parent.showHeatmap();
          $("#heatmap").attr("checked","checked");
        }
      });
    
    $("#marker").on("click",function(){
        if($("#marker").attr("checked")=="checked"){
          window.parent.hideMarker();
          $("#marker").removeAttr("checked");
        }else{
          window.parent.showMarker();
          $("#marker").attr("checked","checked");
        }
      });
});

function showStatus(){
	window.parent.showPersonStatus(346234623456);
}
</script>
</head>
<body>
	<div style="">
		<div id="pkhTitle" style="font-size:16px;text-align:center"><%=request.getParameter("title") %>扶贫列表</div>
		<div style="padding-left:5px">
			<input id="heatmap" type="checkbox"/>
			<span style="padding-right:10px">展示热点图</span>
			<span style="padding-left:5px"><input id="marker" type="checkbox" checked="checked"/></span>
			<span style="padding-right:10px">展示扶贫对象位置</span>
		</div>
		<div>
			<table id="myTable" class="table table-bordered" style="height:100%;width:100%">
				<thead>
					<tr>
						<th>姓名</th>
						<th>性别</th>
						<th>学历</th>
						<th>工作状况</th>
						<th>健康情况</th>
					</tr>
				</thead>
				<tbody>
					<tr>
						<td><a href="javascript:;" onclick="showStatus()">董译平</a></td>
						<td>男</td>
						<td>初中</td>
						<td>务农</td>
						<td>慢性肝肾病</td>
					</tr>
					<tr>
						<td><a href="javascript:;" onclick="showStatus()">李子贤</a></td>
						<td>男</td>
						<td>初中</td>
						<td>在校生</td>
						<td>健康</td>
					</tr>
					<tr>
						<td><a href="javascript:;" onclick="showStatus()">胡应山</a></td>
						<td>男</td>
						<td>初中</td>
						<td>务农</td>
						<td>健康</td>
					</tr>
					<tr>
						<td><a href="javascript:;" onclick="showStatus()">吴少霞</a></td>
						<td>女</td>
						<td>初中</td>
						<td>务农</td>
						<td>健康</td>
					</tr>
					<tr>
						<td><a href="javascript:;" onclick="showStatus()">兰明仁</a></td>
						<td>男</td>
						<td>小学</td>
						<td>务农</td>
						<td>眼睛残疾</td>
					</tr>
				</tbody>
			</table>
		</div>
	</div>
</body>
</html>