<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<%@ page contentType="text/html;charset=UTF-8" language="java" %>
<%@ include file="../../common/global.jsp" %>
<%@taglib prefix="shiro" uri="http://shiro.apache.org/tags" %>
<html>
<head>
    <title>资源分页</title>
    <%@ include file="../../common/style.jsp" %>
    <%@ include file="../../common/script.jsp" %>
</head>
<body class="list-body">
<div class="body_main">
    <div class="search-box clearfix">
        <div class="form-group">
            <label>资源名称:</label>
            <input id="names" class="mini-textbox" emptyText="请输入" vtype="specialCharacter"/>
            <input id="incloudF" name="incloudF" class="mini-checkbox" text="是否包含下级" value="Y" trueValue="Y"
                   falseValue="N"/>
        </div>
        <div class="form-group">
            <a class="mini-button" onclick="search()">查&nbsp;询</a>
        </div>
        <div class="form-group last-group">
            <shiro:hasPermission name="sysResource:add">
                <a class="mini-btn" onclick="add()">新&nbsp;增</a>
            </shiro:hasPermission>
            <shiro:hasPermission name="sysResource:edit">
                <a class="mini-btn" onclick="edit()">修&nbsp;改</a>
            </shiro:hasPermission>
            <shiro:hasPermission name="sysResource:del">
                <a class="mini-btn" onclick="del()">删&nbsp;除</a>
            </shiro:hasPermission>
        </div>
    </div>
    <div id="datagrid1" class="mini-datagrid"
         url="/sysResource/pageList?pResourceCode=${pid}" sizeList="[30,40,50]" pageSize="30" idField="id"
         allowAlternating="true" multiSelect="true">
        <div property="columns">
            <div type="checkcolumn" width="30"></div>
            <div type="indexcolumn" width="40" headerAlign="center">序号</div>
            <div field="RESOURCE_ID" width="100" headerAlign="center" align="center" visible="false">
                ID
            </div>
            <div field="RESOURCE_NAME" width="100" headerAlign="center" align="left">资源名称</div>
            <div field="RESOURCE_TYPE" width="100" align="center" headerAlign="center">资源性质</div>
            <div field="RESOURCE_PATH" width="100" align="left" headerAlign="center">资源路径</div>
            <div field="RESOURCE_SIGN" width="100" align="center" headerAlign="center">资源权限标志</div>
            <div field="P_RESOURCE_NAME" width="100" align="left" headerAlign="center">上级资源</div>
            <div field="CREATE_TIME" dateFormat="yyyy-MM-dd" width="100" align="center"
                 headerAlign="center">创建时间
            </div>
            <div field="REMARK" width="150" align="left" headerAlign="center">备注</div>
        </div>
    </div>
</div>
<script type="text/javascript" charset="UTF-8" src="${BASE_FRONT}/app/js/common/resize.js"></script>
<script type="text/javascript" charset="utf-8"
        src="${BASE_FRONT}/app/js/manage/sysResource/sysResourceList.js"></script>
</body>
</html>
