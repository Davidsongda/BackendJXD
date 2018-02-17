mini.parse();
var grid = mini.get("datagrid1");
grid.hideColumn("loginnameColumn");
grid.load();
grid.on("drawcell", function (e) {
    var codes = e;
    var record = e.record,
        value = e.value,
        field = e.field;
    if (field == "MENU") {
        e.cellHtml = "<a onclick='associated();'>关联</span></a>";
    }
})
//点击关联
function associated() {
    var rows = grid.getSelected();
    var roleName = rows.ROLE_NAME;
    var roleId = rows.ROLE_ID;
    var roleCode = rows.ROLE_CODE;
    mini.open({
        url: "/org/openUserTree",
        title: "用户授权", width: 1000, height: 625,
        onload: function () {
            var iframe = this.getIFrameEl();
            var data = {action: "open", roleId: roleId, roleName: roleName};
            iframe.contentWindow.SetData(data);
        },
        ondestroy: function (action) {
            grid.reload();
        }
    });
}
function search() {
    if(mini.get("names").validate() ==false){
        return;
    }
    var name = mini.get("names").getValue();
    // var name = document.getElementById("names").value;
    grid.load({name: name});
}
//模糊查询回车事件
$("#names").keydown(function (e) {
    if (e.keyCode == 13) {
        search();
    }
});