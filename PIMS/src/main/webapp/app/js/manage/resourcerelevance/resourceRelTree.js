mini.parse();
//用来往子页面传值
var role_code = mini.get("roleCode").getValue();
var role_Id = mini.get("roleId").getValue();
var tree = mini.get("apiTree");
tree.on("nodeselect", function (e) {
    var url = "/roleRelevance/sysResourceList?ID=" + e.node.ID + "&TEXT=" + e.node.TEXT;
    $("#mainframe").attr("src", url);
});

//显示
function SetData(data) {
    // 跨页面传递的数据对象，克隆后才可以安全使用
    data = mini.clone(data);
    mini.get("roleCode").setValue(data.roleCode);
    /*  mini.get("roleName").setValue(data.roleName);*/
    /* document.getElementById("roleName").textContent = data.roleName;*/
    $("#roleName").text(data.roleName);
    mini.get("roleId").setValue(data.roleId);
    role_name = data.roleName;
    role_code = data.roleCode;
    role_id = data.roleId;
    //同时显示到子页面去
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