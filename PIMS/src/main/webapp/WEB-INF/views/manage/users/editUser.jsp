<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html xmlns="http://www.w3.org/1999/xhtml">
<%@ page contentType="text/html;charset=UTF-8" language="java" %>
<html>
<head>
    <title>用户修改</title>
    <%@ include file="../../common/style.jsp"%>
    <%@ include file="../../common/script.jsp"%>
</head>
<body>
<form id="form1" method="post">
    <div class="formWrap" align="center">
        <table class="center" cellpadding="0" cellspacing="0">
            <tr>
                <td class="project_td">
                    <div><i></i>登录名称</div>
                </td>
                <td class="content_td">
                    <input name="logonId" class="mini-textbox"  enabled="false" allowInput="false"/>
                </td>
                <td class="project_td">
                    <div><i></i>姓名</div>
                </td>
                <td class="content_td">
                    <input name="name" class="mini-textbox" required="true" vtype="maxLength:10;specialCharacter"/>
                </td>
            </tr>
            <tr>
                <td class="project_td">
                    <div><i></i>机构名称</div>
                </td>
                <td class="content_td">
                    <input id="orgName" name="departName" class="mini-buttonedit" onbuttonclick="onButtonEdit"
                           required="true" vtype="maxLength:40" allowInput="false"/>
                    <input id="orgCode" name="departId" class="mini-hidden"/>
                </td>
                <td class="project_td">
                    <div><i></i>状态</div>
                </td>
                <td class="content_td">
                    <div name="state" class="mini-combobox" data="[{ id: '在职', text: '在职' },{ id:'离职', text: '离职' }]"
                         textField="text" valueField="id"  vtype="maxLength:2" required="true" onvalidation="onStateValidation">
                    </div>
                </td>
               <%-- <td class="project_td">
                    <div><i></i>身份编号</div>
                </td>
                <td class="content_td">
                    <input name="idEntId" class="mini-textbox" required="true" vtype="maxLength:10"/>
                </td>--%>
            </tr>
           <%-- <tr>
                <td class="project_td">
                    <div><i></i>人事编码</div>
                </td>
                <td class="content_td">
                    <input name="personId" class="mini-textbox" required="true" vtype="maxLength:10"/>
                </td>
                <td class="project_td">
                    <div><i></i>是否管理员</div>
                </td>
                <td class="content_td">
                    <div name="issj" class="mini-combobox" data="[{ id: '是', text: '是' },{ id:'否', text: '否' }]"
                         textField="text" valueField="id"  vtype="maxLength:1">
                    </div>
                </td>
            </tr>
            <tr>
                <td class="project_td">
                    <div><i></i>主账号标志</div>
                </td>
                <td class="content_td">
                    <input name="mainId" class="mini-textbox" required="true"/>
                </td>
                <td class="project_td">
                    <div><i></i>状态</div>
                </td>
                <td class="content_td">
                    <div name="state" class="mini-combobox" data="[{ id: '在职', text: '在职' },{ id:'离职', text: '离职' }]"
                         textField="text" valueField="id"  vtype="maxLength:2">
                    </div>
                </td>
            </tr>
            <tr>
                <td class="project_td">
                    <div><i></i>登录标识</div>
                </td>
                <td class="content_td">
                    <input name="snlogonId" class="mini-textbox" required="true"  vtype="maxLength:5"/>
                </td>
                <td class="project_td">
                    <div><i></i>工作证号</div>
                </td>
                <td class="content_td">
                    <input name="gzzh" class="mini-textbox" required="true" vtype="maxLength:10"/>
                </td>
            </tr>--%>
            <tr>
                <td class="project_td">
                    <div><i></i>联系电话</div>
                </td>
                <td class="content_td">
                    <input name="telephone" class="mini-textbox" required="true" vtype="int"  onvalidation="onTelephoneValidation"/>
                </td>
            </tr>
        </table>
        </center>
        <div  class="buttonDiv">
            <a class="mini-btn ok" onclick="onOk()">确&nbsp;定</a>
            <a class="mini-btn cancle" onclick="onCancel()" >取&nbsp;消</a>
        </div>
    </div>
</form>
<script type="text/javascript" charset="utf-8" src="${BASE_FRONT}/app/js/manage/users/editUser.js"></script>
</body>
</html>

