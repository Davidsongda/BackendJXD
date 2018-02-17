<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<%@ page contentType="text/html;charset=UTF-8" language="java" %>
<%@taglib prefix="shiro" uri="http://shiro.apache.org/tags" %>
<html>
<head>
    <title>用户管理分页查询</title>
    <%@ include file="../../common/style.jsp"%>
    <%@ include file="../../common/script.jsp"%>

<body class="list-body" >
<div class="body_main">
    <div class="search-box clearfix">
        <div class="form-group">
            <label>姓名:</label>
            <input id="name" class="mini-textbox" vtype="maxLength:10;specialCharacter" emptyText="请输入"/>
        </div>
        <div class="form-group">
            <a class="mini-button" onclick="search()">查&nbsp;询</a>
        </div>
        <div class="form-group last-group">
            <shiro:hasPermission name="usersList:add">
                <a class="mini-btn" onclick="add()">新&nbsp;增</a>
            </shiro:hasPermission>
            <shiro:hasPermission name="usersList:edit">
                <a class="mini-btn" onclick="edit()">修&nbsp;改</a>
            </shiro:hasPermission>
            <shiro:hasPermission name="usersList:del">
                <a class="mini-btn" onclick="del()">删&nbsp;除</a>
            </shiro:hasPermission>
        </div>
    </div>
    <div id="datagrid1" class="mini-datagrid"
         url="/users/userPageList?orgCode=${orgCode}" sizeList="[10,20,40,50]" pageSize="20" idField="id"
         allowAlternating="true" multiSelect="true">
        <div property="columns">
            <div type="checkcolumn" width="30"></div>
            <div type="indexcolumn" width="40" headerAlign="center" align="center">序号</div>
            <div field="logonId" width="140"  headerAlign="center" align="left">登录名称</div>
            <div field="name" width="100"  headerAlign="center" align="left">姓名</div>
            <div field="departId" width="140"  headerAlign="center" align="center">机构编号</div>
            <div field="departName" width="140"  headerAlign="center" align="left">机构名称</div>
            <div field="state" width="120"  headerAlign="center" align="center">状态</div>
            <div field="telephone" width="150"  headerAlign="center" align="center">联系电话</div>
        </div>
    </div>
    <input type="hidden" id="orgCode" value="${orgCode}"/>
</div>
<script type="text/javascript" charset="utf-8" src="${BASE_FRONT}/app/js/common/resize.js"></script>
<script type="text/javascript" charset="utf-8" src="${BASE_FRONT}/app/js/manage/users/usersList.js"></script>

</body>
</html>
