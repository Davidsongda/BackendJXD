mini.parse();
var grid = mini.get("datagrid1");
var casetypeCode = $("#casetypeCode").val();
grid.load({casetypeCode: casetypeCode});
// 查询方法
function search() {
    var casename = mini.get("casename").getValue();
    var casetypeCode = $("#casetypeCode").val();
    grid.load({casename: casename, casetypeCode: casetypeCode});
}

// 重置方法
function reset() {
    mini.get("casename").setValue("");
    $("#casetypeCode").val("");
    grid.load();
}
// 下载pdf
    function exportPDF() {
    var row = grid.getSelected();
    var choose = grid.getSelecteds();
    if (row) {
        if (choose.length == 1) {
            var id = choose[0].id;
            window.location.href = "/caseExport/caseExportPdf?id=" +id;
        } else {
            mini.alert("请只选中一条记录");
        }
    } else {
        mini.alert("请选中一条记录");
    }
}
//填写时间转换格式
function onActionRenderertInsertTime(e) {
    var record = e.record;
    var insertTime = record.insertTime;
    var date = new Date(insertTime);
    var y = date.getFullYear();
    var m = date.getMonth() + 1;
    m = m < 10 ? '0' + m : m;
    var d = date.getDate();
    d = d < 10 ? ('0' + d) : d;
    return y + '-' + m + '-' + d;
}
//修改时间转换格式
function onActionRenderertUpdateTime(e) {
    var record = e.record;
    var updateTime = record.updateTime;
    var date = new Date(updateTime);
    var y = date.getFullYear();
    var m = date.getMonth() + 1;
    m = m < 10 ? '0' + m : m;
    var d = date.getDate();
    d = d < 10 ? ('0' + d) : d;
    return y + '-' + m + '-' + d;
}
//上行下行转化
function onActionRendererdirectionName(e) {
    var record = e.record;
    var directionName = record.directionName;
    var data = "-";
    if (directionName == "0") {
        data = "下行";
    } else if (directionName == "1") {
        data = "上行";
    }
    return data;
}
//附件
function onActionRenderertFile(e) {
    var caseId = e.row.caseId;
    return "<a onclick='fileList(\""+caseId+"\");'>附件</a>";
}
//打开附件列表
function fileList(caseId){
    mini.open({
        url: "/caseSearch/caseFileList",
        title: "附件列表",
        width: 1000,
        height: 550,
        showCloseButton: true, // 显示关闭按钮
        onload: function () {
            var iframe = this.getIFrameEl();
            var data = {caseId: caseId};
            iframe.contentWindow.SetData(data);
        },
        ondestroy: function (action) {
            //grid.reload();
        }
    });
}