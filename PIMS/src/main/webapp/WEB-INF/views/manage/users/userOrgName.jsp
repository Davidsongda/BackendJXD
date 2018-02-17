<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html xmlns="http://www.w3.org/1999/xhtml">
<%@ page contentType="text/html;charset=UTF-8" language="java" %>
<%@ include file="../../common/global.jsp" %>
<html>
<head>
    <%@ include file="../../common/style.jsp"%>
    <%@ include file="../../common/script.jsp"%>
</head>
<body class="tree-body1">
<div class="searchClass">
    <span class="searchBox">
        <input id="key" class="mini-textbox" onenter="onKeyEnter" emptyText="请输入"/>
        <a class="mini-button" iconCls="icon-search" onclick="search()"></a>
    </span>
</div>
<div class="tree-div">
    <ul id="apiTree" class="mini-tree" url="/users/getOrgName" style="width:90%;" showTreeIcon="true" textField="TEXT" idField="ID" parentField="PID" resultAsTree="false" expandOnLoad="0"></ul>
</div>
<div class="fix-button">
    <a class="mini-btn" onclick="ok()">确&nbsp;定</a>
</div>
</body>
<script charset="UTF-8" src="${BASE_FRONT}/app/js/common/resize.js"></script>
<script type="text/javascript" charset="utf-8"
        src="${BASE_FRONT}/app/js/manage/users/userOrgName.js"></script>
</html>
