
$(function(){
	refreshUrl();//刷新页面去除一次分享带的参数
	var urls = location.href.toString();//url不能写死
	console.log(urls)
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
		url:"https://www.sunnyun.com/wx",//后台返回的接口给你
		async:true,
		success:function(res){
			console.log(res)
			var img_url =res.img
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
					title:'酒店物资用品团购开始啦-邀请你参加-精品酒店网', // 分享标题
					desc: '都是你需要的，价钱你也懂的，惊喜是你想不到的', // 分享描述
					link: urls, // 分享链接，该链接域名或路径必须与当前页面对应的公众号JS安全域名一致
					imgUrl:img_url,// 分享图标
					type: '', // 分享类型,music、video或link，不填默认为link
					dataUrl: '', // 如果type是music或video，则要提供数据链接，默认为空
					success: function () {
//						alert('分享朋友')
					// 用户点击了分享后执行的回调函数
					}
				});
				//分享到朋友圈
				wx.onMenuShareTimeline({
				    title:'酒店物资用品团购开始啦-邀请你参加-精品酒店网', // 分享标题
				    link: urls, // 分享链接，该链接域名或路径必须与当前页面对应的公众号JS安全域名一致
				    imgUrl: img_url, // 分享图标
				    success: function () {
				    // 用户点击了分享后执行的回调函数
					}
				});
				//分享到QQ
				wx.onMenuShareQQ({
					title:'酒店物资用品团购开始啦-邀请你参加-精品酒店网', // 分享标题
					desc: '都是你需要的，价钱你也懂的，惊喜是你想不到的', // 分享描述
					link: urls, // 分享链接
					imgUrl:img_url, // 分享图标
					success: function () {
					// 用户确认分享后执行的回调函数
					},
					cancel: function () {
					// 用户取消分享后执行的回调函数
					}
				});
				//分享到QQ空间
				wx.onMenuShareQZone({
					title:'酒店物资用品团购开始啦-邀请你参加-精品酒店网', // 分享标题
					desc: '都是你需要的，价钱你也懂的，惊喜是你想不到的', // 分享描述
					link: urls, // 分享链接
					imgUrl:img_url, // 分享图标
					success: function () {
					// 用户确认分享后执行的回调函数
					},
					cancel: function () {
					// 用户取消分享后执行的回调函数
					}
				});
				//分享到腾讯微博
				wx.onMenuShareWeibo({
					title:'酒店物资用品团购开始啦-邀请你参加-精品酒店网', // 分享标题
					desc: '都是你需要的，价钱你也懂的，惊喜是你想不到的', // 分享描述
					link: urls, // 分享链接
					imgUrl:img_url, // 分享图标
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


//动画
$(function() {
	$('.logo').addClass('animated bounce')
	setTimeout(function() {
		$('.top_content').removeClass('display_none')
	}, 1000)
	
	$('.top_content').addClass('animated rubberBand')
	$('.top_content img').addClass('animated bounceIn')
	$('.top02_title').addClass('animated pulse')
	$('.timg007').addClass('animated swing')
})

var _shop = ''
var _shop_pro = ''
//商品渲染

//点击分类切换
$('.lunbotu_header_left').text('全部物资')
var data = location.href;
var arr = data.split("?");
if(data.indexOf("type_id=") != -1){
	//	名字
	var name = arr[1];
	var type_name = name.substring(name.indexOf("type_name=") + 10)
	var type_name = decodeURI(type_name)
	//id
	var id = arr[2]
	var type_id = id.substring(id.indexOf('type_id=')+8)
	
	//	console.log(typeof(type_name)) //str
	$('.lunbotu_header_left').text(type_name)
}

var jingdutiaonum = ''
var startTime = ''
var endTime = ''
//默认状态
function moren(){
	$.ajax({
		type: "get",
		url: "http://www.sunnyun.com/goods",
		async: false,
		data: {
			'type_id':type_id
		},
		success: function(res) {
	//		console.log(res)
				var div = $('<div class="swiper-slide"><ul id="lunbotu_ul"></ul></div>');
				$('.swiper-wrapper').append(div)
				for(var n = 0; n < res.length; n++) {
					$('#lunbotu_ul').append(creatLi(res[n],n,''))
				}
		},
		error: function() {
			console.log('请求失败')
		}
	});
}
moren()
//li结构
function creatLi(res,mm,bb) {
	var html = '<a href="pro_details.html?goods_id=' + res.goods_id + '#neiye">' +
		'<div class="smallimg">' +
		'<img src="' + res.goods_main_img + '"/>' +
		'</div>' +
		'<div class="jiage">' +
		'<div class="tuangoujia">' +
		'团购价：￥' +
		'<span id="tuangoujia_money">' +
		res.group_price +
		'</span>' +
		'</div>' +
		'<div class="shichangjia">' +
		'市场价：￥' +
		'<span id="">' +
		res.price +
		'</span>' +
		'</div>' +
		'</div>' +
		'<div class="shopping_name">' +
		res.goods_name +
		'</div>' +
		'<div class="tuangoushuliang">' +
		'已团购' +
		'<span>' +
		res.goods_is_group +
		'</span>' +
		'件' +
		'</div>' +
		'<div class="layui-progress">' +
		'<div class="layui-progress-bar" >50%</div>' +
		'</div>' +
		'</div>' +
		'<div class="timer_name">' +
		'剩余时间：' +
		'<p class="timer">时间未到</p>' +
		'</div>' +
		'<div class="clear"></div>' +
		'</a>'

	var li = $('<li>').html(html);
	
	var p_timer = li.find('.timer');
	var bar_bar = li.find('.layui-progress-bar')
	jindutiao((res.goods_is_group / res.goods_group) * 100,mm,bar_bar)//进度条
	go(res.goods_end_time, res.goods_start_time, p_timer);//倒计时
	
	return li;
}

//换一批
$('.lunbotu_bottom_right').click(function() {
	$('.swiper-wrapper').html('')
	moren()
})

//搜索
$('.search_box_text').click(function() {
	var searchdata = $('#serchbtn').val()
	$.ajax({
		type: "get",
		url: "http://www.sunnyun.com/goods",
		async: true,
		data: {
			'goods_name': searchdata
		},
		success: function(res) {
			if(res == '') {
				alert('找不到相关产品')
			}
			var div = $('<div class="swiper-slide"><ul id="lunbotu_ul"></ul></div>');
			var ul = div.find('#lunbotu_ul');
			for(var n = 0; n < res.length; n++) {
				//console.log(res[n])
				ul.append(creatLi(res[n],n))
			}
			$('.swiper-wrapper').html(div)
			
		}
	});
})

//进度条
function jindutiao(jingdutiaonum,mm,obj) {
	var n = jingdutiaonum.toString()
	var n = parseInt(n) + '%'
	obj[0].style.width=n
	obj[0].innerHTML=n
}
//轮播图
var mySwiper = new Swiper('.swiper-container', {
	autoplay: 5000, //可选选项，自动滑动
	observer: true,
	observeParents: true,
})

$(window).scroll(function() {
	var windowTop = $(window).scrollTop()

	if(windowTop > 2400) {
		$('.telephone_kefu').removeClass('display_none')

	} else {
		$('.telephone_kefu').addClass('display_none')
	}

})
//电话客服及QQ客服 弹窗
$('.telephone_kefu').click(function(){
	$('.kefuleixing').removeClass('display_none')
})
$('.kefuleixing').click(function(){
	$(this).addClass('display_none')
})
$('.kefuleixing_box').click(function(event){
	event.stopPropagation()
})

//倒计时
function leftTimer(v, obj) {

	var date = new Date(v * 1000); //时间戳为10位需*1000，时间戳为13位的话不需乘1000
	var leftTime = (new Date(date)) - (new Date()); //计算剩余的毫秒数 
	var days = parseInt(leftTime / 1000 / 60 / 60 / 24, 10); //计算剩余的天数 
	var hours = parseInt(leftTime / 1000 / 60 / 60 % 24, 10); //计算剩余的小时 
	var minutes = parseInt(leftTime / 1000 / 60 % 60, 10); //计算剩余的分钟 
	var seconds = parseInt(leftTime / 1000 % 60, 10); //计算剩余的秒数 
	days = checkTime(days);
	hours = checkTime(hours);
	minutes = checkTime(minutes);
	seconds = checkTime(seconds);
	obj[0].innerHTML = days + "天" + hours + "小时" + minutes + "分" + seconds + "秒";
	if(days <= 0 && hours <= 0 && minutes <= 0 && seconds <= 0) {
		window.clearInterval(_ordertimer);
		_ordertimer = null;
		obj[0].innerHTML ='时间已过'
	}

}

function checkTime(i) { //将0-9的数字前面加上0，例1变为01 
	if(i < 10 && i >0) {
		i = "0" + i;
	}
	return i;
}

function go(v, a, obj) {
	//v,结束团购  a,开团时间
	var data1 = new Date(), //现在时间

		data2 = new Date(v * 1000), //结束团购
		data3 = new Date(a * 1000); //开始团购

	var timeEnd = (data1) - (data2) //团购时间结束
	var timeStart = (data3) - (data1) //到团购时间
	if(timeStart > 0) {
			 	return 
	} else {
		_ordertimer = setInterval(function() {
			leftTimer(v, obj)
		}, 1000);
		return
	}

}

//滚动时保存滚动位置
$(window).scroll(function() {
	if($(document).scrollTop() != 0) {
		sessionStorage.setItem("offsetTop", $(window).scrollTop());
	}
});
//onload时，取出并滚动到上次保存位置
window.onload = function() {
	var offset = sessionStorage.getItem("offsetTop");
	$(document).scrollTop(offset);
};



//地址
//var oneIndex = ''
//var pro_str = "<option>--请选择省份--</option>"
//for(var i = 0; i < provinceList.length; i++) {
//	pro_str += '<option value='+ i +" data_name="+provinceList[i].name+' >' + provinceList[i].name + '</option>'
//}
//$('#prov').html(pro_str)
//$('#prov').change(function() {
//	var val = this.value;
//	oneIndex = val
//	var city_str = "<option class=''>--请选择市--</option>"
//	for(var j = 0; j < provinceList[val].cityList.length; j++) {
//		city_str += "<option value=" + j +" data_name="+provinceList[val].cityList[j].name+" >" + provinceList[val].cityList[j].name + "</option>"
//	}
//	$('#city').html(city_str)
//	$('#city').prop('disabled', false);
//})
//$('#city').change(function() {
//	var val = this.value;
//	var country_str = "<option>--请选择区--</option>"
//	console.log(provinceList[oneIndex].cityList[val].areaList)
//	for(var h = 0; h < provinceList[oneIndex].cityList[val].areaList.length; h++) {
//		country_str += "<option value=" + h + " data_name="+provinceList[oneIndex].cityList[val].areaList[h]+" >" + provinceList[oneIndex].cityList[val].areaList[h] + "</option>"
//	}
//	$('#country').html(country_str)
//	$('#country').prop('disabled', false);
//})
//点击提交团购信息弹出
$('.bottom_btn_right').click(function() {
	//提交订单表单
	var shopItem = localStorage.getItem('shopItem', shopItem);
	if($('#telephone').val() == '') {
		alert('必须填入电话号码和姓名')
		return
	}
	if(!shopItem){
		alert('必须选购商品')
		return
	}
	//验证手机号码
	var re = /^1\d{10}$/
	if(!re.test($('#telephone').val())){
		alert('请填入正确的手机号码格式')
		return
	}
	
 
	$('.form_tantan').removeClass('display_none')

	var n = 6

	function abbs(n) {
		var n = n
		if(n < 1) {
			clearInterval(abb)
			$('.form_tantan').addClass('display_none')
			$('.from_box').removeClass('display_none')
		}
	}
	var abb = setInterval(function() {
		n--
		$('.daojishi span').html(n)
		abbs(n)
	}, 1000)
	
	//取值
	shopItem = JSON.parse(shopItem); //把字符串转换成JSON对象
	var _lis = ''
	if(shopItem) {
		for(var b = 0; b < shopItem.length; b++) {
			_lis = ''
			_lis += '<input type="hidden" name="goods[]"  value=' + shopItem[b].goodsid + '-' + shopItem[b].price_id + '-' + shopItem[b].shopNum + '>'
			$('.from_box').append(_lis)
		}
	}
	
	//获取表单值
	var data = $('#froms').serialize();
	console.log(data);
	//AJAX传值
	$.ajax({
		cache: false,
		type: "POST",
		url: "http://www.sunnyun.com/info",
		data: data,
		async: false,
		success: function(msg) {
			if(msg.code == 200) {
//				setTimeout(function() {
////						window.parent.location.href = "{:Url('ActGoods/index')}";
//					},
//					1500);
			} else {
//				$('#submit').removeAttr('disabled');
				alert(msg.msg);
			}
		},
		error: function(msg) {
			$('#submit').removeAttr('disabled');
		}
	})

})

$('.bottom_btn_left').click(function() {
	$('.dingdan').removeClass('display_none')
	$('.from').addClass('display_none')

	$('.dingdan').removeClass('display_none')
	$('.from').addClass('display_none')

	var shopItem = localStorage.getItem('shopItem', shopItem);
	//取值
	shopItem = JSON.parse(shopItem); //把字符串转换成JSON对象
	var _lis = ''
	if(shopItem) {
		var sum = ''
		var zongsum = ''
		for(var b = 0; b < shopItem.length; b++) {

			$('#dingdanul').html('')

			_lis += '<li>' +
				'<div class="dingdan_content_li01">' +
				'<img src="' + shopItem[b].img + '" class="dingdanimg"/>' +
				'</div>' +
				'<div class="dingdan_content_li02">' +
				'<p class="dingdan_content_li02_p01" name="goods[]" >' + shopItem[b].name + '</p>' +
				'<p class="dingdan_content_li02_p02">' +
				'颜色/规格：<span class="yanseguige">' + shopItem[b].size + '</span><br/><span class="yanseguige">单价：&nbsp;￥' +shopItem[b].price +'</span>'+
				'</p>' +
				'</div>' +
				'<div class="dingdan_content_li03">' +
				'<p>￥<span class="dingdantuanjia">' + shopItem[b].tuan_price + '</span></p>' +
				'<p>￥<span class="dingdanjia">' + shopItem[b].price + '</span></p>' +
				'<p>x<span class="kaituanjia">' + shopItem[b].shopNum + '</span></p>' +
				'</div>' +
				'</li>'
			$('#dingdanul').append(_lis)
		}
		//商件总数
		var zongsum = document.getElementsByClassName('kaituanjia')
		var ab = []
		for(var j = 0; j < zongsum.length; j++) {
			var a = parseInt(zongsum[j].innerHTML)
			ab.push(a)
		}
		var jiansum =sums(ab)
		$('#zong_text01').text(jiansum)
		
		//商品价格总数
		var zongjia =document.getElementsByClassName('dingdantuanjia')
		var cd =[]
		for(var bb=0;bb<zongjia.length;bb++){
			var b = parseInt(zongjia[bb].innerHTML)
			cd.push(b)
		}
		console.log(cd)
		var shopjia =sums(cd)
		$('#zong_text02').text(shopjia)
	}
})
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

$('.dingdanchacha').click(function() {
	$('.dingdan').addClass('display_none')
	$('.from').removeClass('display_none')
})

//清楚记录
$('.dele_btn').click(function(event) {
	$('.qingchutan').removeClass('display_none')
	event.stopPropagation();
})
$(document).bind('click', function() {
	$('.qingchutan').addClass('display_none')
})
$('.qingchutan').click(function(event) {
	event.stopPropagation();
})
$('.qingchutan02_left').click(function() {
	$('.qingchutan').addClass('display_none')
})
$('.qingchutan02_right').click(function() {
	localStorage.removeItem('shopItem')
	$('#dingdanul').html('')
	$('#zong_text01').text(0)
	$('#zong_text02').text(0)
	$('.qingchutan').addClass('display_none')
})

