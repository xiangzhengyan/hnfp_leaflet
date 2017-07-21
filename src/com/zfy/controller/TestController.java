package com.zfy.controller;

import java.util.ArrayList;
import java.util.List;

import javax.servlet.http.HttpServletRequest;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;

import javafx.scene.shape.Arc;

@Controller
@RequestMapping("/test/*")
public class TestController{
	
	@RequestMapping("/map.do")
	public String showMap(HttpServletRequest request){
		
		return "map";
	}
	
	@RequestMapping("/test.do")
	public String test(HttpServletRequest request){
		return "hello";
	}
	
	@RequestMapping("/getPkh.do")
	public String getPkh(HttpServletRequest request,String unitCode){
		
		List<Object> list=new ArrayList<Object>();
		request.setAttribute("list", list);
		request.setAttribute("unitCode", unitCode);
		return "pkh_list";
	}
	
	@RequestMapping("/getReport.do")
	public String getReport(HttpServletRequest request,String unitCode){
		
		List<Object> list=new ArrayList<Object>();
		request.setAttribute("list", list);
		request.setAttribute("unitCode", unitCode);
		return "report";
	}
}
