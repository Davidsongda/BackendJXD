<%@ page language="java" import="java.util.*" pageEncoding="utf-8"%>
<%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c" %>
<%
    String path = request.getContextPath();
    String basePath = request.getScheme()+"://"+request.getServerName()+":"+request.getServerPort()+path+"/";
%>
<!DOCTYPE html>
<html>
<head>
    <meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
    <link rel="stylesheet" href="<%=basePath %>app/lib/bootstrap/css/bootstrap.min.css">
    <link rel="stylesheet" href="<%=basePath %>app/lib/bootstrap/css/bootstrap-theme.min.css">
    <script src="<%=basePath %>app/lib/jquery/jquery-1.10.2.min.js"></script>
    <script src="<%=basePath %>app/lib/bootstrap/js/bootstrap.min.js"></script>

    <title>上海动车段生产综合管理平台</title>

    <style type="text/css">
        html,body {
            height: 100%;
            /*background-color:#2AAEC5;*/
        }
        .box {
        <%--background-image: url("<%=basePath %>app/img/loginBackground.png");--%>
            background-color: #1EAAC2;
            margin: 0 auto;
            position: relative;
            width: 100%;
            height: 100%;

        }
        .top-box{
            height: 35px;
        }
        .form-group-right {
            margin-bottom: 0px !important;
            text-align:right;
        }
        .form-group-left {
            margin-bottom: 0px !important;
            text-align:left;
            height:35px;
        }
        .font-left{
            color: #FFFFFF;
            height: 35px;
            line-height: 35px;
            margin-right:3px;
        }
        .font-right{
            color: #FFFFFF;
            height: 35px;
            line-height: 35px;
            margin-right:3px;
        }
        .frame{
            width: 100%;
            height: 100%;
            /*background-color: #ccd232;*/
            border: 0px;
            background-image: url("<%=basePath %>app/img/loginBackground.png");
        }
        a {
            color: #FFFFFF;
            text-decoration: none;
        }
        a:hover,a:visited, a:focus ,a:visited span, a:focus span{
            color:#fff;
            text-decoration: none;
        }
        a:hover  span{
            color: #ffffff;
            text-decoration: none;
            zoom: 1;
            text-shadow:1px 1px 1px #FFFFFF;
        }
        .font-icon{
            color: #FFFFFF;
            font-size: 18px;
        }
        .col-md-12,.col-xs-12{
            padding-left:0px;
            padding-right: 0px;
        }
    </style>

</head>

<body>
<div id="box" class="box">
    <div class="top-box"  >
        <div  class="col-md-2 col-xs-6 form-group-left" style="padding-top: 5px;padding-left: 0px;" >
            <img  src="<%=basePath %>app/img/iconTop.png"/>
            <%--<img  src="<%=basePath %>app/img/iconTop.png"/>--%>
        </div>
        <div  class="col-md-8 col-xs-3 form-group-left">
                <span class="font-left" >
                    <a href="#" onclick="toHomepage();"><span class="glyphicon glyphicon-home font-left"></span><span>首页</span></a>
                </span>
        </div>
        <div  class="col-md-2 col-xs-3 form-group-right">
            <%--${sessionScope.userInfo.username}--%><a href="#" onclick="exit();"><span class="glyphicon glyphicon-off font-right"></span><span>退出</span></a>
        </div>
    </div>
    <div id="frame-box" class="col-md-12  col-xs-12 frame-box">
        <iframe id="frame" class="frame" src="<%=basePath %>user/nav">
        </iframe>
    </div>
</div>

</body>

</html>
<script type="text/javascript">
    $(document).ready(function(){
        var height = $("#box").height()-40;
        $("#frame-box").css("height",height); // 设置顶部
    });
    function toHomepage(){
        $("#frame").attr("src","<%=basePath %>user/nav"); // 设置顶部
    }
    function exit(){
        window.location.href = "<%=basePath %>user/logout";
    }
</script>