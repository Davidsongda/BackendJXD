<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html xmlns="http://www.w3.org/1999/xhtml">
<%@ page contentType="text/html;charset=UTF-8" language="java" %>
<html>
<head>
    <title>role新增</title>
    <%@ include file="../../common/style.jsp"%>
    <%@ include file="../../common/script.jsp"%>
</head>
<body>
<form id="form1" method="post">
    <div  align="center" class="formWrap">
        <table class="center" cellpadding="0" cellspacing="0">
            <tr class="first_tr">
                <td class="project_td"><div>id</div></td>
                <td class="content_td"><input id="id" class="mini-textbox"  name="id" /></td>
            </tr>
            <tr>
                <td class="project_td" width: 10%;><div><i></i>角色编码</div></td>
                <td class="content_td">
                    <input name="code" class="mini-textbox" emptyText="请输入编码" required = "true" vtype="maxLength:50;specialCharacter" />
                </td>
            </tr>
            <tr>
                <td class="project_td"><div><i></i>角色名称</div></td>
                <td class="content_td">
                    <input name="name" class="mini-textbox"  maxlength="8" emptyText="请输入名称" required = "true" vtype="maxLength:100;specialCharacter" />
                </td>
            </tr>
            <tr>
                <td class="project_td"><div>角色描述</div></td>
                <td class="content_td">
                    <input name="shortName" class="mini-textbox" emptyText="请输入描述" vtype="maxLength:100;specialCharacter"/>
                </td>
            </tr>

        </table>
        <div class="buttonDiv">
            <a class="mini-btn ok" onclick="onOk()">确&nbsp;定</a>
            <a class="mini-btn cancle" onclick="onCancel()">取&nbsp;消</a>
        </div>
    </div>
</form>
<script type="text/javascript" charset="utf-8" src="${BASE_FRONT}/app/js/manage/role/addRole.js"></script>
</body>
</html>
