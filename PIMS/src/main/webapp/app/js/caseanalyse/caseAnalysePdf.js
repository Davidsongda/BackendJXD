mini.parse();
var form = new mini.Form("form1");
//防止保存多次的参数
var checkSubmitFlg = true;
//点击保存
function onOk() {
    SaveData();
}
//保存数据方法
function SaveData() {
    if(checkSubmitFlg) {
        var o = form.getData();
        form.validate();
        if (form.isValid() == false) {
            validNoticeAlert();
            return;
        }
        var json = mini.encode([o]);
        $.ajax({
            url: "/caseExport/caseExportPdf",
            type: 'post',
            dataType: "json",
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
                window.CloseOwnerWindow("ok")
            }
        });
    }
}
//点击取消
function onCancel() {
    window.CloseOwnerWindow("ok");
}