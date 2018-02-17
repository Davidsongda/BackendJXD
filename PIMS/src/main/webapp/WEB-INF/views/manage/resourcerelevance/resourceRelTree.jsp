
<%@ page language="java" import="java.util.*" pageEncoding="utf-8" %>
<%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c" %>
<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">

<html xmlns="http://www.w3.org/1999/xhtml">
<head>
    <%@ include file="../../common/style.jsp"%>
    <%@ include file="../../common/script.jsp"%>
</head>
<body class="tree-body pop-list">
    <div class="body_tree" >
        <div class="auth-div search-box">
            <div class="hidden">
                <label>角色编码:</label>
                <input id="roleCode" class="mini-textbox" value=""/>
            </div>
            <div class="hidden">
                <label>角色Id:</label>
                <input id="roleId" class="mini-textbox" value=""/>
            </div>
            <div class="searchDiv">
                <label>角色名称:</label>
                <input id="roleName" class="mem-name mini-textbox"/>
                <a class="mini-button" onclick="saveAuthor()">保存授权</a>
            </div>
        </div>
        <div class="mini-layout">
            <div region="west" title="资源树" showHeader="true" width="200" minWidth="100" maxWidth="350">
                <div class="searchClass">
                    <span class="searchBox">
                        <input id="key" class="mini-textbox" onenter="onKeyEnter" emptyText="请输入"/>
                        <a class="mini-button" iconCls="icon-search" onclick="search()"></a>
                    </span>
                </div>
                <ul id="apiTree" class="mini-tree" url="${BASE_FRONT}/sysResource/loadSysResourceTree" style="width:90%;"
                    expandOnLoad="0" showTreeIcon="true" textField="TEXT" idField="ID" parentField="PID" resultAsTree="false">
                </ul>
            </div>
            <div title="center" region="center" bodyStyle="overflow:hidden;">
                <iframe src="${BASE_FRONT}/roleRelevance/sysResourceList" id="mainframe" frameborder="0" name="main" border="0"></iframe>
            </div>
        </div>

    </div>
</body>
<script type="text/javascript" charset="UTF-8" src="${BASE_FRONT}/app/js/common/resize.js"></script>
<script type="text/javascript" charset="utf-8" src="${BASE_FRONT}/app/js/manage/resourcerelevance/resourceRelTree.js"></script>
</html>
