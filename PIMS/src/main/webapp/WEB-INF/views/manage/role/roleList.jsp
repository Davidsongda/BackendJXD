<%@ page contentType="text/html;charset=UTF-8" language="java" %>
<%@taglib prefix="shiro" uri="http://shiro.apache.org/tags" %>
<html>
<head>
    <title>分页</title>
    <%@ include file="../../common/style.jsp" %>
    <%@ include file="../../common/script.jsp" %>
</head>
<body class="list-body body1">
<div class="body_main">
    <div class="search-box clearfix">
        <div class="form-group">
            <label>角色名称:</label>
            <input id="names" class="mini-textbox" emptyText="请输入" vtype="specialCharacter"/>
        </div>
        <div class="form-group">
            <a class="mini-button" onclick="search()">查&nbsp;询</a>
        </div>
        <div class="form-group last-group">
            <shiro:hasPermission name="roleList:add">
                <a class="mini-btn" onclick="add()">新&nbsp;增</a>
            </shiro:hasPermission>
            <shiro:hasPermission name="roleList:edit">
                <a class="mini-btn" onclick="edit()">修&nbsp;改</a>
            </shiro:hasPermission>
            <shiro:hasPermission name="roleList:del">
                <a class="mini-btn" onclick="del()">删&nbsp;除</a>
            </shiro:hasPermission>
        </div>
    </div>


    <div id="datagrid1" class="mini-datagrid"
         url="/role/pageList" sizeList="[30,40,50]" pageSize="30" idField="id"
         allowAlternating="true" multiSelect="true">
        <div property="columns">
            <div type="checkcolumn" width="30"></div>
            <div type="indexcolumn" align="center" headerAlign="center" width="40">序号</div>
            <div field="ROLE_ID" name="loginnameColumn" width="40" headerAlign="center" align="center">ID
            </div>
            <div field="ROLE_CODE" width="100" align="center" headerAlign="center">角色编码</div>
            <div field="ROLE_NAME" width="100" headerAlign="center" align="center">角色名称</div>
            <div field="REMARK" width="100" align="left" headerAlign="center">角色描述</div>
        </div>
    </div>
    <script type="text/javascript" charset="utf-8" src="${BASE_FRONT}/app/js/manage/role/role.js"></script>
    <script type="text/javascript" charset="UTF-8" src="${BASE_FRONT}/app/js/common/resize.js"></script>
</div>
</body>
</html>
