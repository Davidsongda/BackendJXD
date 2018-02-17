<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">

<%@ page contentType="text/html;charset=UTF-8" language="java" %>
<%@taglib prefix="shiro" uri="http://shiro.apache.org/tags" %>
<html>
<head>
    <title>用户管理分页查询</title>
    <%@ include file="../../common/style.jsp" %>
    <%@ include file="../../common/script.jsp" %>
</head>
<body class="list-body">
<div class="body_main">
    <div class="search-box clearfix">
        <div class="form-group">
            <label>姓名:</label>
            <input id="names" class="mini-textbox" vtype="maxLength:10;specialCharacter" emptyText="请输入"/>
        </div>
        <div class="form-group">
            <a class="mini-button" onclick="search()">查&nbsp;询</a>
            <div class="clearfix"></div>
        </div>
    </div>
    <input type="hidden" id="orgCodeOfOrgTreeForSavingFilter" value="${orgCode}">
    <div id="datagrid1" class="mini-datagrid"
         url="/users/userPageList?orgCode=${orgCode}" sizeList="[30,40,50]" pageSize="30" idField="logonId"
         allowAlternating="true" multiSelect="true">
        <div property="columns">
            <div type="checkcolumn" width="30"></div>
            <div type="indexcolumn" width="40" headerAlign="center" align="center">序号</div>
            <div field="logonId" width="140" headerAlign="center" align="left">登录名称</div>
            <div field="name" width="100" headerAlign="center" align="left">姓名</div>
            <div field="departId" width="140" headerAlign="center" align="center">机构编号</div>
            <div field="departName" width="140" headerAlign="center" align="left">机构名称</div>
            <%--这些字段不知道要不要显示在列表中--%>
            <%-- <div field="idEntId" width="150"  headerAlign="center" align="center">身份编号</div>--%>
            <%-- <div field="personId" width="150"  headerAlign="center" align="center">人事编码</div>--%>
            <%-- <div field="issj" width="120"  headerAlign="center" align="center">是否是管理员</div>--%>
            <%--  <div field="mainId" width="150"  headerAlign="center" align="center">主账号标志</div>--%>
            <div field="state" width="120" headerAlign="center" align="center">状态</div>
            <%--  <div field="gzzh" width="150"  headerAlign="center" align="center">工作证号</div>--%>
            <div field="telephone" width="150" headerAlign="center" align="center">联系电话</div>
        </div>
    </div>
</div>
<script type="text/javascript" charset="UTF-8" src="${BASE_FRONT}/app/js/common/resize.js"></script>
<script type="text/javascript" charset="UTF-8" src="${BASE_FRONT}/app/js/manage/org/usersListForGrantPower.js"></script>
</body>
</html>
