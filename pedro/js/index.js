		var vum = new Vue({
			el:'.content',
			data(){
				return{
					lunboShop:[
						{src:"img/imges/lunbo001.png"},
						{src:"img/imges/lunbo002.png"},
						{src:"img/imges/lunbo003.png"},
						{src:"img/imges/lunbo004.png"},
					],
					Home_shop:[
						{src:["img/singleshop/singleshop001_00.png",
							  'img/singleshop/singleshop001_01.png',
							  'img/singleshop/singleshop001_02.png',
							  'img/singleshop/singleshop001_03.png'
							 ],
						name:"奇妙圆舞曲",topImg:'img/asdfsdahome.png'},
						
						{src:["img/singleshop/singleshop002_01.png",
							  'img/singleshop/singleshop002_02.png',
							  'img/singleshop/singleshop002_03.png',
							  'img/singleshop/singleshop002_04.png'
							 ]
						,name:"慵懒惬意时光",topImg:'img/qiyishiguangHome.png'},
						{src:["img/singleshop/singleshop003_01.png",
							  'img/singleshop/singleshop003_02.png',
							  'img/singleshop/singleshop003_03.png',
							 ]
						,name:"街头文化",topImg:'img/jietouwenhua.gif'},
					],
				}
			},
			methods:{
			}
		})
		var vum02=new Vue({
			el:'#shopPubu_Show',
			data(){
				return{
					shop_pubuliu:[
						{src:'img/shop/shop001.png',name:'女士金属锁扣翻盖单肩包',price:'￥469'},
						{src:'img/shop/shop002.png',name:'小牛漆皮穆勒鞋',price:'￥569'},
						{src:'img/shop/shop003.png',name:'简约人造皮革手提包',price:'￥669'},
						{src:'img/shop/shop004.png',name:'草泥马细节白边运动鞋',price:'￥469'},
						{src:'img/shop/shop005.png',name:'可拆卸ipad插袋公文包',price:'￥1069'},
						{src:'img/shop/shop006.png',name:'马街扣乐福鞋',price:'￥539'},	
						{src:'img/shop/shoppubuliu001.png',name:'尖头奥赛鞋',price:'￥539'},
						{src:'img/shop/shoppubuliu002.png',name:'尖头奥赛鞋',price:'￥539'},
						{src:'img/shop/shoppubuliu003.png',name:'尖头奥赛鞋',price:'￥539'},
						{src:'img/shop/shoppubuliu004.png',name:'女士方跟饰鞋头高跟鞋',price:'￥539'},
						{src:'img/shopShow/shopShow004_01.png',name:'绗缝细节高帮运动鞋',price:'￥539'},
						{src:'img/shopShow/shopShow003_01.png',name:'绗缝细节高帮运动鞋',price:'￥539'},
						
					]
				}
			},
		})
		
		var mySwiper = new Swiper ('.swiper-container', {
			    direction: 'horizontal',//滑动方向vertical垂直 horizontal水平
			    loop: true,
			    autoplay:2500,//轮播
			    autoplayDisableOnInteraction:false,//点击后 默认自动轮播
			    // 如果需要分页器
			    spaceBetween:20,//每个slide间隔多少
			    pagination: '.swiper-pagination',
			    initialSlide:1,//初始页面为第二张
			  }) 
			  
			  //第二个轮播图
		var mySwiper02 = new Swiper ('.swiper-container02', {
			    direction: 'horizontal',//滑动方向vertical垂直 horizontal水平
			    // 如果需要分页器
			    spaceBetween:20,//每个slide间隔多少
			  }) 

		//登录页面
		$('#myLogo').on('touchstart',function(){
			$('#HomePage').addClass('activeHide').animate({left:'-15rem'});
			$('#loginPage').removeClass('activeHide').animate({left:'0px'})
		})
		//点击登录返回按钮
		$('#closeBtn_denglu').on('touchstart',function(){
			$('#HomePage').removeClass('activeHide').animate({left:'0px'});
			$('#loginPage').addClass('activeHide').animate({left:'15rem'});
		})
		//点击创建用户按钮
		$('.loginPage_create li').on('touchstart',function(){
			$('#loginPage').addClass('activeHide').animate({left:'15rem'});
			$('#registerPage').removeClass('activeHide').animate({left:'0px'})
			$('.registerPage_content input').val('')
		})
		//点击取消按钮（创建用户界面内）
		$('#registerPage_quxiao').on('touchstart',function(){
			$('#registerPage').addClass('activeHide').animate({left:'-15rem'})
			$('#loginPage').removeClass('activeHide').animate({left:'0px'});
			$('.registerPage_content input').val('')//清空
		})
		//点击确认页面
		$('.registerPage_content input').change(function(){
			$('#registerPage_queren').removeAttr('disabled')
		})
		$('#registerPage_queren').on('click',function(){
			//注册页面
			//验证性别
			var flag = true;
			//验证手机号
			if($('#registerPage_content_phone').val() == "") {
				alert("手机号不能为空")
				flag = false;
			} else if(!/^1[3|4|5|8][0-9]\d{4,8}$/.test($('#registerPage_content_phone').val())) {
				alert("手机格式不正确")
				flag = false;
			}
			//验证密码
			if($('#registerPage_content_passone').val() == ""){
				alert("登入密码不能为空")
				flag = false;
			} else if(!/^[A-Za-z0-9_]+$/.test($('#registerPage_content_passone').val())) {
				alert("密码仅支持英文、数字或者下划线");
				flag = false;
			}
			//重复密码
			if($('#registerPage_content_passtwo').val()==""){
				alert("确认密码不能为空")
				flag = false;
			}else if($('#registerPage_content_passtwo').val() == $('#registerPage_content_passone').val()){
//				spans[4].innerHTML = "正确"
			}else{
				flag = false;
				alert("密码不正确") 
			}
			//如果没问题，提交数据
			if(flag == true) {
				$('#loginPage').removeClass('activeHide').animate({left:'0px'});
				$('#registerPage').addClass('activeHide').animate({left:'-15rem'});
			}
			
		})
		//购物袋页面
		$('#shopLogo').on('touchstart',function(){
			$('#HomePage').addClass('activeHide').animate({left:'-15rem'});
			$('#shopBag').removeClass('activeHide').animate({top:'0px'})
		})
		//点击购物袋返回按钮
		$('#closeBtn_shopBag').on('touchstart',function(){
			$('#HomePage').removeClass('activeHide').animate({left:'0px'});
			$('#shopBag').addClass('activeHide').animate({top:'26rem'})
		})
		
		//商品分类页面
		for(var i=0;i<$('#Home_Navname li').length;i++){
			$('#Home_Navname li').eq(i).on('touchstart',function(){
				$('#upNav_name').text($(this).text());
				$('#shopNavname li').eq($(this).index()).addClass('font_active').siblings().removeClass('font_active')
				$('#HomePage').addClass('activeHide').animate({left:'-15rem'});
			    $('#menuNav').removeClass('activeHide').animate({left:'0px'});
			    //显示哪一项内容
			   $('#menuContentZhong div').eq($(this).index()).removeClass('menuContent_active').siblings().addClass('menuContent_active')
			})
			$('#shopNavname li').eq(i).on('touchstart',function(){
				//内部点击选项
				$('#upNav_name').text($(this).text());
				$(this).addClass('font_active').siblings().removeClass('font_active')
				$('#menuContentZhong div').eq($(this).index()).removeClass('menuContent_active').siblings().addClass('menuContent_active')
			})
		}
		//点击商品分类返回按钮
		$('#menuNav_closeBtn').on('touchstart',function(){
			$('#HomePage').removeClass('activeHide').animate({left:'0px'});
			$('#menuNav').addClass('activeHide').animate({left:'15rem'});
			$('#upNav_name').text(' ');//清空
		})
		//点击商品分类中的内容
		$('#menuContentZhong li').on('touchstart',function(){
			$('#topimg img').addClass('activeHide')
			$('#menuNav').addClass('activeHide').animate({left:'15rem'});
			$('#singleShopName_shopPubu_Show').text($(this).text())
			$('#shopPubu_Show').removeClass('activeHide').animate({left:'0px'})
			setlogo=0
		})
		//点击商品瀑布返回按钮
		$('#closeBtn_shopPubu_Show').on('touchstart',function(){
			$('#shopPubu_Show').addClass('activeHide').animate({left:'15rem'});
			console.log(setlogo)
			if(setlogo == 1){
				$('#HomePage').removeClass('activeHide').animate({left:'0px'});
			}else{
				$('#menuNav').removeClass('activeHide').animate({left:'0px'});	
			}
		})
		//点击商品瀑布中的商品
		for(var i=0;i<$('.content_shopPubu_Show_li').length;i++){
			$('.content_shopPubu_Show_li').eq(i).on('click',function(){
				$(location).attr('href', 'singleShop.html?1');
			})
		}
		//点击轮播图1中的商品图片(到商品瀑布)
		for(var i=0;i<$('.lunbotu_content1').length;i++){
			$('.lunbotu_content1').eq(i).on('click',function(){
				$('#singleShopName_shopPubu_Show').text('最新单品');
				$('#shopPubu_Show').removeClass('activeHide').animate({left:'0px'})
				$('#topimg img').prop('src','').addClass('activeHide')
				$('#HomePage').addClass('activeHide').animate({left:'-15rem'});
				scrollTo(0,0);
			})
		}
		//点击更多按钮
		$('#more_Btn').on('touchstart',function(){
				$('#singleShopName_shopPubu_Show').text('最新单品');
				$('#shopPubu_Show').removeClass('activeHide').animate({left:'0px'})
				$('#topimg img').prop('src','').addClass('activeHide')
				$('#HomePage').addClass('activeHide').animate({left:'-15rem'});
				scrollTo(0,0);
		})
		//点击轮播图2中商品图片
		var unn = 0
		var setlogo = 0;
		for(var i=0;i<$('.singleShop').length;i++){
			$('.singleShop').eq(i).on('click',function(){//双击
					setlogo =1;
						$('#singleShopName_shopPubu_Show').text($('.single_name').eq($(this).index()).text());
						$('#shopPubu_Show').removeClass('activeHide').animate({left:'0px'})
						$('#topimg img').prop('src',vum.Home_shop[$(this).index()].topImg).removeClass('activeHide')
						$('#HomePage').addClass('activeHide').animate({left:'-15rem'});
						scrollTo(0,0);
			})
		}
		//点击最新单品下的六个商品
		for(var i=0;i<$('.newShop li').length;i++){
			$('.newShop li').eq(i).on('click',function(){
				$(location).attr('href', 'singleShop.html?0');
			})
		}
		//点击购物袋里即刻添置
		 $('#tianzhiBtn').on('touchstart',function(){
		 		$('#singleShopName_shopPubu_Show').text('最新单品');
				$('#shopPubu_Show').removeClass('activeHide').animate({left:'0px'})
				$('#topimg img').prop('src','').addClass('activeHide')
				scrollTo(0,0);
				$('#shopBag').addClass('activeHide').animate({top:'26rem'})
		 })
		