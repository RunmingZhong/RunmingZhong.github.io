$('.back').click(function(){
	window.history.back(-1);
})


$.ajax({
    type: "GET",
    url: "http://www.sunnyun.com/goods_type",
    async: false,
    
    success: function(res){
        console.log(res);
        //渲染左边菜单
        var _li = ''
        var _ulli =''
        var _ulright =''
        for(var i=0;i<res.length;i++){
        	_li +='<li data-cataId='+res[i].type_id+' class="feilei_li ">'+res[i].type_content+'</li>'
//      	 //渲染右边菜单
        var _ulright =''
	        for(var j=0;j<res[i].son.length;j++){
	        	var feileiurl =encodeURI('index.html#shop?type_name='+res[i].son[j].type_content+'?type_id='+res[i].son[j].type_id)// 编码url
	        		_ulright +='<a href="'+feileiurl+'"><li>'+res[i].son[j].type_content+'</li></a>'
	        }
			_ulli +='<ul data-cataId='+res[i].type_id+' class="feilei_li_two disp feilei_li_'+res[i].type_id+'">'+_ulright+'</ul>'
        }
        $('.fenlei_content_left ul').append(_li)
        $('.fenlei_content_right').append(_ulli)
    },
    error: function(msg){
        console.log('请求失败')
    }
});

//切换
$(function(){
	$('.feilei_li:first').addClass('li_active')
	$('.feilei_li_two:first').removeClass('disp')
})

$('.feilei_li').click(function(){
	$(this).addClass('li_active').siblings().removeClass('li_active')
	var cataId =$(this).attr("data-cataId");
	$('.feilei_li_'+cataId).removeClass('disp').siblings().addClass('disp')
})