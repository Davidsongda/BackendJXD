/**
 * Created by Administrator on 2017/4/19.
 */
mini.parse();
var form = new mini.Form("form1");
//点击保存
function onOk(e) {
    SaveData();
}
//保存数据的方法
function SaveData() {
    var o = form.getData();
    form.validate();
    if (form.isValid() == false){
        validNoticeAlert();
        return;
    }
    var json = mini.encode([o]);
    $.ajax({
        url: "/users/updateUser",
        type: 'post',
        dataType: "json",
        data: o,
        cache: false,
        async: false,
        success: function (data) {
            if (data.code == -1) {
                mini.alert("修改失败","提示", onCancel);
            } else {
                mini.alert("修改成功","提示", onCancel);
            }
        },
        error: function (data) {
            mini.alert("修改失败","提示", onCancel);
        }
    });
}
//获取编辑数据的方法
function SetData(data) {
    if (data.action == "edit") {
        //跨页面传递的数据对象，克隆后才可以安全使用
        data = mini.clone(data);
        var id = data.id;
        $.ajax({
            type: "post",
            data: {userId: id},
            url: "/users/setUserData",
            cache: false,
            success: function (text) {
                var o = mini.decode(text);
                mini.get("orgName").setValue(o.departName);
                mini.get("orgName").setText(o.departName);
                form.setData(o);
                mini.get("newlogonId").setValue(id);
            }
        });
    }
}
//弹出选择树的方法
function onButtonEdit(e) {
    var btnEdit = this;
    mini.open({
        url: "/users/userOrgName",
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
function onCancel() {
    window.CloseOwnerWindow("ok");
}