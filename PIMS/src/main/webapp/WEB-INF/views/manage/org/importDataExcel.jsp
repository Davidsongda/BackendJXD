<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<%@ page contentType="text/html;charset=UTF-8" language="java" %>
<html>
<head>
    <title>org导入</title>
    <%@ include file="../../common/style.jsp"%>
    <%@ include file="../../common/script.jsp"%>
</head>
<body>
<form id="form1" action="/org/saveExcelData" enctype="multipart/form-data" method="post" >
    <div align="center" class="formWrap">
        <table class="center" >
            <tr>
                <td class="project_td">导入文件：</td>
                <td class="content_td" colspan="3">
                    <input type="file" name="file" id="file" multiple="multiple" style="border:1px solid cornflowerblue;"/>
                </td>
            </tr>
            <tr>
                <td class="project_td" colspan="3" style="color: red;" align="left">*导入文件必须为xls文件</td>
                <td class="project_td"> </td>
            </tr>
        </table>
        <div class="buttonDiv">
            <a class="mini-btn ok" onclick="onOk()">导&nbsp;入</a>
            <a class="mini-btn cancle" onclick="onCancel()">取&nbsp;消</a>
        </div>
    </div>
</form>
<script type="text/javascript">
    function onOk(){
        var fileName = document.getElementById("form1").file.value;
        if(fileName == ""){
            mini.alert("请选择导入文件，文件扩展名为dmp!","提示");
            return;
        }else{
            var n = fileName.lastIndexOf(".xls");
            var len = fileName.length;
            if(n==-1 || (n != len-4)){
                alert("请选择正确的数据文件，文件扩展名为xls!");
                return;
            }
        }
        var form = new FormData(document.getElementById("form1"));
        $.ajax({
            url:"/org/uploadExcel",
            type:"post",
            data:form,
            processData:false,
            contentType:false,
            success:function(data){
                mini.alert("导入成功","提示", onCancel);
            },
            error:function(e){
                mini.alert("导入失败","提示");
            }
        });
    }
    function onCancel() {
        window.CloseOwnerWindow("ok");
    }
</script>
</body>
</html>

