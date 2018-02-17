mini.parse();
var tree = mini.get("apiTree");
//点击
tree.on("nodeselect", function (e) {
    var url = "/demo/userListorgCode?orgCode=" + e.node.ID;
    $("#mainframe").attr("src", url);
});
//树的查询方法
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
//树查询方法的回车事件
function onKeyEnter(e) {
    search();
}