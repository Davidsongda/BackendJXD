mini.parse();
var tree = mini.get("apiTree");
//点击
tree.on("nodeselect", function (e) {
    var url = "/caseAnalyse/caseAnalyseListorgCode?casetypeCode=" + e.node.ID;
    $("#mainframe").attr("src", url);
});
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
