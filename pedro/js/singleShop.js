	var sign = window.location.href.split('?')[1];
		var vuu = new Vue({
			el:'#singleShopNeiye',
			data(){
				return{
					sign:sign,
					shopShowCon:[
						[
							{shopShow:[{src:"img/shopShow/shopShow001_01.png",name:'小牛漆皮穆勒鞋',size:'34码',price:'￥569'},
										{src:"img/shopShow/shopShow001_02.png",size:'35码'},
										{src:"img/shopShow/shopShow001_03.png",size:'36码'},
										{src:"img/shopShow/shopShow001_04.png",size:'37码'},
										{src:"img/shopShow/shopShow001_05.png",size:'38码'},
										{src:"img/shopShow/shopShow001_06.png",size:'39码'},
										{src:"img/shopShow/shopShow001_07.png",size:'40码'},
							]},
							{shopShow:[{src:"img/shopShow/shopShow002_01.png",name:'小牛漆皮穆勒鞋',size:'34码'},
										{src:"img/shopShow/shopShow002_02.png",size:'35码'},
										{src:"img/shopShow/shopShow002_03.png",size:'36码'},
										{src:"img/shopShow/shopShow002_04.png",size:'37码'},
										{src:"img/shopShow/shopShow002_05.png",size:'38码'},
										{src:"img/shopShow/shopShow002_06.png",size:'39码'},
										{src:"img/shopShow/shopShow002_07.png",size:'40码'},
							]},
							{shopShowInformation:[
									'鞋跟形状：细跟',
									'适合场所：休闲/派对',
									'皮质特征：漆皮',
									'鞋底材质：复合底',
									'内里材质：复合底',
									'跟高：9cm',
									'闭合方式：套脚',
									'COLOUR：黑色/米色',
							]},
						],
						/*第二组数据*/
						[
							{shopShow:[{src:'img/shopShow/shopShow003_01.png',name:'绗缝细节高帮运动鞋',size:'39码',price:'￥539'},
										{src:'img/shopShow/shopShow003_02.png',size:'40码'},
										{src:'img/shopShow/shopShow003_03.png',size:'41码'},
										{src:'img/shopShow/shopShow003_04.png',size:'42码'},
										{src:'img/shopShow/shopShow003_05.png',size:'43码'},
							]},
							{shopShow:[
								{src:'img/shopShow/shopShow004_01.png',name:'绗缝细节高帮运动鞋',size:'39码'},
								{src:'img/shopShow/shopShow004_02.png',size:'40码'},
								{src:'img/shopShow/shopShow004_03.png',size:'41码'},
								{src:'img/shopShow/shopShow004_04.png',size:'42码'},
								{src:'img/shopShow/shopShow004_05.png',size:'43码'},
							]},
							{shopShowInformation:[
									'适合场所：运动休闲',
									'皮质特征：尼龙/压花皮/织物',
									'鞋底材质：复合底',
									'内里材质：平纹针织材料',
									'帮面材质：尼龙/超细纤维/织物',
									'闭合方式：系带',
									'COLOUR：黑色/军绿色',
							]},
						],
					],
					shopShowButtom:[
						[
							{src:'img/shopShow/shopShow001_01.png'},
							{src:'img/shopShow/shopShow002_01.png'},
						],
						[
							{src:'img/shopShow/shopShow003_01.png'},
							{src:'img/shopShow/shopShow004_01.png'},
						]
					],
					index:0,
				}
			},
		});
		
		console.log(vuu.sign)
		var mySwiper = new Swiper ('.swiper-container', {
			    direction: 'vertical',//滑动方向vertical垂直 horizontal水平
			    // 如果需要分页器
			    pagination: '.swiper-pagination',
			    centeredSlides : true,//居中
			  }) 
			  
		//点击信息按钮
		var b = 0;
		$('#xinxi').on('touchstart',function(){
			$('#xinxiTrueName').text($('#singleShopName').text())
			b++;
			if(b%2==1){
				$('#xinxi').prop('src','img/xinxi02.png')
				$('#xinxiContent').css('height',$(window).height())
				$('#xinxiContent').fadeIn(1000)
				$('#liji').animate({bottom:'-10rem'}).addClass('singleShopNeiye_ative')
				$('#jiaru').animate({bottom:'-10rem'}).addClass('singleShopNeiye_ative');
			}else{
				$('#xinxi').prop('src','img/xinxi.png')
				$('#xinxiContent').fadeOut(1000)
				b=0
			}
		})
		//tab切换
		for(var i =0;i<$('#shopButtomShow li').length;i++){
			$('#shopButtomShow li').eq(0).addClass('boxborder')
			$('#shopButtomShow li').eq(i).on('touchstart',function(){
				$('#shopButtomShow li').eq($(this).index()).siblings().removeClass('boxborder')
				$(this).addClass('boxborder');
				vuu.index=$(this).index()//第几屏
			})
		}
		
		//点击立即购买
		var a = 0
		$('#lijiBuy').on('touchstart',function(){
			a++;
			if(a%2==1){
				$('#liji').removeClass('singleShopNeiye_ative').animate({bottom:'1.94rem'});
				$('.jiesuanBtn').addClass('singleShopNeiye_ative').animate({right:'-4rem'});
				$('#jiaru').animate({bottom:'-10rem'}).addClass('singleShopNeiye_ative');
			}else{
				$('#liji').animate({bottom:'-10rem'}).addClass('singleShopNeiye_ative')
				a=0
			}
		})
		for(var i=0;i<$('#liji li').length;i++){
			$('#liji li').eq(i).on('touchstart',function(){
				$('.jiesuanBtn').addClass('singleShopNeiye_ative').animate({right:'-4rem'})
				$('.jiesuanBtn').eq($(this).index()).removeClass('singleShopNeiye_ative').animate({right:'0px'})
			})
		}
		//点击加入购物袋
		var c = 0
		$('#joinBuyBag').on('touchstart',function(){
			c++;
			if(c%2==1){
				$('#jiaru').removeClass('singleShopNeiye_ative').animate({bottom:'1.94rem'});
				$('.jiaruBtn').addClass('singleShopNeiye_ative').animate({right:'-4rem'})
				$('#liji').animate({bottom:'-10rem'}).addClass('singleShopNeiye_ative')
			}else{
				$('#jiaru').animate({bottom:'-10rem'}).addClass('singleShopNeiye_ative');
				c=0
			}
		})
		for(var i=0;i<$('#jiaru li').length;i++){
			$('#jiaru li').eq(i).on('touchstart',function(){
				$('.jiaruBtn').addClass('singleShopNeiye_ative').animate({right:'-4rem'})
				$('.jiaruBtn').eq($(this).index()).removeClass('singleShopNeiye_ative').animate({right:'0px'})
			})
		}
		//点击添加按钮（购物袋）
		$('.jiaruBtn').on('touchstart',function(){
			$('#jiaru').animate({bottom:'-10rem'}).addClass('singleShopNeiye_ative');
			$('#tianjianSucces').fadeIn()
			setTimeout(function(){
				$('#tianjianSucces').fadeOut()
			},1200)
		})
		//点击参考容量	  
		$('#rongliangcankao').on('touchstart',function(){
			$('#singleShopNeiye').addClass('singleShopNeiye_ative').animate({left:'-15rem'});
			$('#rongliang').fadeIn(1000)
		})
		$('#rongliang').on('touchstart',function(){
			$('#singleShopNeiye').removeClass('singleShopNeiye_ative').animate({left:'0px'});
			$('#rongliang').fadeOut(1000)
		})
		
		//点击结算按钮
		var buyMenu = document.getElementById('buyMenu');
		buyMenu.style.height = $(window).height()+'px';
		$('.jiesuanBtn').on('touchstart',function(){
			$('.money_Zong span').text($('#moneyShow').text())
			$('#buyMenu').removeClass('singleShopNeiye_ative').animate({left:'0px'})
			$('#singleShopNeiye').addClass('singleShopNeiye_ative').animate({left:'-15rem'})
		})
		$('#closeBtn_buyMenu').on('touchstart',function(){
			$('#singleShopNeiye').removeClass('singleShopNeiye_ative').animate({left:'0px'})
			$('#buyMenu').addClass('singleShopNeiye_ative').animate({left:'15rem'})
			event.preventDefault()//ios解决touchstart点透 阻止浏览器默认行为
		})
		$('#address textarea').on('input',function(){//按钮 disable
			if($('#address textarea').val()==""){
			}else{
				$('#zhifu_Btn').css({'background':'#f890cd','color':'white'}).removeAttr('disabled')
			}
		})
		//点击支付按钮
		$('#zhifu_Btn').on('click',function(){
			$('#buyMenu').addClass('singleShopNeiye_ative').animate({left:'15rem'})
			$('#author').fadeIn()
		})
		$('#author').on('touchstart',function(){
			$('#author').fadeOut()
			$('#buyMenu').removeClass('singleShopNeiye_ative').animate({left:'0px'})
		})