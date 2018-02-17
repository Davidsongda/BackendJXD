<%--grantPower.jsp--%>
<%@ page contentType="text/html;charset=UTF-8" language="java" %>
<%@ include file="../../common/style.jsp" %>
<%@ include file="../../common/global.jsp" %>
<html>
<head>
    <title>分页</title>
    <%@ include file="../../common/style.jsp" %>
    <%@ include file="../../common/script.jsp" %>
</head>
<body class="list-body body1">
<div class="body_main">
    <div class="search-box">
        <div class="form-group">
            <label>角色名称:</label>
            <input id="names" class="mini-textbox" emptyText="请输入" vtype="specialCharacter"/>
        </div>
        <div class="form-group">
            <a class="mini-button" onclick="search()">查&nbsp;询</a>
        </div>
        <div class="clearfix"></div>
    </div>
    <div id="datagrid1" class="mini-datagrid"
         url="/role/pageList" sizeList="[30,40,50]" pageSize="30" idField="ROLE_ID"
         allowAlternating="true" multiSelect="false">
        <div property="columns">
            <div type="indexcolumn" align="center" headerAlign="center" width="40">序号</div>
            <div field="ROLE_ID" name="loginnameColumn" width="10" headerAlign="center" align="center">
                ID
            </div>
            <div field="ROLE_CODE" width="100" align="center" headerAlign="center">角色编码</div>
            <div field="ROLE_NAME" width="100" headerAlign="center" align="left">角色名称</div>
            <div field="MENU" width="100" align="center" headerAlign="center">关联用户</div>
            <div field="REMARK" width="100" align="left" headerAlign="center">备注</div>
        </div>
    </div>
</div>
<script charset="UTF-8" src="${BASE_FRONT}/app/js/common/resize.js"></script>
<script src="${BASE_FRONT}/app/js/common/checkData.js" type="text/javascript"></script>
<script type="text/javascript" charset="UTF-8" src="${BASE_FRONT}/app/js/manage/org/grantpower.js"></script>
</body>
</html>
