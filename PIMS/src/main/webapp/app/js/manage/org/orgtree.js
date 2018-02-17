mini.parse();
//树点击事件
var tree = mini.get("apiTree");
tree.on("nodeselect", function (e) {
    var url = "/org/orgList?ID=" + e.node.ID + "&PID=" + e.node.PID + "&TEXT=''";
    $("#mainframe").attr("src", url);
});
function onDrawNode(e){
    var tree = e.sender;
    var node = e.node;
    var hasChildren = tree.hasChildren(node);
    var pid = node.PID ==  null ? "":node.PID;
    if (hasChildren == false && pid=="") {
        e.visible=false;
    }
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
//过滤树回车事件
function onKeyEnter(e) {
    search();
}