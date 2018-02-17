$(function () {
    $("#sidebar").parent().css("overflow-y","auto");
    $("#sidebar").parent().css("overflow-x","hidden");
	//初始化页面高度
	changeDivHeight();

})


$(document).ready(function(){
    //初始化页面高度
    changeDivHeight();
    $( '.menu-dropdown').click(function(){
        $('#tabs').addtabs();
		var level = $(this).parent("li").attr("level");
		if(level == 1){
			if($(this).hasClass("current")){
				$(this).removeClass("current");
			}else{
				$(this).addClass("current");
			}
		}else{
			$(this).addClass("current");
		}
        $(this).parent().siblings().find(".current").removeClass("current");
        $(this).parent().siblings().find(".submenu").slideUp(200);
		$(this).parent().siblings().find('i.menu').attr("class","menu menu-close");
		if ($(this).parent().is(':has(ul)') ) {
			if($(this).next().is(":visible")){
				$(this).find('i.menu').attr("class","menu menu-close");
				$(this).parent().find('>ul').slideUp(200);
			}else{
				$(this).find('i.menu').attr("class","menu menu-open");
				$(this).parent().find('>ul').slideDown(200);
			}
		}else{
			$(this).css('borderBottom',"none");
		}

		if ($(this).attr('url') != "" && $(this).attr('url') != undefined){
			Addtabs.add({
				id: $(this).attr('data-addtab'),
				title: $(this).attr('title') ? $(this).attr('title') : $(this).html(),
				content: Addtabs.options.content ? Addtabs.options.content : $(this).attr('content'),
				url: $(this).attr('url'),
				ajax: $(this).attr('ajax') ? true : false
			})
		}

		var _obj = $(this).find("a");
		if(typeof(_obj.attr('url')) != "undefined" && _obj.attr('url') != ''){
			Addtabs.add({
				id: _obj.attr('data-addtab'),
				title: _obj.attr('title') ? _obj.attr('title') : _obj.html(),
				content: Addtabs.options.content ? Addtabs.options.content : _obj.attr('content'),
				url: _obj.attr('url'),
				ajax: _obj.attr('ajax') ? true : false
			})
		}
	});

});

//调往首页
function toHomepage(){
	$("#frame").attr("src",BASE+"/user/nav");

}
//退出系统
function exit(){
	mini.confirm("确定要注销吗？","提示", function(action){
		if(action == "ok"){
			window.location.href = BASE+"/user/logout";
		}
	});
}
//页面跳转
function pageJump(url){
	$("#frame").attr("src",url);
}

var $c=function(array){
		var nArray = [];
		for (var i=0;i<array.length;i++)
			nArray.push(array[i]);
		return nArray;}
	;
Array.prototype.each=function(func){
	for(var i=0,l=this.length;i<l;i++) {func(this[i],i);};
};

mini.parse();

function resetPwd(){
	mini.open({
		url: BASE + "/user/resetPwd",
		title: "修改密码", width: 350, height: 250,
	});
}
function reset(){
	window.location.href = BASE+"/user/logout";
}

function openIndex(){
	$('#tabs').addtabs();
	if ($(this).attr('url') != "" && $(this).attr('url') != undefined){
		Addtabs.add({
			id: $(this).attr('data-addtab'),
			title: $(this).attr('title') ? $(this).attr('title') : $(this).html(),
			content: Addtabs.options.content ? Addtabs.options.content : $(this).attr('content'),
			url: $(this).attr('url'),
			ajax: $(this).attr('ajax') ? true : false
		})
	}

	var _obj = $(this).find("a");
	if(typeof(_obj.attr('url')) != "undefined" && _obj.attr('url') != ''){
		Addtabs.add({
			id: _obj.attr('data-addtab'),
			title: _obj.attr('title') ? _obj.attr('title') : _obj.html(),
			content: Addtabs.options.content ? Addtabs.options.content : _obj.attr('content'),
			url: _obj.attr('url'),
			ajax: _obj.attr('ajax') ? true : false
		})
	}
}
function  changeDivHeight(){

	var Height=$(window).height();//获取页面可见高度
	var Width=$(window).width();//获取页面可见宽度
	var mainHeight = Height- $('#menunavbar').height();//tab页整体高度
	var tabContentHeight = mainHeight - $('.nav.nav-tabs').height()-32;//tab页内容高度

	$(".main,#tabs").css("height",mainHeight);
	$(".footer").width(Width - 230);
	$('.tab-content').css('height',tabContentHeight);
	$(".iframeClass").css('height',tabContentHeight);
	$("#tabs").css("left","240px");

	$(".mini-splitter-handler").remove();
}
window.onresize=function(){
	changeDivHeight();
};

$(document).ready(function(){
	$(".showdiv").click(function(){
		var box =300;
		var th= $(window).scrollTop()+$(window).height()/1.6-box;
		var h =document.body.clientHeight;
		var rw =$(window).width()/2-box;
		$(".showbox").animate({top:th,opacity:'show',width:600,height:340,right:rw},500);
		$("#zhezhao").css({
			display:"block",height:$(document).height()
		});
		return false;
	});
	$(".showbox .close,.closeDba").click(function(){
		$(this).parents(".showbox").animate({top:0,opacity: 'hide',width:0,height:0,right:0},300);
		$("#zhezhao").css("display","none");
	});
});

function closeClick(){
	$(".showbox").animate({top:0,opacity: 'hide',width:0,height:0,right:0},500);
	$("#zhezhao").css("display","none");
}


//弹出div
function showDiv(event){
	var text=event.currentTarget.innerText;
	//判断是否显示
	showHider(text);
	$(".styleTitle")[0].innerHTML=text+"<a class='closeDba' onclick='closeClick()' href='#'>关闭</a>";
	var box =300;
	var th= $(window).scrollTop()+$(window).height()/1.6-box;
	var h =document.body.clientHeight;
	var rw =$(window).width()/2-box;
	$(".showbox").animate({top:th,opacity:'show',width:300,height:340,right:rw},500);
	$("#zhezhao").css({
		display:"block",height:$(document).height()
	});
	return false;
}