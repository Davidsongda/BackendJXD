mini.parse();
var form = new mini.Form("form1");
//审核确定
function auditEnsure() {
    var caseCheckIdea = mini.get("caseCheckIdea").getValue();
    var caseCheckState = mini.get("caseCheckState").getValue();
    var id = mini.get("id").getValue();
    form.validate();
    if (form.isValid() == false) {
        return;
    }
    $.ajax({
        data: {id: id, caseCheckIdea: caseCheckIdea, caseCheckState: caseCheckState},
        url: "/caseUpload/editAuditByPrimaryKey",
        type: 'post',
        cache: false,
        async: false,
        success: function (data) {
            if (data.code == -1) {
                mini.alert("审核失败", "提示", auditCancel);
            } else {
                mini.alert("审核成功", "提示", auditCancel);
            }
        },
        error: function () {
            mini.alert("审核失败", "提示", auditCancel);
        }
    });
}
//审核取消
function auditCancel(e) {
    window.CloseOwnerWindow("ok");
}
//审核的数据
function SetData(data) {
    if (data.action == "edit") {
        //跨页面传递的数据对象，克隆后才可以安全使用
        data = mini.clone(data);
        var ids = data.id;
        $.ajax({
            type: "post",
            data: {id: ids},
            url: "/caseUpload/selectCaseUploadByByPrimaryKey",
            cache: false,
            async: false,
            success: function (text) {
                var o = mini.decode(text);
                form.setData(o);
            }
        });
    }
}