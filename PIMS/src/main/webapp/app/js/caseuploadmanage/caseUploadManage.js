mini.parse();
var grid = mini.get("datagrid1");
var casetypeCode = $("#casetypeCode").val();
grid.load({casetypeCode: casetypeCode});
//条件查询
function search() {
    var caseNameSearch = mini.get("caseNameSearch").getValue();
    var checkStateSearch = mini.get("checkStateSearch").getValue();
    var publicStateSearch = mini.get("publicStateSearch").getValue();
    var casetypeCode = $("#casetypeCode").val();
    grid.load({
        caseNameSearch: caseNameSearch,
        checkStateSearch: checkStateSearch,
        publicStateSearch: publicStateSearch,
        casetypeCode: casetypeCode
    });
}

// 重置方法
function reset() {
    mini.get("caseNameSearch").setValue(null);
    mini.get("checkStateSearch").setValue(null);
    mini.get("checkStateSearch").setText(null);
    mini.get("publicStateSearch").setValue(null);
    mini.get("publicStateSearch").setText(null);
    $("#casetypeCode").val("");
    grid.load();
}

//是否审核转换
function onActionRendererCheckState(e) {
    var record = e.record;
    var caseCheckState = record.caseCheckState;
    var data = "-";
    if (caseCheckState == "0" || caseCheckState == "") {
        data = "未审核";
    } else if (caseCheckState == "1") {
        data = "审核通过";
    } else if (caseCheckState == "2") {
        data = "审核未通过";
    }
    return data;
}
//是否发布转换
function onActionRendererPublishState(e) {
    var record = e.record;
    var casePublishState = record.casePublishState;
    var data = "-";
    if (casePublishState == "0" || casePublishState == "") {
        data = "未发布";
    } else if (casePublishState == "1") {
        data = "已发布";
    }
    return data;
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
//合并
function combineMethod() {
    var dataRows = grid.getSelecteds();
    if (dataRows.length > 1) {
        var ids = [];
        for (var i = 0, l = dataRows.length; i < l; i++) {
            var r = dataRows[i];
            ids.push(r.id);
        }
        var id = ids.join(',');
        mini.open({
                url: "/caseUpload/combineByPrimaryKey",
                title: "案例合并",
                width: 892,
                height: 450,
                onload: function () {
                    var iframe = this.getIFrameEl();
                    var data = {action: "edit", id: id};
                    //向修改页面传值
                    iframe.contentWindow.SetData(data);
                },
                ondestroy: function (action) {
                    grid.reload();
                }
            }
        )
    } else {
        mini.alert("至少选中两条记录");
    }
}
//审核方法
function auditMethod() {
    var row = grid.getSelecteds();
    if (row) {
        if (row.length == 1 && row[0].caseCheckState == 0) {
            mini.open({
                url: "/caseUpload/auditSkip",
                title: "案例审核",
                width: 350,
                height: 270,
                onload: function () {
                    var iframe = this.getIFrameEl();
                    var data = {action: "edit", id: row[0].id};
                    //向修改页面传值
                    iframe.contentWindow.SetData(data);
                },
                ondestroy: function (action) {
                    grid.reload();
                }
            });
        } else {
            mini.alert("请只选中一条未审核的记录");
        }
    } else {
        mini.alert("请选中要审核的记录");
    }
}
//发布的方法
function publishMethod() {
    var rows = grid.getSelecteds();
    if (rows.length > 0) {
        var ids = [];
        /*审核通过的验证*/
        for (var i = 0, l = rows.length; i < l; i++) {
            var r = rows[i];
            if(r.caseCheckState != 1){ //不是审核通过的，都不能发布
                mini.alert("请只选择审核通过的记录");
                return;
            }
        }
        for (var i = 0, l = rows.length; i < l; i++) {
            var r = rows[i];
            if (r.casePublishState == 0 || r.casePublishState == "") {
                ids.push(r.id);
            } else {
                mini.alert("请只选择未发布的记录");
                return;
            }
        }
        var id = ids.join(',');
        mini.open({
            data: {id: id},
            url: "/caseUpload/publishSkip",
            title: "案例发布",
            width: 540,
            height: 270,
            onload: function () {
                var iframe = this.getIFrameEl();
                var data = {action: "edit", id: id};
                iframe.contentWindow.SetData(data);

            },
            ondestroy: function (action) {
                grid.reload();
            }
        });
    } else {
        mini.alert("请只选中一条或者多条的记录");
    }
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