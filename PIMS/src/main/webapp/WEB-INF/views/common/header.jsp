<%@ page import="com.tails.system.model.manage.Users" %>
<%@ page pageEncoding="UTF-8" %>
<%@taglib prefix="shiro" uri="http://shiro.apache.org/tags" %>

<div id="menunavbar">
    <div class="navTop">
        <img src="${BASE_FRONT}/app/img/main/topBg.png" alt=""/>
        <div class="logo"></div>
        <div class="logoRight  clearfix">
            <ul>
                <li class="user">欢迎您，<%=((Users) session.getAttribute("userInfo")).getName() %></li>
                <li class="index" onclick="openIndex();" data-addtab="首页" title="首页" url="/page/homepage">
                    <span>首页</span>
                </li>
                <li class="reset" onclick="resetPwd();">
                    <span>修改密码</span>
                </li>
                <li class="exit" onclick="exit()">
                    <span>注销</span>
                </li>
            </ul>
        </div>
    </div>
</div>
