<%@ page language="java" import="java.util.*" pageEncoding="utf-8" %>
<%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c" %>
<%
    String path = request.getContextPath();
    String basePath = request.getScheme() + "://" + request.getServerName() + ":" + request.getServerPort() + path + "/";
%>
<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html xmlns="http://www.w3.org/1999/xhtml">
<head>
    <meta http-equiv="Content-Type" content="text/html; charset=utf-8"/>
    <title>上海动车段生产综合管理平台</title>
    <link rel="shortcut icon" href="${BASE_FRONT}/app/img/favicon.ico" type="image/x-icon">
    <link rel="stylesheet" href="<%=basePath %>app/lib/bootstrap/css/bootstrap.min.css">
    <link rel="stylesheet" href="<%=basePath %>app/lib/bootstrap/css/bootstrap-theme.min.css">
    <link rel="stylesheet" href="<%=basePath %>app/css/login/login.css">
    <!--[if lt IE 9]>
    <script src="<%=basePath %>app/lib/html/html5shiv.min.js"></script>
    <script src="<%=basePath %>app/lib/html/respond.min.js"></script>
    <![endif]-->
    <script src="<%=basePath %>app/lib/jquery/jquery-1.10.2.min.js"></script>
    <script src="<%=basePath %>app/lib/bootstrap/js/bootstrap.min.js"></script>
    <script src="${BASE_FRONT}/app/js/login/login.js"></script>
</head>
<body>
<div class="login-main">
    <div class="loginBody">
        <div class="mainBg">
            <div class="loginImg">
                <div class="login-desc">
                    <img src="${BASE_FRONT}/app/img/login/data.png" alt=""/>
                    <img src="${BASE_FRONT}/app/img/login/car.png" alt=""/>
                    <img src="${BASE_FRONT}/app/img/login/test.png" alt=""/>
                </div>
                <div class="text"></div>
            </div>
            <div class="loginForm">
                <form id="myform" action="/user/login" method="post">
                    <div class="form-logo">
                        <img src="${BASE_FRONT}/app/img/login-title.png" alt=""/>
                    </div>
                    <div class="loginInner">
                        <div class="form-item">
                            <span class="icon-user"></span>
                            <input class="user" type="text" id="username" name="logonId" placeholder="请输入用户名"/>
                        </div>
                        <div class="form-item form-pwd">
                            <span class="icon-pwd"></span>
                            <input class="pwd" type="password" id="password" name="password" placeholder="请输入密码"/>
                        </div>
                        <%--<input type="checkbox" id="rememberPwd"/>记住密码(7天)--%>
                        <%--<input type="hidden" id="isRememberPwd" name="isRememberPwd" value="0"/>--%>
                        <div class="form-item-last">
                            <div id="message">
                                <c:if test="${not empty message}">
                                    ${message}
                                </c:if>
                            </div>
                            <button type="button" id="logBtn">登&nbsp;&nbsp;录</button>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    </div>
    <div class="footer">
        金现代信息产业股份有限公司 Copyright &reg; 2017 支持电话：0531-88872666-8923
    </div>
</div>
</body>
</html>
<%--<script type="text/javascript">--%>
    <%--function onLoginCookieCheck() {--%>
        <%--var uName = '';--%>
        <%--var uPass = '';--%>
        <%--<c:if test="${not empty usernameCookie}">uName = '${usernameCookie}';</c:if>--%>
        <%--<c:if test="${not empty passwordCookie}">uPass = '${passwordCookie}';</c:if>--%>
        <%--if (uName) {--%>
            <%--$("#username").val(uName);--%>
            <%--if (uPass) {--%>
                <%--$("#password").val(uPass);--%>
            <%--}--%>
        <%--}--%>
    <%--}--%>
<%--</script>--%>