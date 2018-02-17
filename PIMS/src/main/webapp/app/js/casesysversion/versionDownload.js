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
    grid.load();
}
//填写时间转换格式
function onActionRenderertUpdateTime(e) {
    var record = e.record;
    var upgradeTime = record.upgradeTime;
    var date = new Date(upgradeTime);
    var y = date.getFullYear();
    var m = date.getMonth() + 1;
    m = m < 10 ? '0' + m : m;
    var d = date.getDate();
    d = d < 10 ? ('0' + d) : d;
    return y + '-' + m + '-' + d;
}

/**
 * 跳转申请下载页面
 */
function applayDown(){
    var rows = grid.getSelecteds();
    if (rows.length == 1) {
        var row = grid.getSelected();
        mini.open({
            url: "/versionDownload/applayDown?code="+row.versionCode+"&filePath="+row.versionPath,
            title: "案例系统申请下载", width: 600, height: 200,
            onload: function () {

            },
            ondestroy: function (action) {
                grid.reload();
            }
        });
        //window.location.href = "/versionManagement/download";
    }else{
        mini.alert("请选中一条记录");
    }

}


function versionDown(){

    /**
     * 首先判断文件存在不存在
     */

    var rows = grid.getSelecteds();
    if (rows.length == 1) {
        var row = grid.getSelected();
        window.location.href = "/versionManagement/download";
    }else{
        mini.alert("请只选中一条记录");
    }


}
