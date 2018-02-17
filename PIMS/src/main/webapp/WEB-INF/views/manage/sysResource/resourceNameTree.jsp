<%@ page contentType="text/html;charset=UTF-8" language="java" %>
<%@ include file="../../common/global.jsp" %>
<html>
<head>
    <title>请选择组织</title>
    <%@ include file="../../common/style.jsp" %>
    <%@ include file="../../common/script.jsp" %>

</head>
<body class="body tree-body1">
<div class="searchClass">
   <span class="searchBox">
       <input id="key" class="mini-textbox" onenter="onKeyEnter" emptyText="请输入"/>
       <a class="mini-button" iconCls="icon-search" onclick="search()"></a>
    </span>
</div>
<div class="tree-div">
    <ul id="apiTree" class="mini-tree" style="width:90%;"  url="${BASE_FRONT}/sysResource/loadSysResourceTree" showTreeIcon="true" textField="TEXT" idField="ID" parentField="PID" resultAsTree="false" expandOnLoad="0"></ul>
</div>
<div class="fix-button">
    <a class="mini-btn" onclick="ok()">确&nbsp;定</a>
</div>
</body>
<script charset="UTF-8" src="${BASE_FRONT}/app/js/common/resize.js"></script>
<script charset="utf-8"
        src="${BASE_FRONT}/app/js/manage/sysResource/resourceNameTree.js"></script>
</html>
