mini.parse();
var tree = mini.get("apiTree");
function ok() {
    var node = tree.getSelectedNode();
    window.CloseOwnerWindow(node);
}
//过滤树添加搜索
function search() {
    var key = mini.get("key").getValue();
    if (key == "") {
        tree.clearFilter();
    } else {
        key = key.toLowerCase();
        tree.filter(function (node) {
            var text = node.TEXT ? node.TEXT.toLowerCase() : "";
            if (text.indexOf(key) != -1) {
                return true;
            }
        });
    }
}
//过滤树回车事件
function onKeyEnter(e) {
    search();
}