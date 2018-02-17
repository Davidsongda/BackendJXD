<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html xmlns="http://www.w3.org/1999/xhtml">
<%@ page language="java" import="java.util.*" pageEncoding="utf-8" %>
<%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c" %>
<head>
    <title>组织机构树</title>
    <%@ include file="../../common/style.jsp"%>
    <%@ include file="../../common/script.jsp"%>
</head>
<body class="tree-body">
<div class="body_tree" >
<div class="mini-layout">
    <div region="west" title="组织机构树" showHeader="true"  width="200" minWidth="100"
         maxWidth="350">
        <div class="searchClass">
            <span class="searchBox">
                    <input id="key" class="mini-textbox" onenter="onKeyEnter" emptyText="请输入"/>
                    <a class="mini-button" iconCls="icon-search" onclick="search()"></a>
             </span>
        </div>
        <ul id="apiTree" class="mini-tree" url="/org/loadOrgTree" style="width: 90%;"
            showTreeIcon="true" textField="TEXT" idField="ID" parentField="PID" resultAsTree="false"></ul>
    </div>
    <div title="center" region="center">
        <iframe src="/users/userListorgCode" id="mainframe" frameborder="0" name="main" border="0"></iframe>
    </div>
</div>
</div>
<script type="text/javascript" charset="UTF-8" src="${BASE_FRONT}/app/js/common/resize.js"></script>
<script type="text/javascript" charset="UTF-8" src="${BASE_FRONT}/app/js/manage/users/userTree.js"></script>
</body>
</html>
