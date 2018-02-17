mini.parse();
var form = new mini.Form("form1");
function onOk(e) {
    SaveData();
}
function SaveData() {
    var o = form.getData();
    form.validate();
    if (form.isValid() == false) return;
    var json = mini.encode([o]);
    $.ajax({
        url: "/org/saveData",
        type: 'post',
        dataType: "json",
        data: o,
        cache: false,
        async: false,
        success: function (data) {
            if (data.code == -1) {
                mini.alert("保存失败","提示", onCancel());
            } else {
                mini.alert("保存成功","提示", onCancel());
            }
        },
        error: function (data) {
            mini.alert("保存失败","提示", onCancel());
        }
    });
}
function onCancel(e) {
    window.CloseOwnerWindow("ok");
}
function SetData(data) {
    if (data.action == "add") {
        //跨页面传递的数据对象，克隆后才可以安全使用
        data = mini.clone(data);
        var superiorCode = data.superiorCode;//上级组织编码
        var text = data.text;//本级组织名称
        var superior = data.superior;//上级组织名称
        if (superiorCode != "" && superiorCode != undefined) {
            $("#superiorCodeInp").attr("readOnly", true);
        }
        if (superior != "" && superior != undefined) {
            $("#superior").attr("readOnly", true);
        }
        $.ajax({
            type: "post",
            data: {superiorCode: superiorCode, superior: superior, text: text},
            dataType: "json",
            url: "/org/setDataTOAdd",
            cache: false,
            success: function (text) {
                var o = mini.decode(text);
                form.setData(o);
                form.setChanged(false);
            }
        });
    }
}
//弹出选择树
function onButtonEdit(e) {
    var btnEdit = this;
    var url = "/org/selectNatures";
    mini.open({
        url: url,
        showMaxButton: false,
        title: "选择树",
        width: 350,
        height: 350,
        showCloseButton: true, // 显示关闭按钮
        onload: function () {
            var iframe = this.getIFrameEl();
        },
        ondestroy: function (action) {
            var text = action.TEXT;//获取要回填的值
            mini.get("btnEdit1").setValue(text);
            mini.get("btnEdit1").setText(text);
        }
    });

}