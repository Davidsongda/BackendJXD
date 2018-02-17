<%@ page language="java" import="java.util.*" pageEncoding="utf-8" %>
<%@ include file="../common/global.jsp" %>
<!DOCTYPE html>
<html>
<head>
    <title>密码重置</title>
    <%@ include file="../common/title.jsp" %>
    <%@ include file="../common/meta.jsp" %>
    <%@ include file="../common/style.jsp" %>
    <%@ include file="../common/script.jsp" %>
    <link rel="stylesheet" href="${BASE_FRONT}/app/css/common.css">
    <link rel="stylesheet" href="${BASE_FRONT}/app/css/popup.css">
    <%--<link href="${BASE_FRONT}/app/css/sys/resetPwd.css" rel="stylesheet" type="text/css"/>--%>
</head>
<body>
<form id="form1" method="post">
    <div class="formWrap">
        <table class="center" border="1" cellpadding="0" cellspacing="0">
            <tr>
                <td class="project_td">
                    <div><i></i>原密AAA码</div>
                </td>
                <td class="content_td" colspan="3">
                    <input name="pwd" id="pwd" class="mini-password" required="true"
                           emptyText="" vtype="rangeLength:6,12" onvalidation="onVerifyPWD"/>
                </td>
            </tr>
            <tr>
                <td class="project_td">
                    <div><i></i>新密码</div>
                </td>
                <td class="content_td" colspan="3">
                    <input id="newPwdFirst" name="newPwdFirst" class="mini-password" required="true"
                           emptyText="" vtype="rangeLength:6,12" onvalidation="onVerifyPWD"/>
                </td>
            </tr>
            <tr>
                <td class="project_td">
                    <div><i></i>确认密码</div>
                </td>
                <td class="content_td" colspan="3">
                    <input id="newPwdSecond" name="newPwdSecond" class="mini-password" vtype="rangeLength:6,12"
                           required="true"
                           emptyText="" onvalidation="onVerifyPWD" onblur="verifyPWD1()"/>
                </td>
            </tr>
        </table>
        <div class="buttonDiv">
            <a class="mini-btn ok" onclick="resetPwd()">确定</a>
            <a class="mini-btn cancle" onclick="onCancel()">取消</a>
        </div>
    </div>
</form>
<script>
    mini.parse();
    var form = new mini.Form("form1");
    function onVerifyPWD(e) {
        if (e.isValid) {
            var PWDTrue = /^[0-9a-zA-z]{6,12}$/gi;
            if (e.value.indexOf(" ") != -1) {
                e.errorText = "密码不允许输入空格";
                e.isValid = false;
                return false;
            }
            if (PWDTrue.test(e.value) == false) {
                e.errorText = "密码为6-12位字符，区分大小写";
                e.isValid = false;
            }
        }
    }
    function verifyPWD1() {
        var newPwdSecond = mini.get("newPwdSecond").getValue();
        var newPwdFirst = mini.get("newPwdFirst").getValue();
        if (newPwdFirst == newPwdSecond) {
            return true;
        } else {
            mini.alert("确认密码与新密码不一致");
            return false;
        }
    }
    function onOk(e) {
        resetPwd();
    }

    // 保存
    function resetPwd() {
        if (verifyPWD1()) {
            var o = form.getData();
            form.validate();
            if (form.isValid() == false)
                return;
            var json = mini.encode([o]);
            $.ajax({
                url: BASE + "/user/resetPwdData",
                type: "post",
                dataType: "json",
                data: o,
                cache: false,
                async: false,
                success: function (data) {
                    if (data.code == -1) {
                        mini.alert("原密码错误，请重新输入");
                    } else {
                        mini.alert("修改成功", "确定", closeWindos);
                        function closeWindos() {
                            window.CloseOwnerWindow("ok");
                        }

                    }
                },
                error: function (data) {
                    mini.alert("保存失败");
                    // window.CloseOwnerWindow("ok")
                }
            });
        }
    }

    function onCancel(e) {
        window.CloseOwnerWindow("ok");
    }
</script>
</body>
</html>

