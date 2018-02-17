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
        url: "/systemAdvice/editSystemAdvice",
        type: 'post',
        dataType: "json",
        data: o,
        cache: false,
        async: false,
        success: function (data) {
            if (data.code == -1) {
                mini.alert("修改失败");
            } else {
                mini.alert("修改成功");
                window.CloseOwnerWindow("ok")
            }
        },
        error: function (data) {
            window.CloseOwnerWindow("ok")
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
            data: {id: id},
            url: "/systemAdvice/getSystemAdvice",
            cache: false,
            success: function (text) {
                var o = mini.decode(text);
                form.setData(o);
            }
        });
    }
}

//点击取消
function onCancel(e) {
    window.CloseOwnerWindow("ok");
}