var username = document.getElementById("username");
var iphone = document.getElementById("iphone");
var textd = document.getElementById("textd");
//var textdd = document.getElementById("textdd");
var btn = document.getElementById("btn");
//var p1 = document.getElementById("p1")
var spans = document.getElementsByTagName("span")
var passt = document.getElementById("passt");
var pass =document.getElementById("pass");
//判定条件
	btn.onclick = function() {
	var flag = true;
//验证用户名
if(username.value == "") {
	spans[0].innerHTML = "用户名不能为空";
	flag = false;
} else if(!/^[\u4E00-\u9FA5A-Za-z0-9_]+$/.test(username.value)) {
	spans[0].innerHTML = "仅支持中英文、数字或者下划线";
	flag = false;
};
//验证手机号
if(iphone.value == "") {
	spans[1].innerHTML = "手机号不能为空";
	flag = false;
} else if(!/^1[3|4|5|8][0-9]\d{4,8}$/.test(iphone.value)) {
	spans[1].innerHTML = "手机格式不正确";
	flag = false;
} else {
	spans[1].innerHTML = "";
}
//验证密码
if(pass.value == "") {
	spans[3].innerHTML = "密码不能为空";
	flag = false;
} else if(!/^[A-Za-z0-9_]+$/.test(pass.value)) {
	spans[3].innerHTML = "密码仅支持英文、数字或者下划线";
	flag = false;
} else {
	spans[3].innerHTML = "";
}
//重复密码
if(passt.value==""){
	spans[4].innerHTML = "密码不能为空"
	flag = false;
}else if(pass.value == passt.value){
	spans[4].innerHTML = "正确"
}else{
	flag = false;
	spans[4].innerHTML = "密码不正确"
}
//如果没问题，提交数据
if(flag == true) {
	alert("提交中...");
	location.href="denglu.html";
}
}
