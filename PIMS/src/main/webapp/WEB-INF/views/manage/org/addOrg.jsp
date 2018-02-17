<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<%@ page contentType="text/html;charset=UTF-8" language="java" %>
<html>
<head>
    <title>org新增</title>
    <%@ include file="../../common/style.jsp"%>
    <%@ include file="../../common/script.jsp"%>
</head>
<body>
<form id="form1" method="post">
    <input name="unitId" class="mini-hidden"/>
    <div align="center" class="formWrap">
        <table class="center" >
            <tr>
                <td class="project_td">
                    <div><i></i>单位编号</div>
                </td>
                <td class="content_td">
                    <input name="unitCode" class="mini-textbox" required="true" emptyText="请输入单位编号"/>
                </td>
                <td class="project_td">
                    <div><i></i>所属单位编号</div>
                </td>
                <td class="content_td">
                    <input name="unitBelong" id="superior"  class="mini-textbox" required="true"/>
                </td>
            </tr>
            <tr >
                <td class="project_td">
                    <div><i></i>单位名称</div>
                </td>
                <td class="content_td">
                    <input name="unitName" class="mini-textbox"/>
                </td>
                <%--<td class="project_td">--%>
                    <%--<div >作业班组范围</div>--%>
                <%--</td>--%>
                <%--<td class="content_td">--%>
                    <%--<input name="classDistanceType" id="linkPhone" class="mini-textbox"/>--%>
                <%--</td>--%>

            </tr>
            <tr>
                <td class="project_td">
                    <div><i></i>单位类别</div>
                </td>
                <td class="content_td">
                    <%--<input id="btnEdit1" name="unitTypeId" class="mini-buttonedit" allowInput="false"--%>
                           <%--onbuttonclick="onButtonEdit" required="true"/>--%>
                    <input id="unitTypeId" name="unitTypeId" class="mini-combobox" textField="text" valueField="id" emptyText="请选择..."
                           data="[{id:'1',text:'局'},{id:'2',text:'段'},{id:'3',text:'车间'},{id:'4',text:'班组'}]"  required="true" allowInput="false" showNullItem="true" nullItemText="请选择..."/>
                </td>
                <%--<td class="project_td">作业分类编号</td>--%>
                <%--<td class="content_td">--%>
                    <%--<input name="checkTypeId" id="linkMan" class="mini-textbox"/>--%>
                <%--</td>--%>
            </tr>
            <tr>
                <td class="project_td">
                    <div><i></i>有效标识</div>
                </td>
                <td class="content_td">
                    <input name="valid" id="superiorCodeInp"  class="mini-textbox"/>
                </td>

                <%--<td class="project_td">对应单位编号</td>--%>
                <%--<td class="content_td">--%>
                    <%--<input name="pwmisUnitCode" id="pwmisunitcode" class="mini-textbox"/>--%>
                <%--</td>--%>
            </tr>
            <tr>
                <td class="project_td">
                    <div>备注</div>
                </td>
                <td class="content_td">
                    <input name = "memo" class="mini-textarea"/>
                </td>
            </tr>
        </table>
        <div class="buttonDiv">
            <a class="mini-btn ok" onclick="onOk()">确&nbsp;定</a>
            <a class="mini-btn cancle" onclick="onCancel()">取&nbsp;消</a>
        </div>
    </div>
</form>
<script type="text/javascript" charset="UTF-8" src="${BASE_FRONT}/app/js/manage/org/addorg.js"></script>
</body>
</html>

