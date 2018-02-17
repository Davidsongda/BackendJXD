mini.parse();
var grid = mini.get("datagrid1");
grid.load();
//条件查询
function search() {
    var versioncode = mini.get("versioncode").getValue();
    var checkStateSearch = mini.get("checkStateSearch").getValue();
    var publicStateSearch = mini.get("publicStateSearch").getValue();
    grid.load({versioncode: versioncode, checkStateSearch: checkStateSearch, publicStateSearch: publicStateSearch});
}

// 重置方法
function reset() {
    mini.get("versioncode").setValue(null);
    mini.get("checkStateSearch").setValue(null);
    mini.get("checkStateSearch").setText(null);
    mini.get("publicStateSearch").setValue(null);
    mini.get("publicStateSearch").setText(null);
    grid.load();
}
//是否反馈转换
function onActionRendererCheckState(e) {
    var record = e.record;
    var caseCheckState = record.feedBackState;
    var data = "-";
    if (caseCheckState == "0") {
        data = "未反馈";
    } else if (caseCheckState == "1") {
        data = "已反馈";
    }
    return data;
}
//是否发布转换
function onActionRendererPublishState(e) {
    var record = e.record;
    var casePublishState = record.publishState;
    var data = "-";
    if (casePublishState == "0") {
        data = "未发布";
    } else if (casePublishState == "1") {
        data = "已发布";
    }
    return data;
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
        url: "/feedBack/getInfo?feedBackInfo=" + feedBackInfo,
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
        url: "/feedBack/getAdviceInfo?advice=" + advice,
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
// 反馈
function add() {
    var row = grid.getSelected();
    var choose = grid.getSelecteds();
    if (row) {
        if (choose.length == 1) {
            if (choose[0].publishState == "1") {
                mini.alert("请选择未发布的建议信息添加反馈信息");
                return;
            }
            mini.open({
                url: "/feedBack/getFeedBackAdd",
                title: "反馈",
                width: 500,
                height: 260,
                onload: function () {
                    var iframe = this.getIFrameEl();
                    var data = {action: "add", id: row.id};
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
//发布
function upload() {
    var rows = grid.getSelecteds();
    if (rows.length > 0) {
        var ids = [];
        for (var i = 0, l = rows.length; i < l; i++) {
            var r = rows[i];
            if (r.feedBackState == "0") {
                mini.alert("请选择已经反馈的建议信息发布")
                return;
            }
            if (r.publishState == "1") {
                mini.alert("请选择未发布的建议信息发布")
                return;
            }
            ids.push(r.id);
        }
        mini.confirm("确定发布选中记录？", "提示", function (e) {
            if (e == "ok") {
                var id = ids.join(',');
                grid.loading("操作中，请稍后......");
                $.ajax({
                    data: {id: id},
                    url: "/feedBack/uploadFeedBack",
                    success: function (data) {
                        if (data.code == -1) {
                            mini.alert("发布失败");
                        } else {
                            mini.alert("发布成功");
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