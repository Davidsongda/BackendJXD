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
            url: "/feedBack/addFeedBack",
            type: 'post',
            dataType: "text json",
            data: o,
            cache: false,
            async: false,
            success: function (data) {
                if (data.code == -1) {
                    mini.alert("保存失败");
                } else {
                    checkSubmitFlg = false;
                    mini.alert("保存成功");
                    window.CloseOwnerWindow("ok")
                }
            },
            error: function (data) {
                mini.alert("失败");
            }
        });
    }
}
//获取编辑数据的方法
function SetData(data) {
    if (data.action == "add") {
        //跨页面传递的数据对象，克隆后才可以安全使用
        data = mini.clone(data);
        var id = data.id;
        $.ajax({
            type: "post",
            data: {id: id},
            url: "/feedBack/getFeedBack",
            cache: false,
            success: function (text) {
                var o = mini.decode(text);
                mini.get("id").setValue(o.id);
                mini.get("info").setValue(o.feedBackInfo);
            }
        });
        $.ajax({
            type: "post",
            url: "/feedBack/getUserInfo",
            cache: false,
            success: function (text) {
                var o = mini.decode(text);
                mini.get("name").setValue(o.name);
                mini.get("departName").setValue(o.departName);
                mini.get("telephone").setValue(o.telephone);
            }
        });
    }
}
//点击取消
function onCancel(e) {
    window.CloseOwnerWindow("ok");
}
