mini.parse();
var form = new mini.Form("form1");

function onOk(e) {
    SaveData();
}
//保存添加资源
function SaveData() {
    var o = form.getData();
    form.validate();
    if (form.isValid() == false) {
        validNoticeAlert();
        return;
    }
    var json = mini.encode([o]);
    $.ajax({
        url: "/sysResource/editData",
        type: 'post',
        dataType : "json",
        data: o,
        cache: false,
        async : false,
        success: function (data) {
            if(data.code == -1){
                alert("保存失败");
            }else{
                alert("保存成功");
                window.CloseOwnerWindow("ok")
            }
        },
        error: function (data) {
            window.CloseOwnerWindow("ok")
        }
    });
}
//取消保存
function onCancel(e) {
    window.CloseOwnerWindow("ok");
}

//修改资源时进行数据回显
function SetData(data) {
    if (data.action == "edit") {
        //跨页面传递的数据对象，克隆后才可以安全使用
        data = mini.clone(data);
        var id = data.id;
        $.ajax({
            type : "post",
            data: {id: id},
            url: "/sysResource/setData",
            cache: false,
            success: function (text) {
                var o = mini.decode(text);
                mini.get("pResourceName").setValue(o.P_RESOURCE_NAME);
                mini.get("pResourceName").setText(o.P_RESOURCE_NAME);
                form.setData(o);
                form.setChanged(false);
                mini.getbyName("position").setValue(o.position);
            }
        });
    }
}

//修改上级资源时选择资源树
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
            mini.get("pResourceName").setValue(ResourceName);
            mini.get("pResourceName").setText(ResourceName);
            mini.get("pResourceCode").setValue(ResourceCode);
        }
    });

}