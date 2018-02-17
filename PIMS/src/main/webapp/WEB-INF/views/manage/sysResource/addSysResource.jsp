<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html xmlns="http://www.w3.org/1999/xhtml">
<%@ page contentType="text/html;charset=UTF-8" language="java" %>
<%@ include file="../../common/global.jsp" %>
<html>
<head>
    <title>resource新增</title>
    <%@ include file="../../common/style.jsp"%>
    <%@ include file="../../common/script.jsp"%>
</head>
<body>
<form id="form1" method="post">
    <div class="formWrap" align="center">
        <table class="center" align="center" valign="center">
            <tr>
                <td class="project_td">
                    <div><i></i>资源名称</div>
                </td>
                <td class="content_td">
                    <input name="resourceName" class="mini-textbox" maxlength="8" required="true" vtype="maxLength:100;specialCharacter"
                    />
                </td>
                <td class="project_td">
                    <div><i></i>资源编码</div>
                </td>
                <td class="content_td">
                    <input name="resourceCode" class="mini-textbox" required="true" vtype="maxLength:50;specialCharacter"/>
                </td>
            </tr>
            <tr>
                <td class="project_td">
                    <div><i></i>资源性质</div>
                </td>
                <td class="content_td">
                    <input name="resourceType" class="mini-textbox" required="true" vtype="maxLength:10;specialCharacter"/>
                </td>
                <td class="project_td">
                    <div><i></i>上级资源名称</div>
                </td>
                <td class="content_td">
                    <input id="pResourceName" name="pResourceName" class="mini-buttonedit" onbuttonclick="onButtonEdit"
                           allowinput="false"    required="true" vtype="maxLength:100;specialCharacter"/>
                    <input id="pResourceCode" name="pResourceCode" class="mini-hidden" required="true"  vtype="maxLength:32"/>
                </td>
            </tr>
            <tr>
                <td class="project_td">
                    <div><i></i>资源路径</div>
                </td>
                <td class="content_td">
                    <input name="resourcePath" class="mini-textbox" required="true" vtype="maxLength:100;"
                    />
                </td>
                <td class="project_td">资源权限标志</td>
                <td class="content_td">
                    <input name="resourceSign" class="mini-textbox" vtype="maxLength:25;specialCharacter"/>
                </td>
            </tr>
            </tr>
            <tr>
                <td class="project_td"><div>备注</div></td>
                <td id="beizhu" class="content_td" colspan="3" >
                    <input name="remark" class="mini-textbox" vtype="maxLength:100;"/>
                </td>
            </tr>
        </table>
        <div class="buttonDiv">
            <a class="mini-btn ok" onclick="onOk()">确&nbsp;定</a>
            <a class="mini-btn cancle" onclick="onCancel()">取&nbsp;消</a>
        </div>
    </div>
</form>
<script type="text/javascript" charset="utf-8" src="${BASE_FRONT}/app/js/manage/sysResource/addSysResource.js"></script>
</body>
</html>
