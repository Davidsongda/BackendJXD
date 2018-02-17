mini.parse();
//防止保存多次的参数
var checkSubmitFlg = true;
var form = new mini.Form("form1");
//点击保存
function onOk(e) {
    SaveData();
}
//保存数据的方法
function SaveData() {
    if (checkSubmitFlg) {
        var o = form.getData();
        form.validate();
        if (form.isValid() == false) {
            validNoticeAlert();
            return;
        }
        var json = mini.encode([o]);
        $.ajax({
            url: "/demo/saveUser",
            type: 'post',
            dataType: "json",
            data: o,
            cache: false,
            async: false,
            success: function (data) {
                if (data.code == -1) {
                    mini.alert("保存失败");
                } else if (data.code == 2) {
                    mini.alert("改登录名已经存在请重新输入");
                } else {
                    checkSubmitFlg = false;
                    mini.alert("保存成功");
                    window.CloseOwnerWindow("ok")
                }
            },
            error: function (data) {
                window.CloseOwnerWindow("ok")
            }
        });
    }
}
//点击弹出选择树
function onButtonEdit(e) {
    var btnEdit = this;
    mini.open({
        url: "/demo/userOrgName",
        showMaxButton: false,
        title: "选择组织结构名称",
        width: 250,
        height: 400,
        ondestroy: function (action) {
            var orgName = action.TEXT;
            mini.get("orgName").setValue(orgName);
            mini.get("orgName").setText(orgName);
            var orgCode = action.ID;
            mini.get("orgCode").setValue(orgCode);
        }
    });
}
//点击取消
function onCancel(e) {
    window.CloseOwnerWindow("ok");
}