mini.parse();
var role_code = mini.get("roleCode").getValue();
var tree = mini.get("apiTree");
tree.on("nodeselect", function (e) {
    var url = "/org/urlUserList?orgName=" + e.node.TEXT + "&orgCode=" + e.node.ID;
    $("#mainframe").attr("src", url);
});
function SetData(data) {
    if (data.action == "open") {
        //跨页面传递的数据对象，克隆后才可以安全使用
        data = mini.clone(data);
        mini.get("roleCode").setValue(data.roleId);
        $("#roleName").text(data.roleName);
        role_code = data.roleId;
        $.ajax({
            type: "post",
            data: {roleId: role_code},
            dataType: "json",
            url: "/org/setDataTOGrand",
            cache: false,
            success: function (text) {
                var o = mini.decode(text);
               /* form.setData(o);
                form.setChanged(false);*/
            }
        });
    }
}
/**
 * 保存授权
 */
function saveAuthor() {
    document.getElementById('mainframe').contentWindow.saveAut();
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