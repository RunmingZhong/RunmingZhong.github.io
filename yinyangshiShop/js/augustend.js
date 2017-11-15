			//图片下滑
				$('#caimg').slideDown(2000)	
				$('#calogo').slideDown(2000)
				$('#calogo1').slideDown(2000)
				$('#calogox').slideDown(2000)				
				$('#caxiazai0').slideDown(2000)
				$('#caxiazai1').slideDown(2000)
				$('#men').hover(function(){
					$(this).css('bottom','-60px');
					$('#erweima').fadeIn(1000);
				},function(){
					$(this).css('bottom','0px');
					$('#erweima').fadeOut(01);
				})
			//扫描移动
			var a = 5;
		    var timer = 0;
		    var cabox =document.getElementById("cabox")
		    var calogox =document.getElementById("calogox");
			function fn(){
				calogox.style.top = calogox.offsetTop + a + "px";
				if(calogox.offsetTop>cabox.offsetHeight-5){
					a=-5;
				}else if(calogox.offsetTop<5){
					a=5;
				}
			}
			timer = setInterval(fn,100)
			//点击商品到商品栏
			$('#spdaohang').click(function(){
				timer = setInterval(function(){
					winScrollTop = document.body.scrollTop||window.pageYOffset||document.documentElement.scrollTop;
					window.scrollBy(0,10);
					if(winScrollTop>=680){
						clearInterval(timer);
					}
				},5)
			})
			//海浪效果
			var hailang = document.getElementById("hailang");//盒子
			var myUl1 = hailang.getElementsByTagName("ul")[0];
			var myUl2 = hailang.getElementsByTagName("ul")[1];
			var myUl3 = hailang.getElementsByTagName("ul")[2]
			//移动量
			var distance = 2;
			//拼接两次ul的内容
			myUl1.innerHTML = myUl1.innerHTML+myUl1.innerHTML;
			myUl2.innerHTML = myUl2.innerHTML+myUl2.innerHTML;
			myUl3.innerHTML = myUl3.innerHTML+myUl3.innerHTML;
			//动态改变ul的宽度,offsetWidth:元素相对于父元素的偏移宽度，可见宽度，包含滚动条
			myUl1.style.width = 2568 + "px";
			myUl2.style.width = 2568 + "px";
			myUl3.style.width = 2568 + "px";
			//海浪1效果
		function move1(){
				if(myUl1.offsetLeft < -myUl1.offsetWidth/2){//移动到最左边
					myUl1.style.left = "0px";
				}
				if(myUl1.offsetLeft>0){//移动到最右边
					myUl1.style.left = -myUl1.offsetWidth/2 + "px";
				}
				myUl1.style.left = myUl1.offsetLeft - distance + "px";
			}
			var timer = setInterval(move1,30);
			//海浪2效果
		function move2(){
				if(myUl2.offsetLeft < -myUl2.offsetWidth/2){//移动到最左边
					myUl2.style.left = "0px";
				}
				if(myUl2.offsetLeft>0){//移动到最右边
					myUl2.style.left = -myUl2.offsetWidth/2 + "px";
				}
				myUl2.style.left = myUl2.offsetLeft - distance + "px";
			}
		var timer = setInterval(move2,20);
			//海浪3效果
		function move3(){
				if(myUl3.offsetLeft < -myUl3.offsetWidth/2){//移动到最左边
					myUl3.style.left = "0px";
				}
				if(myUl3.offsetLeft>0){//移动到最右边
					myUl3.style.left = -myUl3.offsetWidth/2 + "px";
				}
				myUl3.style.left = myUl3.offsetLeft - distance + "px";
			}
		var timer = setInterval(move3,10);
		//点击返回顶部
		var timer =0
		window.addEventListener("scroll",function(event){
		var ev = event||window.event;
		var winScrollTop = document.body.scrollTop||window.pageYOffset||document.documentElement.scrollTop			
				if( winScrollTop > 1000){
					$('#boxtop').css('display','block');
				}else{
					$('#boxtop').css('display','none');
				}
			})
		//定时器点击返回顶部
			$('#boxtop').click(function(){
				timer = setInterval(function(){
					winScrollTop = document.body.scrollTop||window.pageYOffset||document.documentElement.scrollTop;
					window.scrollBy(0,-100);
					if(winScrollTop<=0){
						clearInterval(timer);
					}
				},10)
			})
		//点击切换轮播图
		$('#lbleft').click(function(){
			for(var i=0;i<3;i++){
				//第一张到第三张
				if($('#conimg div').eq(i).css("transform")=="matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, -100, 0, -100, 1)"){
					$('#conimg div').eq(i).css({"transform":"translateZ(-100px) translateX(100px)",
										"left":"418px"									
				})
				}
//				第二张到第一张
				if($('#conimg div').eq(i).css("transform")=="matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 300, 1)"){
					$('#conimg div').eq(i).css({"transform":"translateZ(-100px) translateX(-100px)",
										"left":"-543px"
				})	
				}
//				//第三张到第二张
				if($('#conimg div').eq(i).css("transform")=="matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 100, 0, -100, 1)"){
					$('#conimg div').eq(i).css({"transform":"translateZ(300px) translateX(0px)",
										"left":"0px"
				})
				}
			}
		})
		$('#lbright').click(function(){
			for(var i=0;i<3;i++){
				//从第三张到第一张
				if($('#conimg div').eq(i).css("transform")=="matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 100, 0, -100, 1)"){
					$('#conimg div').eq(i).css({"transform":"translateZ(-100px) translateX(-100px)",
										"left":"-543px"
				});
				};
				//从第二张到第三张
				if($('#conimg div').eq(i).css("transform")=="matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 300, 1)"){
					$('#conimg div').eq(i).css({"transform":"translateZ(-100px) translateX(100px)",
										"left":"418px"
				})
				};
				//从第一张到第二张
				if($('#conimg div').eq(i).css("transform")=="matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, -100, 0, -100, 1)"){
					$('#conimg div').eq(i).css({"transform":"translateZ(300px) translateX(0px)",
										"left":"0px"
				})
				}
			}})
		//商品栏
		var jsonObj;
		$.ajax({
			type:"get",
			url:"json/sp.json",
			async:true,
			dataType: "text",
			success:function(result){
						jsonObj = JSON.parse(result);
						$('#sp1img').prop("src",jsonObj["Home commodity"][0]["imgsrc"]);
						$('#sp2img').prop("src",jsonObj["Home commodity"][1]["imgsrc"]);
						$('#sp3img').prop("src",jsonObj["Home commodity"][2]["imgsrc"]);
						$('#jiage1>a').text(jsonObj["Home commodity"][0]["name"]);
						$('#jiage2>a').text(jsonObj["Home commodity"][1]["name"]);
						$('#jiage3>a').text(jsonObj["Home commodity"][2]["name"]);
						$('#jiage1>span').text(jsonObj["Home commodity"][0]["price"]);
						$('#jiage2>span').text(jsonObj["Home commodity"][1]["price"]);
						$('#jiage3>span').text(jsonObj["Home commodity"][2]["price"]);
					}
		});
		//点击切换内页商品
//		console.log($('#sp1 img').length)
		$('#sp1 img').click(function(){
			open("shangpin.html?id="+$(this).prop('id'));
		});
		$('#sp2 img').click(function(){
			open("shangpin.html?id="+$(this).prop('id'));
		});
		$('#sp3 img').click(function(){
			open("shangpin.html?id="+$(this).prop('id'));
		});
