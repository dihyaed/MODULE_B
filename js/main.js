$(function(){
	
	
	
	//banner
	$(".ren").hide();
	$(".ren").eq(0).show();
	$(".text").hide();	
	$(".text").eq(0).show();
	
	//自动播放
	var n=0;
	function changeImg(){
		if(n<2){
			n++
		}else{
			n=0
		}
		$(".ren").hide();
		$(".ren").eq(n).show();
		$(".text").hide();	
		$(".text").eq(n).show();
		$(".subnav span").removeClass("currentsubnav");
		$(".subnav span").eq(n).addClass("currentsubnav");
		
	}
	var timer=setInterval(changeImg,3000);
	
	//点击焦点
	$(".subnav span").click(function(){
		var m=$(".subnav span").index(this);
		$(".subnav span").removeClass("currentsubnav");
		$(".subnav span").eq(m).addClass("currentsubnav");
		$(".ren").hide();
		$(".ren").eq(m).show();
		$(".text").hide();	
		$(".text").eq(m).show();
	});
	$(".subnav span").hover(function(){
		var m=$(".subnav span").index(this);
		$(".subnav span").removeClass("currentsubnav");
		$(".subnav span").eq(m).addClass("currentsubnav");
		$(".ren").hide();
		$(".ren").eq(m).show();
		$(".text").hide();	
		$(".text").eq(m).show();
	});
	
	$("subnav span").hover(function(){clearInterval(timer)},
		function(){timer=setInterval(changeImg,2000)})
	//动画
	$(window).load(function(){
		var w=$( window).width(); 
		if(500<w<800){
			$(".ren").addClass("men_a");
			$(".text").addClass("zoomIn_a");
			$(".ren").removeClass("men");
			$(".text").removeClass("zoomIn");
		}else{};
		if(w>800){
			$(".ren").addClass("men");
			$(".text").addClass("zoomIn");
			$(".ren").removeClass("men_a");
			$(".text").removeClass("zoomIn_a");
		}else{}
	});
	$(window).resize(function(){
		var w=$( window).width(); 
		if(500<w<800){
			$(".ren").addClass("men_a");
			$(".text").addClass("zoomIn_a");
			$(".ren").removeClass("men");
			$(".text").removeClass("zoomIn");
		}else{};
		if(w>800){
			$(".ren").addClass("men");
			$(".text").addClass("zoomIn");
			$(".ren").removeClass("men_a");
			$(".text").removeClass("zoomIn_a");
		}else{}
	});
	
	$(".stop").show();
	$(".start").hide();
	$(".stop").click(function(){
		$(".stop").hide();
		$(".start").show();
		clearInterval(timer);
	});
	
	$(".start").click(function(){
		$(".stop").show();
		$(".start").hide();
		timer=setInterval(change,2000);
	});

	
	//search
	$(".input_in").click(function(){
		$(this).val("");
	});
	$(".list input").click(function(){
		$(this).val("");
	});
	
	//sidenav
	$(".sidenav_con").hide();
	$(".sidenav_title").click(function(){
		var n=$(".sidenav_title").index(this);
		$(".sidenav_con").eq(n).toggle();
	});
	
	//aside
	$(".aside_btn").click(function(){
		$(".sidenav").show();
		$(".bg_fix").show();
	});
	
	$(".bg_fix").click(function(){
		$(".sidenav").hide();
		$(".bg_fix").hide();
	});
	
	
	//fun_fix
	$(window).load(function(){
		var w=$( window).width(); 
		if(w<800){
			$("#top").hover(function(){
				$(".fun_fix").hide();
			},function(){
				$(".fun_fix").show();
			});
		}else{};
		if(w>800){
			$("#top").hover(function(){
				$(".fun_fix").hide();
			},function(){
				$(".fun_fix").hide();
			});
		}else{}
	});

	$(window).resize(function(){
		var w=$( window).width(); 
		if(w<800){
			$("#top").hover(function(){
				$(".fun_fix").hide();
			},function(){
				$(".fun_fix").show();
			});
		}else{};
		if(w>800){
			$("#top").hover(function(){
				$(".fun_fix").hide();
			},function(){
				$(".fun_fix").hide();
			});
		}else{}
	});
	
	//nav_but
	$(".nav_but").click(function(){
		$(".nav").show();
		$(".bg_fix").show()
	});
	
	$(".bg_fix").click(function(){
		$(".nav").hide();
		$(".bg_fix").hide()
	});
	
	
	
	//手机轮播1
	$('.goods_detail_a').width(450*$('.goods_detail_a .g_detail').length+'px');
	$(".goods_nav_a span").mouseover(function(){
		$(this).addClass('currentgoodsnav').siblings().removeClass('currentgoodsnav');
		var index = $(this).index();
		number = index;
		var distance = -450*index;
		$('.goods_detail_a').stop().animate({
			left:distance                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        
		});
	});
	
	var auto = 0;  //等于0则自动切换，其他任意数字则不自动切换
	if(auto ==0){
		var number = 0;
		var maxNumber = $('.goods_nav_a span').length;
		function autotab1(){
			number++;
			number == maxNumber? number = 0 : number;
			$('.goods_nav_a span:eq('+number+')').addClass('currentgoodsnav').siblings().removeClass('currentgoodsnav');
			var distance = -450*number;
			$('.goods_detail_a').stop().animate({
				left:distance
			});
		}
		var tabChange1 = setInterval(autotab1,3000);
		//鼠标悬停暂停切换
		$('.goods_nav_a').mouseover(function(){
			clearInterval(tabChange1);
		});
		$('.goods_nav_a').mouseout(function(){
			tabChange1 = setInterval(autotab1,3000);
		});
	  }  
	
	//手机轮播2
	$('.goods_detail_b').width(450*$('.goods_detail_b .g_detail').length+'px');
	$(".goods_nav_b span").mouseover(function(){
		$(this).addClass('currentgoodsnav').siblings().removeClass('currentgoodsnav');
		var index = $(this).index();
		number = index;
		var distance = -450*index;
		$('.goods_detail_b').stop().animate({
			left:distance                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        
		});
	});
	
	var auto = 1;  //等于1则自动切换，其他任意数字则不自动切换
	if(auto ==1){
		var number = 0;
		var maxNumber = $('.goods_nav_b span').length;
		function autotab(){
			number++;
			number == maxNumber? number = 0 : number;
			$('.goods_nav_b span:eq('+number+')').addClass('currentgoodsnav').siblings().removeClass('currentgoodsnav');
			var distance = -450*number;
			$('.goods_detail_b').stop().animate({
				left:distance
			});
		}
		var tabChange = setInterval(autotab,3000);
		//鼠标悬停暂停切换
		$('.goods_nav_b').mouseover(function(){
			clearInterval(tabChange);
		});
		$('.goods_nav_b').mouseout(function(){
			tabChange = setInterval(autotab,3000);
		});
	  }  
	

	
	
	
	
	
})
