/**
 * Created by Administrator on 2017/4/19.
 */
mini.parse();
var tree = mini.get("apiTree");
//弹出树点击
function ok() {
    var node = tree.getSelectedNode();
    window.CloseOwnerWindow(node);
}
//过滤树
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