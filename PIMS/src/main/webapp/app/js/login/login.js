if(top != self){
	 top.location.href = location.href;
}
$(function () {
	$("body").height($(window).height());
	$("body").width($(window).width());

	changeHeight();

	$("#username,#password").focus(function () {
		$(this).parent(".form-item").addClass("select");
		$("#message").html("");
	});
	$("#username,#password").blur(function () {
		$(this).parent(".form-item").removeClass("select");
	});

	//登录验证
	$("#logBtn").click(function () {
		var username = $.trim($("#username").val());
		var password = $.trim($("#password").val());

		if (username == "" && password == "") {
			$("#message").html("请输入用户名和密码");
			return false;
		} else if (username == "") {
			$("#message").html("请输入用户名");
			return false;
		} else if (password == "") {
			$("#message").html("请输入密码");
			return false;
		} else {
			checkCookie();
			$("#myform").submit();
		}
	});

	$("#username,#password,body").keydown(function () {
		if (event.keyCode == 13) {
			$("#logBtn").click();
		}
	});


	//onLoginCookieCheck();
});
function changeHeight(){
	var width = $(window).width();
	var height = $(window).height();
	var imgHeight = $(".loginImg").height();
	var top = (height - 373)/2;
	$(".mainBg").css("left",(width-$(".mainBg").width())/2);
	$(".loginBody").css("top",top);
}
//提交表单时的操作
function checkCookie() {
	if ($('#rememberPwd').is(':checked')) {
		$('#isRememberPwd').val('1');
	}
}
window.onresize = function () {
	$("body").height($(window).height());
	$("body").width($(window).width());
	changeHeight();
};
