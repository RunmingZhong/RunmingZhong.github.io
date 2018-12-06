//自适应高度
var windowheight = $(window).innerHeight()
$('.header').height(windowheight)

//背景音乐
//$('.music').css('animation','yuan 5s linear infinite')
//$('.music_box').css('animation','scales 1s linear infinite')
var audio_one =document.getElementsByClassName('audio')[0]
	audio_one.volume = 0.3
//	audio_one.play()
	
$('.music').click(function(){
            $('.music').css('animation','yuan 5s linear infinite')
			$('.music_box').css('animation','scales 1s linear infinite')
		var audio_one = document.getElementsByClassName('audio')[0]
		if (audio_one.paused){ 
	        audio_one.play(); 
	        $('.music').css('animation-play-state','running')
	        $('.music_box').css('animation-play-state','running')
	        $('.music').css('background-image','url(./img/public/music-on.png)')
	        
	    } 
	    else{ 
	        audio_one.pause(); 
	        $('.music').css('animation-play-state','paused')
	        $('.music_box').css('animation-play-state','paused')
	        $('.music').css('background-image','url(./img/public/music-off.png)')
	    } 

})
//右边导航栏
$('.x_input').click(function(event){
	event.stopPropagation();
	setTimeout(function(){
		if($('.Nav_right_bigbox').attr('class')=='Nav_right_bigbox display_none'){
			$('.Nav_right_bigbox').removeClass('display_none')
			$('.Nav_right_bigbox').css('animation','scales_Nav01 1s ease')
			setTimeout(function(){
				$('.Nav_right_contentul li').eq(0).removeClass('display_none')
				$('.Nav_right_contentul li').eq(0).addClass('animated bounceInRight')
			},500)
			setTimeout(function(){
				$('.Nav_right_contentul li').eq(1).removeClass('display_none')
				$('.Nav_right_contentul li').eq(1).addClass('animated bounceInRight')
			},700)
			setTimeout(function(){
				$('.Nav_right_contentul li').eq(2).removeClass('display_none')
				$('.Nav_right_contentul li').eq(2).addClass('animated bounceInRight')
			},900)
		}else{
			xiaoshi_nav()
		}
	},200)
	
})
$('.Nav_right_contentul li a').click(function(){
	xiaoshi_nav()
})
//导航栏消失
function xiaoshi_nav(){
	$('.Nav_right_bigbox').css('animation','scales_Nav02 1s ease')
	$('.Nav_right_contentul li').addClass('display_none')
	setTimeout(function(){
		$('.Nav_right_bigbox').addClass('display_none')
	},1000)
}
$(document).bind('click', function() {
	xiaoshi_nav()
})
$('.Nav_right_bigbox').click(function(event){
	event.stopPropagation();
})

//文字阴影跟随鼠标移动
var shine = new Shine(document.getElementById('zuopin_bigbox_titles'));
function handleMouseMove(event) {
  shine.light.position.x = event.clientX;
  shine.light.position.y = event.clientY;
  shine.draw();
}
window.addEventListener('mousemove', handleMouseMove, false);

//打印字

//$(window).scroll(function(){
//	var aa = $(window).scrollTop()
//	var bb = $(window).height()
//	var cc = $('.typing').offset().top
//	var dd = aa+bb
//	if(dd>cc){
//		typing()
//	}
//})
//  $(dcument).ready(function(){
//      typing();
//  })

//  var text = '';//p标签里对应的字符串
//  var index = 0;//text字符串的下标
//  var id = '';//setTimeout()的返回值,用于关闭clearTimeout(id)
//  function typing()
//  {
//      text = $(".typing").text();
//      $(".typing").text("");
//      $(".typing").show();
//      typed();
//  }
//  result = "";
//  function typed(){
//      result += text.charAt(index);
//      $(".typing").text(result + (index & 1 ? "_" : " "));
//      if(index <　text.length - 1)
//      {
//          index++;
//          id = setTimeout("typed()", 100);
//      }
//      else
//          clearTimeout(id);
//  }

    
