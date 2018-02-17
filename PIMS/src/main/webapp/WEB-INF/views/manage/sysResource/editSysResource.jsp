<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html xmlns="http://www.w3.org/1999/xhtml">
<%@ page contentType="text/html;charset=UTF-8" language="java" %>
<%@ include file="../../common/global.jsp" %>
<html>
<head>
    <title>修改资源页面</title>
    <%@ include file="../../common/style.jsp"%>
    <%@ include file="../../common/script.jsp"%>
</head>
<body>
<form id="form1" method="post">
    <input name="RESOURCE_ID" class="mini-hidden"/>
    <div class="formWrap" align="center">
        <table class="center" align="center">
            <tr>
                <td class="project_td">
                    <div><i></i>资源名称</div>
                </td>
                <td class="content_td">
                    <input name="RESOURCE_NAME" class="mini-textbox" required="true"  vtype="maxLength:100;specialCharacter"/>
                </td>

                <td class="project_td">
                    <div><i></i>资源编码</div>
                </td>
                <td class="content_td">
                    <input name="RESOURCE_CODE" class="mini-textbox" required="true" vtype="maxLength:50;specialCharacter"/>
                </td>
            </tr>
            <tr>
                <td class="project_td">
                    <div><i></i>资源性质</div>
                </td>
                <td class="content_td">
                    <input name="RESOURCE_TYPE" class="mini-textbox" required="true" vtype="maxLength:10;specialCharacter"/>
                </td>
                <td class="project_td">
                    <div><i></i>上级资源名称</div>
                </td>
                <td class="content_td">
                    <input id="pResourceName" name="P_RESOURCE_NAME" class="mini-buttonedit"
                        allowinput="false"   onbuttonclick="onButtonEdit" required="true"vtype="maxLength:100;specialCharacter"/>
                    <input id="pResourceCode" name="P_RESOURCE_CODE" class="mini-hidden" required="true"
                           vtype="maxLength:32"/>
                </td>
            </tr>
            <tr>
                <td class="project_td">
                    <div><i></i>资源路径</div>
                </td>
                <td class="content_td">
                    <input name="RESOURCE_PATH" class="mini-textbox" required="true"  vtype="maxLength:100;"/>
                </td>
                <td class="project_td">资源权限标志</td>
                <td class="content_td">
                    <input name="RESOURCE_SIGN" class="mini-textbox"  vtype="maxLength:25; specialCharacter"/>
                </td>
            </tr>
            </tr>
            <tr>
                <td class="project_td"><div>备注</div></td>
                <td class="content_td" colspan="3">
                    <input name="REMARK" class="mini-textbox" vtype="maxLength:100;" />
                </td>
            </tr>
        </table>
    </div>
    <div class="buttonDiv">
        <a class="mini-btn ok" onclick="onOk()" >确&nbsp;定</a>
        <a class="mini-btn cancle" onclick="onCancel()">取&nbsp;消</a>
    </div>
</form>
<script type="text/javascript" charset="utf-8"
        src="${BASE_FRONT}/app/js/manage/sysResource/editSysResource.js"></script>
</body>
</html>
