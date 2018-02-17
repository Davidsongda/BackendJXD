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