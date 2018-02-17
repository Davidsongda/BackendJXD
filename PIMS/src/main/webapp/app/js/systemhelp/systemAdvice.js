mini.parse();
var grid = mini.get("datagrid1");
grid.load();
//条件查询
function search() {
    var versioncode = mini.get("versioncode").getValue();
    var UploadState = mini.get("UploadState").getValue();
    var FeedBackState = mini.get("FeedBackState").getValue();
    grid.load({versioncode: versioncode, UploadState: UploadState, FeedBackState: FeedBackState});
}

// 重置方法
function reset() {
    mini.get("versioncode").setValue(null);
    mini.get("UploadState").setValue(null);
    mini.get("UploadState").setText(null);
    mini.get("FeedBackState").setValue(null);
    mini.get("FeedBackState").setText(null);
    grid.load();
}
//是上传否转换
function onActionRendererPublishState(e) {
    var record = e.record;
    var publishState = record.uploadState;
    var data = "-";
    if (publishState == "0") {
        data = "未上传";
    } else if (publishState == "1") {
        data = "已上传";
    }
    return data;
}
// 反馈信息转换
function onActionRenderertfeedBackInfo(e) {
    var record = e.record;
    var feedBackInfo = record.feedBackInfo;
    var data = "-";
    if (feedBackInfo == "" || feedBackInfo == null) {
        data = "未反馈";
    } else {
        data = "<a onclick='oninfo();'>" + feedBackInfo + "</a>";
    }
    return data;
}
// 建议的详情
function onActionRenderertadvice(e) {
    var record = e.record;
    var advice = record.advice;
    var data = "<a onclick='onadvice();'>" + advice + "</a>"

    return data;
}

//点击反馈信息
function oninfo() {
    var rows = grid.getSelected();
    var feedBackInfo = rows.feedBackInfo;
    mini.open({
        url: "/systemAdvice/getSystemAdviceInfo?feedBackInfo="+feedBackInfo,
        title: "反馈信息",
        width: 500,
        height: 300,
        showCloseButton: true, // bu显示关闭按钮
        onload: function () {
            var iframe = this.getIFrameEl();
            var data = {feedBackInfo: feedBackInfo};
            iframe.contentWindow.SetData(data);
        },
        ondestroy: function (action) {
            grid.reload();

        }
    });
}
//点击建议信息
function onadvice() {
    var rows = grid.getSelected();
    var advice = rows.advice;
    mini.open({
        url: "/systemAdvice/getAdvice?advice="+advice,
        title: "建议信息",
        width: 500,
        height: 300,
        showCloseButton: true, // bu显示关闭按钮
        onload: function () {
            var iframe = this.getIFrameEl();
            var data = {advice: advice};
            iframe.contentWindow.SetData(data);
        },
        ondestroy: function (action) {
            grid.reload();

        }
    });
}
//填写时间转换格式
function onActionRenderertInsertTime(e) {
    var record = e.record;
    var insertTime = record.adviceTime;
    var date = new Date(insertTime);
    var y = date.getFullYear();
    var m = date.getMonth() + 1;
    m = m < 10 ? '0' + m : m;
    var d = date.getDate();
    d = d < 10 ? ('0' + d) : d;
    return y + '-' + m + '-' + d;
}
// 新增方法
function add() {
    mini.open({
        url: "/systemAdvice/getSystemAdviceAdd",
        title: "新增",
        width: 500,
        height: 260,
        onload: function () {
            var iframe = this.getIFrameEl();
            var data = {action: "add"};
            //向修改页面传值
            iframe.contentWindow.SetData(data);
        },
        ondestroy: function (action) {
            grid.reload();
        }
    });
}
// 修改方法
function edit() {
    var row = grid.getSelected();
    var choose = grid.getSelecteds();
    if (row) {
        if (choose.length == 1) {
            mini.open({
                url: "/systemAdvice/getSystemAdviceEdit",
                title: "修改",
                width: 500,
                height: 260,
                onload: function () {
                    var iframe = this.getIFrameEl();
                    var data = {action: "edit", id: row.id};
                    //向修改页面传值
                    iframe.contentWindow.SetData(data);
                },
                ondestroy: function (action) {
                    grid.reload();
                }
            });
        } else {
            mini.alert("请只选中一条记录");
        }
    } else {
        mini.alert("请选中一条记录");
    }
}
//删除
function del() {
    var rows = grid.getSelecteds();
    if (rows.length > 0) {
        var ids = [];
        for (var i = 0, l = rows.length; i < l; i++) {
            var r = rows[i]
            if(r.publishState == "1"){
                mini.alert("请选择未上传的建议进行删除");
                return;
            }
            ids.push(r.id);
        }
        mini.confirm("确定删除选中记录？", "提示", function (e) {
            if (e == "ok") {
                var ids = [];
                for (var i = 0, l = rows.length; i < l; i++) {
                    var r = rows[i];
                    ids.push(r.id);
                }
                var id = ids.join(',');
                grid.loading("操作中，请稍后......");
                $.ajax({
                    data: {id: id},
                    url: "/systemAdvice/delSystemAdvice",
                    success: function (data) {
                        if (data.code == -1) {
                            mini.alert("删除失败");
                        } else {
                            mini.alert("删除成功");
                        }
                        grid.reload();
                    },
                    error: function () {
                        mini.alert("error");
                        grid.reload();
                    }
                });
            }
        })
    } else {
        mini.alert("请选中一条或者多条记录");
    }
}
//上传
function upload() {
    var rows = grid.getSelecteds();
    if (rows.length > 0) {
        var ids = [];
        for (var i = 0, l = rows.length; i < l; i++) {
            var r = rows[i];
            if (r.publishState == "1") {
                mini.alert("请选择未上传的建议信息上传")
                return;
            }
            ids.push(r.id);
        }
        mini.confirm("确定上传选中记录？", "提示", function (e) {
            if (e == "ok") {
                var id = ids.join(',');
                grid.loading("操作中，请稍后......");
                $.ajax({
                    data: {id: id},
                    url: "/systemAdvice/uploadSystenAdvice",
                    success: function (data) {
                        if (data.code == -1) {
                            mini.alert("上传失败");
                        } else {
                            mini.alert("上传成功");
                        }
                        grid.reload();
                    },
                    error: function () {
                        mini.alert("error");
                        grid.reload();
                    }
                });
            }
        })
    } else {
        mini.alert("请选中一条或者多条记录");
    }
}