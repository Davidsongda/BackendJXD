mini.parse();
var form = new mini.Form("form1");
//點擊保存按鈕
function onOk(e) {
    SaveData();
}
function SaveData() {
    var o = form.getData();
    form.validate();
    if (form.isValid() == false) return;
    var json = mini.encode([o]);
    $.ajax({
        url: "/org/editData",
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
        error: function () {
            mini.alert("修改失败","提示", onCancel);
        }
    });
}
function onCancel(e) {
    window.CloseOwnerWindow("ok");
}
//信息回填
function SetData(data) {
    if (data.action == "edit") {
        //跨页面传递的数据对象，克隆后才可以安全使用
        data = mini.clone(data);
        var id = data.id;
        $.ajax({
            type: "post",
            data: {id: id},
            url: "/org/setData",
            cache: false,
            success: function (text) {
                var o = mini.decode(text);
                var oo = {
                    unitId: o.UNITID,
                    unitCode: o.UNITCODE,
                    unitBelong: o.UNITBELONG,
                    unitName: o.UNITNAME,
                    unitTypeId: o.UNITTYPEID,
                    valid: o.VALID,
                    memo: o.MEMO
                };
                form.setData(oo);
                form.setChanged(false);
                mini.get("unitTypeId").setValue(o.UNITTYPEID);
            },
            error: function(){
                mini.alert("获取组织信息失败！");
            }
        });
    }
}
//弹出选择树
function onButtonEdit(e) {
    var url = "/org/selectNatures";
    mini.open({
        url: url,
        showMaxButton: false,
        title: "选择树",
        width: 350,
        height: 350,
        showCloseButton: true, // 显示关闭按钮
        onload: function () {},
        ondestroy: function (action) {
            var text = action.TEXT;//获取要回填的值
            mini.get("btnEdit1").setValue(text);
            mini.get("btnEdit1").setText(text);
        }
    });

}