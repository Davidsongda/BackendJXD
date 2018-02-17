mini.parse();
var form = new mini.Form("form1");
//审核的数据
function SetData(data) {
    if (data.action == "edit") {
        //跨页面传递的数据对象，克隆后才可以安全使用
        data = mini.clone(data);
        var ids = data.id;
        $.ajax({
            type: "post",
            data: {id: ids},
            url: "/caseUpload/selectPublishCaseUploadByByPrimaryKey",
            cache: false,
            async: false,
            success: function (text) {
                var o = mini.decode(text);
                mini.get("name").setValue(o.users.name);
                /* mini.get("telephone").setValue(o.users.telephone);*/
                mini.get("departName").setValue(o.users.departName);
                mini.get("versionCode").setValue(o.versionCode);
                mini.get("id").setValue(o.id);
            }
        });
    }
}
//确定发布
function publishEnsure() {
    var id = mini.get("id").getValue();
    var name = mini.get("name").getValue();
    var departName = mini.get("departName").getValue();
    var versionCode = mini.get("versionCode").getValue();
    var ip = mini.get("ipAddress").getValue();
    var remark = mini.get("remark").getValue();
    form.validate();
    if (form.isValid() == false) {
        return;
    }
    $.ajax({
        data: {id: id, name: name, departName: departName, versionCode: versionCode, remark: remark, ip: ip},
        url: "/caseUpload/editPublishByPrimaryKey",
        type: 'post',
        cache: false,
        async: false,
        success: function (data) {
            if (data.code == -1) {
                mini.alert("发布失败", "提示", publishCancel);
            } else {
                mini.alert("发布成功", "提示", publishCancel);
            }
        },
        error: function () {
            mini.alert("发布失败", "提示", publishCancel);
        }
    });
}
//取消发布
function publishCancel() {
    window.CloseOwnerWindow("ok");
}