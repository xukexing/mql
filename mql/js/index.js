var arr=["Friends","Family","Officemates"];
var i=0;//用作arr[i]下标记录是那个单词
var j=0;//用j作为slice截取单词字母的下标
var k=arr[i].length;//取第一个单词长度作为开始
setInterval(function(){
	if(j<arr[i].length-1){//如果不是截到当前单词最后一个字母，则用slice(j,j+1)压入
		$(".words").append($("<span>"+arr[i].slice(j,j+1)+"</span>"));
		j++;
	}
	else if(j==arr[i].length-1){//当前单词最后一个字母slice(j)压入，说明该单词一级展示完全，然后进行消失
		$(".words").append($("<span>"+arr[i].slice(j)+"</span>"));
		j=101;//给j赋值，只要大于所有单词长度就行，用来进入remove（）消失字母
	}else if(j==101){//101 和102 103 104 为了下划线的闪烁
		j=102;
	}else if(j==102){
		j=103;
	}else if(j==103){
		$(".jumbotron>h1>b").attr("class","");//单词显示完，下划线长度为0
		j=104;
	}else if(j==104){
		$(".jumbotron>h1>b").attr("class","active");//单词消失之前，下划线显示
		j=100;
	}
	else if(j==100){//消失字母，remov()每次移出最后一个，然后k--；
		k--;
		if(k>=0){//如果当前单词还没消失完，则移出
			$(".words").children().last().remove();
		}else if(k<0){//消失最后一个字母并i+1；选中第二个单词，同时将j=0；
			j=0;
			i++;
			if(i==arr.length){//如果所有单词都展示消失了一次，则将i=0；重新开始
				i=0;
			}
			k=arr[i].length;//k赋值为下一个单词长度
		}
	}
},200);

//滚动监听
$(window).scroll(function(){
	var h=$(window).scrollTop();
	var view_h=window.innerHeight*1;
	var max_h=parseInt($(".max").css("height"))*1;
	var aboutUs_h=$(".about_us").offset().top*1;
	var ourMenu_h=$(".our_menu").offset().top*1;
	var ourTeam_h=$(".our_team").offset().top*1;
	var ourGallery_h=$(".our_gallery").offset().top*1;
	var ourBlog_h=$(".our_blog").offset().top*1;
	var ourPricing_h=$(".our_pricing").offset().top*1;
	var reservations_h=$(".reservations").offset().top*1;
	var Newsletter_h=$(".Newsletter").offset().top*1;
	if(h>96){
		$(".navbar").attr("class","navbar navbar-inverse navbar-fixed-top animated bounceInDown");
		$(".navbar").css("position","fixed");
		if(h>96&& h<max_h-100){
			$("#d1>ul>li>a").attr("class","");//清空导航条所有选中
			$("#d1>ul>li>a:eq(0)").attr("class","active");		
			$(".img").css("opacity","1");
		}else if(h>aboutUs_h-100&&h<ourMenu_h-view_h){		
			$("#d1>ul>li>a").attr("class","");//清空导航条所有选中	
			$("#d1>ul>li>a:eq(1)").attr("class","active");
		}else if(h>ourMenu_h-view_h+150&&h<ourMenu_h){
			$(".our_menu .menu_titl").css("opacity","0");
			$(".our_menu .menu_titl").css("opacity","1");
		}else if(h>ourMenu_h-500&&h<ourTeam_h-300){
			$(".our_menu .menu_titl").css("opacity","0");
			$(".our_menu .menu_titl").css("opacity","1");
			$("#d1>ul>li>a").attr("class","");//清空导航条所有选中	
			$("#d1>ul>li>a:eq(2)").attr("class","active");
		}else if(h>ourTeam_h-300&&h<ourGallery_h-300){
			$(".title").css("opacity","0");
			$(".title").css("opacity","1");
			$("#d1>ul>li>a").attr("class","");//清空导航条所有选中	
			$("#d1>ul>li>a:eq(3)").attr("class","active");
		}else if(h>ourGallery_h-300&&h<ourBlog_h-300){
			$(".menu_titl").css("opacity","0");
			$(".menu_titl").css("opacity","1");
			$("#d1>ul>li>a").attr("class","");//清空导航条所有选中	
			$("#d1>ul>li>a:eq(4)").attr("class","active");
		}else if(h>ourBlog_h-300&&h<ourPricing_h-300){
			$(".title").css("opacity","0");
			$(".title").css("opacity","1");
			$(".blogs").css("opacity","1");
			$("#d1>ul>li>a").attr("class","");//清空导航条所有选中	
			$("#d1>ul>li>a:eq(5)").attr("class","active");
		}else if(h>ourPricing_h-300&&h<reservations_h-300){
			$(".titl").css("opacity","0");
			$(".titl").css("opacity","1");
			$("#d1>ul>li>a").attr("class","");//清空导航条所有选中	
			$("#d1>ul>li>a:eq(6)").attr("class","active");
		}else if(h>reservations_h-300&h<Newsletter_h-300){
			$(".reservations_titl").css("opacity","0");
			$(".reservations_titl").css("opacity","1");
			$("#d1>ul>li>a").attr("class","");//清空导航条所有选中	
			$("#d1>ul>li>a:eq(7)").attr("class","active");
		}else if(h>Newsletter_h-300){
			$(".title").css("opacity","0");
			$(".title").css("opacity","1");
			$("#d1>ul>li>a").attr("class","");//清空导航条所有选中	
			$("#d1>ul>li>a:eq(8)").attr("class","active");
		}
		
	}else{
		$("#d1>ul>li>a").attr("class","");//清空导航条所有选中
		$("#d1>ul>li>a:eq(0)").attr("class","active");
		$(".navbar").css("position","relative");
		$(".navbar").attr("class","navbar");
		$(".img").css("opacity","0");
	}
});
//添加导航条active X?调用不起作用
	function add_lis_active(i){
		$("#d1>ul>li>a").attr("class","");//清空导航条所有选中
		$("#d1>ul>li>a:eq(i)").attr("class","active");//添加当前导航条active
	}
//点击巨幕上按钮去about us
$(".go_about_us").click(function(){
	$("html,body").animate({ scrollTop: parseInt($(".max").css("height"))-96}, 800);
});

//about us轮播
var $arr=["images/special-menu-3.jpg","images/special-menu-1.jpg","images/special-menu-2.jpg"];
var x=0;
function anim_l(){//左移一次
	$(".carousel_img").append($(`<img class='r_img' src='${$arr[x]}'>`));
	$(".carousel_img img:nth-of-type(1)").animate({
		"left":"-365px",
	},1000,function(){
		$(this).remove();
	});
	$(".carousel_img img:nth-of-type(2)").animate({
		"left":"0px"
	},1000);
	$(".carousel_img img:nth-of-type(3)").animate({
		"left":"365px"
	},1000);
	$(".carousel_img img:nth-of-type(4)").animate({
		"left":"730px"
	},1000);
	$(".carousel>ul>li").eq(x).siblings().attr("class","");
	$(".carousel>ul>li").eq(x).attr("class","active");
}
function anim_l_l(){//左移两次
	$(".carousel_img").append($(`<img class='r_img' src='${$arr[1]}'>`));
	$(".carousel_img").append($(`<img class='r_img' src='${$arr[2]}'>`));
	$(".carousel_img img:nth-of-type(1)").animate({
		"left":"-730px",
	},500,function(){
		$(this).remove();
	});
	$(".carousel_img img:nth-of-type(2)").animate({
		"left":"-365px"
	},500,function(){
		$(this).remove();
	});
	$(".carousel_img img:nth-of-type(3)").animate({
		"left":"0px"
	},500);
	$(".carousel_img img:nth-of-type(4)").animate({
		"left":"365px"
	},500);
	$(".carousel_img img:nth-of-type(5)").animate({
		"left":"730px"
	},500);
	$(".carousel>ul>li").eq(x).siblings().attr("class","");
	$(".carousel>ul>li").eq(x).attr("class","active");
}
function anim_r(){//右移一次
	$(".carousel_img").append($(`<img class='l_img' src='${$arr[2]}'>`));
	$(".carousel_img img:nth-of-type(1)").animate({
		"left":"365px",
	},1000);
	$(".carousel_img img:nth-of-type(2)").animate({
		"left":"730px"
	},1000);
	$(".carousel_img img:nth-of-type(3)").animate({
		"left":"1095px"
	},1000,function(){
		$(this).remove();
	});
	$(".carousel_img img:nth-of-type(4)").animate({
		"left":"0px"
	},1000);
	$(".carousel>ul>li").eq(x).siblings().attr("class","");
	$(".carousel>ul>li").eq(x).attr("class","active");
}
function anim_r_r(){//右移两次
	$(".carousel_img").append($(`<img class='l_img' src='${$arr[2]}'>`));
	$(".carousel_img").append($(`<img class='l_img' src='${$arr[1]}'>`));
	$(".carousel_img img:nth-of-type(1)").animate({
		"left":"730px",
	},500);
	$(".carousel_img img:nth-of-type(2)").animate({
		"left":"1095px"
	},500,function(){
		$(this).remove();
	});
	$(".carousel_img img:nth-of-type(3)").animate({
		"left":"1095px"
	},500,function(){
		$(this).remove();
	});
	$(".carousel_img img:nth-of-type(4)").animate({
		"left":"365px"
	},500);
	$(".carousel_img img:nth-of-type(5)").animate({
		"left":"0px"
	},500);
	$(".carousel>ul>li").eq(x).siblings().attr("class","");
	$(".carousel>ul>li").eq(x).attr("class","active");
}
function trans_carousel(){
	x++;
	if(x==3){
		x=0;
	}
	anim_l();
}
timer=setInterval(function(){
	trans_carousel();
},2000);
$(".carousel").mouseover(function(){
	clearInterval(timer);
	timer=null;
});
$(".carousel").mouseout(function(){
	timer=setInterval(function(){
		trans_carousel();
	},2000);
});
$(".carousel>ul>li").click(function(){
	var zdy=$(this).attr("zdy");
	if(!$(".carousel_img img").is(":animated")){
		if(zdy-x==1){	
			x=zdy;
			anim_l();
		}else if(zdy-x==2){	
			x=zdy;
			anim_l_l();	
		}else if(zdy-x==-1){
			x=zdy;
			anim_r();
		}else if(zdy-x==-2){
			x=zdy;
			anim_r_r();
		}
	}
});

//our menu轮播效果
$(".menu_content_sel").click(function(){
	var zdy=$(this).attr("zdy");
	$(this).attr("class","menu_content_sel col-lg-3 col-xs-4 text-center active");
	$(this).siblings().attr("class","menu_content_sel col-lg-3 col-xs-4 text-center");
	for(var i=0;i<$(".menu_content_opts").length;i++){//匹配含有active的选项
		if($($(".menu_content_opts")[i]).attr("class")=="menu_content_opts row active"){
			var opt=$($(".menu_content_opts")[i]).attr("xu");
			for(var i=0;i<$(".menu_content_opts").length;i++){
				$($(".menu_content_opts")[i]).attr("class","menu_content_opts row");
				$($(".menu_content_opts")[i]).siblings().css("animation","");
			}
			$($(".menu_content_opts")[zdy]).attr("class","menu_content_opts row active");
			$($(".menu_content_opts")[zdy]).siblings().attr("class","menu_content_opts row");
			if(zdy>opt){//判断 添加左边animate还是右
				$($(".menu_content_opts")[zdy]).css("animation","bounceInRight 1.2s ease");
			}else{
				$($(".menu_content_opts")[zdy]).css("animation","bounceInLeft 1.2s ease");
			}
		}	
}
// $(window).scroll(function(){
// 	if(h<ourMenu_h-view_h+150){
// 		$(".our_menu .menu_titl").css("opacity","0");
// 	}else if(h>ourMenu_h-view_h+150){
// 		$(".our_menu .menu_titl").css("opacity","1");
// 	}
// }	
// 	
// 	
// 	for(var i=0;i<$(".menu_content_opts").length;i++){
// 		$($(".menu_content_opts")[i]).attr("class","menu_content_opts row ");
// 		if($($(".menu_content_opts")[i]).attr("xu")==zdy){
// 			$($(".menu_content_opts")[i]).attr("class","menu_content_opts row active");
// 			$($(".menu_content_opts")[i]).css("animation","bounceInRight 1.2s ease");
// 		}
// 	}
})
//日期
$("#date").focus(function(){
			WdatePicker();
		});
$("#time").focus(function(){
	WdatePicker({skin:'whyGreen',dateFmt:'H:mm:ss'});
});

//our gallery模态框
$(".img_child span").click(function(){
	$("#mod img").attr("src",$(this).prev().attr("src"));
})
