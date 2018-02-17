mini.parse();
//防止保存多次的参数
var checkSubmitFlg = true;
var form = new mini.Form("form1");
function onOk(e) {
    SaveData();
}
//添加资源数据
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
            url: "/sysResource/saveData",
            type: 'post',
            dataType: "json",
            data: o,
            cache: false,
            async: false,
            success: function (data) {
                if (data.code == -1) {
                    alert("保存失败");
                } else {
                    checkSubmitFlg = false;
                    alert("保存成功");
                    window.CloseOwnerWindow("ok")
                }
            },
            error: function (data) {
                window.CloseOwnerWindow("ok")
            }
        });
    }
}

//取消添加
function onCancel(e) {
    window.CloseOwnerWindow("ok");
}

//添加时加载资源树
function onButtonEdit(e) {
    var btnEdit = this;
    mini.open({
        url: "/sysResource/resourceNameTree",
        showMaxButton: false,
        title: "选择资源",
        width: 250,
        height: 400,
        ondestroy: function (action) {
            var ResourceName=action.TEXT;
            var ResourceCode=action.ID;
            /*alert(ResourceName);
             alert(ResourceCode);*/
            mini.get("pResourceName").setValue(ResourceName);
            mini.get("pResourceName").setText(ResourceName);
            mini.get("pResourceCode").setValue(ResourceCode);
        }
    });

}