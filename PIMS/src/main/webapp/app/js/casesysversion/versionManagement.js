mini.parse();
var grid = mini.get("datagrid1");
grid.load();
// 查询方法
function search() {
    var versioncode = mini.get("versioncode").getValue();
    grid.load({versioncode: versioncode});
}
// 重置方法
function reset() {
    mini.get("versioncode").setValue("");
    $("#casetypeCode").val("");
    grid.load();
}
//填写时间转换格式
function onActionRenderertUpdateTime(e) {
    var record = e.record;
    var insertTime = record.upgradeTime;
    var date = new Date(insertTime);
    var y = date.getFullYear();
    var m = date.getMonth() + 1;
    m = m < 10 ? '0' + m : m;
    var d = date.getDate();
    d = d < 10 ? ('0' + d) : d;
    return y + '-' + m + '-' + d;
}
//是否发布转换
function onActionRendererPublishState(e) {
    var record = e.record;
    var isPublish = record.isPublish;
    var data = "-";
    if(isPublish.trim() == "0"){
        data = "未发布";
    }else if(isPublish.trim() == "1"){
        data = "已发布";
    }
    return data;
}


function versionUpload(){
    mini.open({
        url: "/versionManagement/openVersionUpload",
        title: "离线案例系统上传", width: 600, height: 300,
        onload: function () {

        },
        ondestroy: function (action) {
            grid.reload();
        }
    });
}

function versionPublist(){
    var rows = grid.getSelecteds();
    if (rows.length == 1) {
        var row = grid.getSelected();
        if(row.isPublish == "1"){
            mini.alert("请选择未发布的系统版本！");
            return;
        }
        mini.confirm("是否发布离线案例系统？","提示",function(e){
            if(e == "ok"){
                var id = row.id;
                grid.loading("操作中，请稍后......");
                $.ajax({
                    data: {id: id},
                    url: "/versionManagement/versionPublist",
                    success: function (data) {
                        if (data.code == "true") {
                            mini.alert("系统发布成功");
                        } else {
                            mini.alert("系统发布失败");
                        }
                        grid.reload();
                    },
                    error: function () {
                        mini.alert("系统发布失败");
                        grid.reload();
                    }
                });
            }})
    }else{
        mini.alert("请选中一条记录");
    }
}
/*系统删除*/
function versionDelete() {
    var rows = grid.getSelecteds();
    if(rows.length == 0){
        mini.alert("请至少选择一条记录");
    }else{
        var ids = [];
        for(var i = 0; i < rows.length; i++){
            if(rows[i].isPublish == 1){
                mini.alert("无法删除已发布的系统");
                return;
            }else{
                ids.push(rows[i].id);
            }
        }
        var id = ids.join(",");
        mini.confirm("确定删除所选系统吗","提示",function (e) {
            if(e == "ok"){
                $.ajax({
                    url: "/versionManagement/versionDelete",
                    type: 'post',
                    dataType: "json",
                    data: {id:id},
                    cache: false,
                    async: false,
                    success: function (data) {
                        debugger
                        if (data.code == 1) {
                            mini.alert("删除成功","提示",function () {
                                grid.reload();
                            });
                        } else {
                            mini.alert("删除失败");
                            //window.CloseOwnerWindow("ok")
                        }
                    },
                    error: function () {
                        mini.alert("删除失败");
                    }
                });
            }
        })
    }
}