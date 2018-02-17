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