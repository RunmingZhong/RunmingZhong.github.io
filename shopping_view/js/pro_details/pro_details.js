$(function(){
//	refreshUrl();//刷新页面去除一次分享带的参数
	var urls = location.href.toString();//url不能写死
	var urls = urls.split('#')
	var urls =urls[0]
	var host = window.location.host;
	var urles = location.href
	var urles = urles.split('://')
	var urles = urles[1]
	/***用户点击分享到微信圈后加载接口接口*******/
	$.ajax({
		type:"post",
		data:{
			url:urles
		},
		url:"http://www.sunnyun.com/wx",//后台返回的接口给你
		async:true,
		success:function(res){
			//微信分享功能
			wx.config({
//			    debug: true, // 开启调试模式,调用的所有api的返回值会在客户端alert出来，若要查看传入的参数，可以在pc端打开，参数信息会通过log打出，仅在pc端时才会打印。
			    appId: res.appId, // 必填，公众号的唯一标识
			    timestamp: res.timestamp, // 必填，生成签名的时间戳
			    nonceStr: res.nonceStr, // 必填，生成签名的随机串
			    signature: res.signature,// 必填，签名
			    jsApiList: ['onMenuShareAppMessage','onMenuShareTimeline','onMenuShareQQ','onMenuShareQZone','onMenuShareWeibo'] // 必填，需要使用的JS接口列表
			});
			
			
			wx.ready(function(){
				//判断当前客户端版本是否支持指定JS接口
				wx.checkJsApi({
				    jsApiList: ['onMenuShareAppMessage','onMenuShareTimeline','onMenuShareQQ','onMenuShareQZone','onMenuShareWeibo'], // 需要检测的JS接口列表，所有JS接口列表见附录2,
				    success: function(res) {
				        // 以键值对的形式返回，可用的api值true，不可用为false
				        // 如：{"checkResult":{"chooseImage":true},"errMsg":"checkJsApi:ok"}
			//	        if(!res["checkResult"]["chooseImage"]) {
			//	        	alert("当前客户端不支持上传图片");
			//	        }
				    }
				});
				//分享给朋友
				wx.onMenuShareAppMessage({
					title:'【开抢！】酒店物资——'+top_title, // 分享标题
					desc: '好物不贵，帮您省钱，是为了您经营得更长久', // 分享描述
					link: urls, // 分享链接，该链接域名或路径必须与当前页面对应的公众号JS安全域名一致
					imgUrl:logoimg,// 分享图标
					type: '', // 分享类型,music、video或link，不填默认为link
					dataUrl: '', // 如果type是music或video，则要提供数据链接，默认为空
					success: function () {
//						alert('分享朋友')
					// 用户点击了分享后执行的回调函数
					}
				});
				//分享到朋友圈
				wx.onMenuShareTimeline({
				    title: '【开抢！】酒店物资——'+top_title, // 分享标题
				    link: urls, // 分享链接，该链接域名或路径必须与当前页面对应的公众号JS安全域名一致
				    imgUrl: logoimg, // 分享图标
				    success: function () {
				    // 用户点击了分享后执行的回调函数
					}
				});
				//分享到QQ
				wx.onMenuShareQQ({
					title: '【开抢！】酒店物资——'+top_title, // 分享标题
					desc: '爆款也卖促销价？你想要的好物，这里比较便宜', // 分享描述
					link: urls, // 分享链接
					imgUrl:logoimg, // 分享图标
					success: function () {
					// 用户确认分享后执行的回调函数
					},
					cancel: function () {
					// 用户取消分享后执行的回调函数
					}
				});
				//分享到QQ空间
				wx.onMenuShareQZone({
					title: '【开抢！】酒店物资——'+top_title, // 分享标题
					desc: '爆款也卖促销价？你想要的好物，这里比较便宜', // 分享描述
					link: urls, // 分享链接
					imgUrl:logoimg, // 分享图标
					success: function () {
					// 用户确认分享后执行的回调函数
					},
					cancel: function () {
					// 用户取消分享后执行的回调函数
					}
				});
				//分享到腾讯微博
				wx.onMenuShareWeibo({
					title: '【开抢！】酒店物资——'+top_title, // 分享标题
					desc: '爆款也卖促销价？你想要的好物，这里比较便宜', // 分享描述
					link: urls, // 分享链接
					imgUrl:logoimg, // 分享图标
					success: function () {
					// 用户确认分享后执行的回调函数
					},
					cancel: function () {
					// 用户取消分享后执行的回调函数
					}
				});
				
			})
		},
		error:function(){
			
		}
	});
	function fnGetQueryString(key) { //正则获取url后面的参数值，如?env=dev&exp=123
		var reg = new RegExp("(^|&)" + key + "=([^&]*)(&|$)");
		var result = window.location.search.substr(1).match(reg);
		return result ? decodeURIComponent(result[2]) : false;
	};
	
	function funcUrlDel(name) {//删除url指定参数名并返回新的url
		var loca = window.location;
		var baseUrl = loca.origin + loca.pathname + "?";
		var query = loca.search.substr(1);
		if (query.indexOf(name) > -1) {
		var obj = {};
		var arr = query.split("&");
		for (var i = 0; i < arr.length; i++) {
		arr[i] = arr[i].split("=");
		obj[arr[i][0]] = arr[i][1];
		};
		delete obj[name];
		var url = baseUrl + JSON.stringify(obj).replace(/[\"\{\}]/g, "").replace(/\:/g, "=").replace(/\,/g, "&");
		return url
		};
	};
	
	function getlinkSearch(key, reqStr) {
		var reg = new RegExp("(^|&)" + key + "=([^&]*)(&|$)");
		var result = reqStr.substr(1).match(reg);
		return result ? decodeURIComponent(result[2]) : false;
	};
	
	function refreshUrl() {//强制刷新到不带二次分享参数页面
	var url = "",
	reqStr = "";
	if (fnGetQueryString('from')) {//from为微信二次分享自带参数
				url = funcUrlDel('from');
				var reqIndex = url.indexOf('?');
				reqStr = url.substr(reqIndex);//截取去除from参数后的地址
				if (getlinkSearch('isappinstalled', reqStr)) {//isappinstalled为微信二次分享自带参数
				url = url.substr(0, url.indexOf('?'));//截取去除isappinstalled参数后的地址
				window.location.href = url;
			} else {
				window.location.href = url;
			}
		}
	};
	
})








var pro_img =''
var pro_proimg =''
var pto_guige =''
var data = location.href;
var arr = data.split("?");
var name = arr[1];
var good_id = name.substring(name.indexOf("=")+1)//获取URL

var goods_id =''
var minNum =''
var kaituanNum =''
var price_id  =''
var ress =''
var shopNum =$('#number').text()
var logoimg =''
var top_title =''
var pao_guige =''//新规格
var jiagequjian =[]//价格区间
$.ajax({
	type:"get",
	url:"http://www.sunnyun.com/goods",
	cache: false,
    async: false,
	data:{
		'goods_id':good_id
	},
	success:function(res){
		console.log(res)
		ress = res.tp
		minNum =res.goods_min_num
		$('#number').val(1)
		$('#qipiNum').text(minNum)//最少起批量
		logoimg=res.goods_main_sowing_img[0]//第一张图片
		top_title=res.goods_name//标题
		for(var m=0;m<res.goods_main_sowing_img.length;m++){
			pro_img +='<div class="swiper-slide"><img src="'+res.goods_main_sowing_img[m]+'"/></div>'
		}
		for(var n=0;n<res.goods_other_img.length;n++){
			pro_proimg += '<img src="'+res.goods_other_img[n]+'"/>'
		}
		for(var a=0;a<res.tp.length;a++){
			pto_guige += '<li class="lis_size"><span class="yanse">'+res.tp[a].color_name+'</span>&nbsp;|&nbsp;<span class="guige">'+res.tp[a].size_name+'</span></li>'
			price_id=res.tp[a].price_id
		}
		//新计算
		for(var b=0;b<res.tp.length;b++){
			pao_guige += '<div class="xiangqingcanshu_content_xin01">'+
							'<div class="xiangqingcanshu_content_xin01_box01">'+
								'<div class="size_title">'+res.tp[b].color_name+'&nbsp;|&nbsp;'+res.tp[b].size_name+'</div>'+
								'<span class="size_price">&nbsp;￥<span class="size_prices">'+res.tp[b].group_price+'</span></span>'+
							'</div>'+
							'<div class="xiangqingcanshu_content_xin_jisuan">'+
								'<button class="decrease_xin" onclick="numDec_xin()">-</button>'+
								'<input type="number" name="number" class="number_xin" value="0" />'+
								'<button class="increase_xin" onclick="numAdd_xin()">+</button>'+
							'</div>'+
						'</div>'
			jiagequjian.push(res.tp[b].group_price)
			jiagequjian.sort(function(a,b){return a-b})
			
		}
		if(jiagequjian.length ==1){//团购价格
			$('#pro_jiage_hong').html(jiagequjian[0])
		}else{
			$('#pro_jiage_hong').html(jiagequjian[0]+'~'+jiagequjian[jiagequjian.length-1]) 
			
		}
		$('.xiangqingcanshu_content_xin').append(pao_guige)
		$('.swiper-wrapper').append(pro_img)
		$('.pro_details_img').append(pro_proimg)
		$('#canshuguige').append(pto_guige)
		$('#shichangjia').text(res.tp[0].price)
		$('#tuangoujia').text(res.tp[0].group_price)
		$('.pro_names').text(res.goods_name) //名字
		$('#cantuanrenshu').text(res.goods_group_num) //参团人数
		$('#yigourenshu').text(res.goods_is_group) //已购数量
		$('#kaituannum').text(res.goods_group) //开团数量
		$('.shopimg_img').attr('src',res.goods_main_sowing_img[0])//SUK小图
		document.title=res.goods_name
		
		goods_id=res.goods_id
		kaituanNum=res.goods_group
		var s = res.goods_is_group /res.goods_group *100
		jindutiao(s)
		goes(res.goods_end_time,res.goods_start_time)
	}
});

//返回
$('.pro_back').click(function(){
	if(data.indexOf('#neiye') == -1){//找不到
		window.location.href='./index.html#shop'
	}else{
		window.history.go(-1)
	}
})


//进度条
function jindutiao(s){
	var n = s.toString()
	var n = parseInt(n)+'%'
	$('.layui-progress-bar').css('width',n)
	$('.layui-progress-bar').text(n)
}


//btn切换效果
$(window).scroll(function(){
	var windowTop =$(window).scrollTop()
	if(windowTop>150){
		$('.pro_back').addClass('display_none')
		$('.pro_nav').addClass('display_block')
	}else{
		$('.pro_back').removeClass('display_none')
		$('.pro_nav').removeClass('display_block')
	}
	if(windowTop>1350){
		$('.pro_nav01').removeClass('active')
		$('.pro_nav02').addClass('active')
	}else{
		$('.pro_nav02').removeClass('active')
		$('.pro_nav01').addClass('active')
	}
})
$('.pro_nav01').click(function(){

	timer = setInterval(function(){
		winScrollTop = document.body.scrollTop||window.pageYOffset||document.documentElement.scrollTop;

		
		window.scrollBy(0,-100);
		if(winScrollTop<=0){
			clearInterval(timer);
		}
	},10)
})


//轮播图
var mySwiper = new Swiper('.swiper-container', {
	autoplay: 5000,//可选选项，自动滑动
	pagination : '.swiper-pagination',
	observer: true,
	observeParents: true,
})


//倒计时
function leftTimer(a){ 
	var date = new Date(a * 1000);//时间戳为10位需*1000，时间戳为13位的话不需乘1000
	var leftTime = (new Date(date)) - (new Date()); //计算剩余的毫秒数 
	var days = parseInt(leftTime / 1000 / 60 / 60 / 24 , 10); //计算剩余的天数 
	var hours = parseInt(leftTime / 1000 / 60 / 60 % 24 , 10); //计算剩余的小时 
	var minutes = parseInt(leftTime / 1000 / 60 % 60, 10);//计算剩余的分钟 
	var seconds = parseInt(leftTime / 1000 % 60, 10);//计算剩余的秒数 
	days = checkTime(days); 
	hours = checkTime(hours); 
	minutes = checkTime(minutes); 
	seconds = checkTime(seconds); 
  	document.getElementById("timer").innerHTML = days+"天" + hours+"小时" + minutes+"分"+seconds+"秒";  
	if(days <= 0 && hours <= 0 && minutes <= 0 && seconds <= 0){
		window.clearInterval(_ordertimer);
  		_ordertimer = null;
  		document.getElementById("timer").innerHTML = '时间已过'
	}
  
} 
function checkTime(i){ //将0-9的数字前面加上0，例1变为01 
  if(i < 10 && i > 0){ 
    i = "0" + i; 
  } 
  return i; 
}
function goes(v,a){
	//v,结束团购  a,开团时间
	 var data1=new Date(),//现在时间

	 data2=new Date(v * 1000),//结束团购
	 data3=new Date(a *1000);//开始团购
	 
	 var timeEnd =(data1)-(data2) //团购时间结束
	 var timeStart =(data3)-(data1) //到团购时间
	 if(timeStart >0){
	 	$('#timer').html("未到团购时间");
	 }else{
	 	_ordertimer = setInterval(function(){leftTimer(v)}, 1000);
	 }
}

		
//切换SUK
$('.foot_btn_buy').click(function(){
	$('.xiangqingcanshu').animate({top:'0%'},500)
})
$('.xiangqingcanshu').click(function(){
	$('.xiangqingcanshu').animate({top:'100%'},500)
})
$('.chacha').click(function(){
	$('.xiangqingcanshu').animate({top:'100%'},500)
})
$('.xiangqingcanshu_content').click(function(event){
		event.stopPropagation();
})
$('#yixuanze').text($('#canshuguige li:first').text())


//点击放大图片
$('.swiper-container img').click(function(){
	var imgsrc =$(this).attr('src')
	console.log(imgsrc)
	$('.bigimg').attr('src',imgsrc)
	$('.bigimg_box').removeClass('display_none')
})
$('.bigimg_box').click(function(){
	$(this).addClass('display_none')
})
$('.pro_details_img img').click(function(){
	var imgsrc =$(this).attr('src')
	console.log(imgsrc)
	$('.bigimg').attr('src',imgsrc)
	$('.bigimg_box').removeClass('display_none')
})

//BTN切换
$('#yixuanze').text(ress[0].color_name+'|'+ress[0].size_name)
$('.xiangqingcanshu_content02 li:first').addClass('btnative')
//切换价格
var array_one = []
	for(var mm=0;mm<ress.length;mm++){
		var a =ress[mm].group_price
		array_one.push(a)
	}
var index = 0
for(var k=0;k<array_one.length;k++){
	$('.lis_size').eq(k).click(function(){
		$(this).addClass('btnative').siblings().removeClass('btnative')
		index = $(this).index()
		$('#yixuanze').text($('.btnative').text())
		console.log('suliang:'+suliang)
			var a = $('#number').val()
			
			var tuanzongjiage =array_one[index] * a
			console.log(tuanzongjiage)
			$('#xiaotujiage').text(tuanzongjiage)
	})
}


		




//商品数量计算
//var suliang = 1
//function numDec(){
//	suliang--
//	if(suliang<1){
//		suliang =1
//	}
//	var num_dec = parseInt($('#number').val())-1
//	if(num_dec<1){
//	  //购买数量必须大于或等于1
//	  num_dec=1
//	}else{
//	  $("#number").val(num_dec);
//	  var a = $('#number').val()
//		var tuanzongjiage =array_one[index] * a
//		console.log(tuanzongjiage)
//		$('#xiaotujiage').text(tuanzongjiage)
//	}
//	
//}


//function numAdd(){
//	
//	var num_add = parseInt($('#number').val())+1
//	 if($("#number").val()==""){
//	  	num_add = 1;
//	 }
//	 $("#number").val(num_add);
//	var a = $('#number').val()
//	var tuanzongjiage =array_one[index] * a
//		console.log(tuanzongjiage)
//		$('#xiaotujiage').text(tuanzongjiage)
//}


//新计算

//减法
$('.decrease_xin').click(function(){
	var n=$('.decrease_xin').index(this)//不同父元素下的class名
	numDec_xin(n)
	zongjia()
})
//加法
$('.increase_xin').click(function(){
	var n=$('.increase_xin').index(this)
	numAdd_xin(n)
	zongjia()
})
//总价
var abb = 0
var xinshuzu = []//存放的数组
var xinshuzujianshu =[]
function zongjia(){
	xinshuzu = []
	xinshuzujianshu =[]
	for(var l=0;l<$('.xiangqingcanshu_content_xin01').length;l++){
		abb = $('.size_prices').eq(l).text()*$('.number_xin').eq(l).val()
		add = parseInt($('.number_xin').eq(l).val())
		xinshuzu.push(abb) 
		xinshuzujianshu.push(add)
	}
	var a =sums(xinshuzu)
	var b =sums(xinshuzujianshu)
	var a = a.toFixed(2)
	$('#xiaotujiage').text(a)
	$('#xiangqingcanshu_content_xin02_zongjianum').text(a)
	$('#xiangqingcanshu_content_xin02_jiannum').text(b)
}
//数组递归相加
function sums(arr) {
	var len = arr.length;
	if(len == 0) {
		return 0;
	} else if(len == 1) {
		return arr[0];
	} else {
		return arr[0] + sums(arr.slice(1));
	}
}	
	
function numDec_xin(n){
	var yuanshi_decnum =$('.number_xin').eq(n).val()
	if(yuanshi_decnum===undefined){
		return
	}
	var num_dec = parseInt(yuanshi_decnum)-1
	if(num_dec<1){
	  //购买数量必须大于或等于1
	  num_dec=0
	  $('.number_xin').eq(n).val(num_dec)
	}else{
		$('.number_xin').eq(n).val(num_dec)
	}
}

function numAdd_xin(n){
	var yuanshi_addnum =$('.number_xin').eq(n).val()
	var num_Add = parseInt($('.number_xin').eq(n).val())+1
	$('.number_xin').eq(n).val(num_Add)
}



//弹窗跳转
$('.xiangqingcanshu_btn').click(function(){
	if($('#xiangqingcanshu_content_xin02_jiannum').text() < minNum){
		alert("低于起批数量："+minNum+'，请联系客服');
		return
	}
	var shengyutime =document.getElementById("timer").innerHTML
	if(shengyutime=="时间已过"){
		alert('团购时间已过，欢迎下次团购')
	}else{
		$('.tanchuan_big').removeClass('display_none')
	}
})
$('.number_xin').change(function(){
	zongjia()
})
$('.tanchuan_big').click(function(){
	$(this).addClass('display_none')
})
$('.tanchuan').click(function(event){
	event.stopPropagation();
})

$('.tanchuan_bottom01').click(function(){//保存到历史记录
	//保存到历史记录
	var shopItem =localStorage.getItem('shopItem',shopItem)
	if(shopItem == null||shopItem == ''){
//		console.log('第一次添加')
		var shopItem =[]
		for(var mmb =0;mmb<$('.number_xin').length;mmb++){
				var b=$('.size_prices').eq(mmb).text()*$('.number_xin').eq(mmb).val()

				if($('.number_xin').eq(mmb).val()==0){
					continue
				}
				console.log($('.number_xin').eq(mmb).val())
				
				var a ={
						size:$('.size_title').eq(mmb).text(),
						goodsid:goods_id,
						price_id:price_id,
						shopNum:$('.number_xin').eq(mmb).val(),
						name:$('.pro_names').text(),
						tuan_price:b,
						img:$('.shopimg_img').attr('src'),
						price:$('.size_prices').eq(mmb).text()
						}
				shopItem.push(a)
			}

		localStorage.setItem('shopItem',JSON.stringify(shopItem))
	}else{
		var result =false;
		if(!result){
			var shopItem =JSON.parse(shopItem)
			for(var mmb =0;mmb<$('.number_xin').length;mmb++){
				var b=$('.size_prices').eq(mmb).text()*$('.number_xin').eq(mmb).val()
				if($('.number_xin').eq(mmb).val()==0){
					continue
				}
				var a ={
						size:$('.size_title').eq(mmb).text(),
						goodsid:goods_id,
						price_id:price_id,
						shopNum:$('.number_xin').eq(mmb).val(),
						name:$('.pro_names').text(),
						tuan_price:b,
						img:$('.shopimg_img').attr('src'),
						price:$('.size_prices').eq(mmb).text()
						}
				shopItem.push(a)
			}
			shopItem =JSON.stringify(shopItem)
			localStorage.setItem('shopItem',shopItem)
		}
	}
	window.location.href='index.html#shop'

})

$('.tanchuan_bottom02').click(function(){//提交团购信息
	//保存到历史记录
	var shopItem =localStorage.getItem('shopItem',shopItem)
	if(shopItem == null||shopItem == ''){
//		console.log('第一次添加')
		var shopItem =[]
		for(var mmb =0;mmb<$('.number_xin').length;mmb++){
				var b=$('.size_prices').eq(mmb).text()*$('.number_xin').eq(mmb).val()

				if($('.number_xin').eq(mmb).val()==0){
					continue
				}
				console.log($('.number_xin').eq(mmb).val())
				
				var a ={
						size:$('.size_title').eq(mmb).text(),
						goodsid:goods_id,
						price_id:price_id,
						shopNum:$('.number_xin').eq(mmb).val(),
						name:$('.pro_names').text(),
						tuan_price:b,
						img:$('.shopimg_img').attr('src'),
						price:$('.size_prices').eq(mmb).text()
						}
				shopItem.push(a)
			}

		localStorage.setItem('shopItem',JSON.stringify(shopItem))
	}else{
		var result =false;
		if(!result){
			var shopItem =JSON.parse(shopItem)
			for(var mmb =0;mmb<$('.number_xin').length;mmb++){
				var b=$('.size_prices').eq(mmb).text()*$('.number_xin').eq(mmb).val()
				if($('.number_xin').eq(mmb).val()==0){
					continue
				}
				var a ={
						size:$('.size_title').eq(mmb).text(),
						goodsid:goods_id,
						price_id:price_id,
						shopNum:$('.number_xin').eq(mmb).val(),
						name:$('.pro_names').text(),
						tuan_price:b,
						img:$('.shopimg_img').attr('src'),
						price:$('.size_prices').eq(mmb).text()
						}
				shopItem.push(a)
			}
			shopItem =JSON.stringify(shopItem)
			localStorage.setItem('shopItem',shopItem)
		}
	}
	window.location.href='index.html#tantan'
	
})
