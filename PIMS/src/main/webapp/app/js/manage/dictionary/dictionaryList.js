mini.parse();
var grid = mini.get("datagrid1");
grid.load();
//条件查询
function search() {
    if (mini.get("typeName").validate() == false) {
        return;
    }
    var typeName = mini.get("typeName").getValue();
    grid.load({typeName: typeName});
}
// 重置方法
function reset() {
    mini.get("typeName").setValue(null);
    grid.load();
}