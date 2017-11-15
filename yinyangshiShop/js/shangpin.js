//点击上下数量变化
		var n = $('#text1').val();
		$('#btntop').click(function(){
			$('#text1').val(--n)
			if(n<=1){
				n=2
			}
		})
		$('#btnbottom').click(function(){
			$('#text1').val(++n)
		})
//放大图
		$("#sptpsmallimg,#sptpbigimg").hide();
		$("#sptp").hover(function() {
					$("#sptpsmallimg,#sptpbigimg").show();
				}, function() {
					$("#sptpsmallimg,#sptpbigimg").hide();
				});
				$("#sptp").mousemove(function(e) {
					//元素距离浏览器的位置
					var ex = e.pageX;
					var ey = e.pageY;
					//获得到box1的偏移量
					var boxx = $('#sptp').offset().left;
					var boxy = $('#sptp').offset().top;
					////获得到浮窗的宽高
					var fuw = $("#sptpsmallimg").width();
					var fuh = $("#sptpsmallimg").height();
					//获得box1的宽高
					var boxw = $('#sptp').width();
					var boxh = $('#sptp').height();
					//获得box2的宽高
					var box2w = $("#sptpbigimg").width();
					var box2h = $("#sptpbigimg").height();
					//获得放大的img的宽高
					var imgw = $("#sptpbigimg img").width();
					var imgh = $("#sptpbigimg img").height();
					//求得偏移量
					var left = ex - boxx - fuw / 2;
					var top = ey - boxy - fuh / 2;
					//判断边界区域
					if(left < 0) {
						left = 0;
					} else if(left > (boxw - fuw)) {
						left = boxw - fuw;
					}
					if(top < 0) {
						top = 0;
					} else if(top > boxh - fuh) {
						top = boxh - fuh;
					}
					var psx = left / (boxw - fuw);
					var psy = top / (boxh - fuh);
					$("#sptpsmallimg").css({
						"left": left,
						"top": top
					});
					$("#sptpbigimg img").css({
						"left": -psx * (imgw - box2w),
						"top": -psy * (imgh - box2h)
					});
				});
//获取后台数据
		var data = location.href;
		var arr = data.split("?");
		var name = arr[1];
		var imgId = name.substring(name.indexOf("=")+1)
		$.ajax({
			type:"get",
			url:"json/sp.json",
			async:true,
			dataType: "text",
			success:function(result){
				var jsonObj = JSON.parse(result);
				$('#sptp img').prop("src",jsonObj[imgId][0]["imgsrc"]);
				$('#sptpbigimg img').prop("src",jsonObj[imgId][0]["imgsrc"]);
				$('#spxiatp img').eq(0).prop("src",jsonObj[imgId][0]["imgsrc"]);
				$('#spxiatp img').eq(1).prop("src",jsonObj[imgId][1]["imgsrc"]);
				$('#spxiatp img').eq(2).prop("src",jsonObj[imgId][2]["imgsrc"]);
				$('#spxiatp img').eq(3).prop("src",jsonObj[imgId][3]["imgsrc"]);
				$('#box3 p').eq(0).text(jsonObj[imgId][0]["name"]);
				$('#spjiage span').text(jsonObj[imgId][0]["price"]);
				$('#spcolor img').eq(0).prop("src",jsonObj[imgId][0]["imgsrc"]);
				$('#spcolor img').eq(1).prop("src",jsonObj[imgId][1]["imgsrc"]);
				$('#spcolor img').eq(2).prop("src",jsonObj[imgId][2]["imgsrc"]);
				$('#spcolor img').eq(3).prop("src",jsonObj[imgId][3]["imgsrc"]);
				$('#spsize ul li').eq(0).text(jsonObj[imgId][4]["size1"]);
				$('#spsize ul li').eq(1).text(jsonObj[imgId][4]["size2"]);
				$('#spsize ul li').eq(2).text(jsonObj[imgId][4]["size3"]);
				$('#vicesp img').eq(0).prop("src",jsonObj["sp2img"][1]["imgsrc"]);
				$('#vicesp img').eq(1).prop("src",jsonObj["sp1img"][2]["imgsrc"]);
				$('#vicesp img').eq(2).prop("src",jsonObj["sp3img"][3]["imgsrc"]);
				$('#vicesp p').eq(0).text(jsonObj["sp1img"][0]["price"]);
				$('#vicesp p').eq(1).text(jsonObj["sp2img"][0]["price"]);
				$('#vicesp p').eq(2).text(jsonObj["sp3img"][0]["price"]);
				$('title').text(jsonObj[imgId][0]["name"]);
				//获取省份数据
				var proStr= "<option>---请选择省份---</option>"
				for(var i=0;i<jsonObj["proArr"].length;i++){
					var projson = jsonObj["proArr"][i]
					proStr +="<option value="+projson['id']+">"+projson["name"]+"</option>"
				}
				$('#prov').html(proStr);
				//获取市数据
				$('#prov').change(function(){
					var cityStr = "<option>--请选择市--</option>"
						var provVal = $(this).val();//保存选中的省份value值
						var cityArr = jsonObj["cityObj"][provVal];//获取对应的市的json数据
						for(var i=0;i<cityArr.length;i++){
							var cityData = cityArr[i].split("#");//通过#将字符串切为数组
							cityStr += "<option value="+cityData[0]+">"+cityData[1]+"</option>";
						}
						$('#city').html(cityStr);
						$('#city').prop('disabled',false);
	
				});
				$('#city').change(function(){
					var countryStrr = "<option>--请选择区、城--</option>";
					var countryVal = $(this).val();
					var countryArr = jsonObj["counObj"][countryVal]
					for(var i=0;i<countryArr.length;i++){
						countryStrr+="<option value="+countryArr[i]+">"+countryArr[i]+"</option>"
					}
					$('#country').prop('disabled',false);
					$('#country').html(countryStrr)
				})	
			}
		});
//小图片TAB切换
		for(var i=0;i<$('#spxiatp img').length;i++){
			$('#spxiatp img').eq(i).index=i;
			$('#spxiatp img').eq(i).click(function(){
				$('#sptp img').prop("src",$(this).prop('src'))
				$('#sptpbigimg img').prop("src",$(this).prop('src'))
		})
			}
//点击颜色 大小事件
		var n =0;
		for(var i=0;i<$('#spcolor li').length;i++){
			$('#spcolor ul li').eq(i).click(function(){
				$(this).index=n;
				$(this).css('border','2px solid red').siblings().css('border','1px solid #999999');
				n++;
			if(n==2){
				$('#jiaruche').css('background','#ff0036').removeAttr('disabled')
			}
			})
			$('#spcolor img').eq(i).click(function(){
				$('#sptp img').prop("src",$(this).prop('src'));
				$('#sptpbigimg img').prop("src",$(this).prop('src'))
			})
			$('#spsize li').eq(i).click(function(){
				$(this).css('border','2px solid red').siblings().css('border','1px solid #999999')
				n++;
				if(n==2){
				$('#jiaruche').css('background','#ff0036').removeAttr('disabled')
			}
			})

		}
//点击副商品切换网页
		for(var i =0;i<$('#vicesp img').length;i++){
			$('#vicesp img').eq(i).click(function(){
				location.href="shangpin.html?id="+$(this).prop('id');
			})
		}
//加入购物车
 	$(function() { 
    var offset = $("#end").offset(); 
    $("#jiaruche").click(function(event){ 
    	var addcar = $(this)
        var img = $('#spcolor').find('ul li')
        var str ="2px solid rgb(255, 0, 0)"
        for(var i =0;i<img.length;i++){
        if(img.eq(i).css('border')==str){
        var flyer = $('<img class="u-flyer" src="'+img.eq(i).find('img').prop('src')+'">'); 
        flyer.fly({ 
            start: { 
                left: event.pageX, //开始位置（必填）#fly元素会被设置成position: fixed 
                top: event.pageY //开始位置（必填） 
            }, 
            end: { 
                left: offset.left+10, //结束位置（必填） 
                top: offset.top+10, //结束位置（必填） 
                width: 0, //结束时宽度 
                height: 0 //结束时高度 
            }, 
            onEnd: function(){ //结束回调 
                $("#msg").show().animate({width: '250px'}, 200).fadeOut(2000); //提示信息 
                addcar.css("cursor","default").removeClass('orange').unbind('click'); 
                this.destory(); //移除dom 
            } 
        });
        	}
        }
       			$('#yuanquan').html($('#text1').val())
    });
}); 
//点击购物车侧弹窗口
     var a = 0
	$('.cart div').click(function(){
		a++;
		if(a%2==1){
			$('.m-sidebar').animate({'right':'300px'},500)
			$('#jiesuan').animate({'width':'300px'},500)
			$('#jiesuanfoot,#quanxuan,#jiesuanlan').css('display','block')
		}else{
			$('.m-sidebar').animate({'right':'0px'},500)
			$('#jiesuan').animate({'width':'0px'},500)
		}
		$('#jiesuanimg img').prop('src',$('#sptp img').prop("src"))
		$('#jiesuanimg span').text($('#spname').text())
		$('#jiesuanlansp').text($('#text1').val()+"件");
		var bb = parseFloat(Number($('#spjiage span').text().split('￥')[0])*Number($('#text1').val()))
		$('#jiesuanlan p').text(bb+'¥');
		//全选
		$('#quanxuan input').click(function(){
		if($('#quanxuan input').prop('checked')){
			$('#jiesuanlan input').prop('checked',true);
		}else{
			$('#jiesuanlan input').prop('checked',false);
		}
	})
	})	
	//点击结算弹出付款
	$('#jiesuanfoot').click(function(){
		$('#box5').fadeIn(1000)
		$('#shangpinglan1 span').text($('#spname').text());
		$('#shangpinglan2 span').text($('#text1').val()+"件");
		var cc = parseFloat(Number($('#spjiage span').text().split('￥')[0])*Number($('#text1').val()))
		$('#shangpinglan3 span').text('总金额'+cc+'¥')
	})
	//点击确定地址
	$('#jiesuanqueding').click(function(){
		$('#dizhitext').css('display','none');
		$('#dizhitext1').css('display','none');
		$('#xindizhi').css('display','block')
		$('#xindizhi1').css('display','block');
		$('#xindizhi1').text($('#prov').val()+$('#city').val()+$('#country').val()+$('#dizhitext1').val());
	})
//点击购买结算
	$('#goPY').click(function(){
		$('#box5').fadeIn(1000)
		$('#shangpinglan1 span').text($('#spname').text());
		$('#shangpinglan2 span').text($('#text1').val()+"件");
		var cc = parseFloat(Number($('#spjiage span').text().split('￥')[0])*Number($('#text1').val()))
		$('#shangpinglan3 span').text('总金额'+cc+'¥')
	})
	//点击关闭
	$('#close').click(function(){
		$('#box5').fadeOut(1000)
	})
