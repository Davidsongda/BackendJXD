mini.parse();
var grid = mini.get("datagrid1");
grid.load();
// 查询方法
function search() {
    var userName = mini.get("userName").getValue();
    grid.load({userName:userName});
}
// 重置方法
function reset() {
    mini.get("userName").setValue("");
    grid.load();
}