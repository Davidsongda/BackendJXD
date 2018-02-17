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
            url: "/systemAdvice/addSystemAdvice",
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
/*
//新增时获取编辑数据的方法
function SetData(data) {
    debugger
    if (data.action == "add") {
        $.ajax({
            type: "post",
            url: "/systemAdvice/getUserInfo",
            cache: false,
            success: function (text) {
                var o = mini.decode(text);
                form.setData(o);
            }
        });
    }
}*/
//点击取消
function onCancel(e) {
    window.CloseOwnerWindow("ok");
}