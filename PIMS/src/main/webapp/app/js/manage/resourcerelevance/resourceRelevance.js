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
        e.cellHtml = "<a onclick='associated();'>关联</a>";
    }
})

//点击关联
function associated() {
    var rows = grid.getSelected();
    var roleId = rows.ROLE_ID;
    var roleCode = rows.ROLE_CODE;
    var roleName = rows.ROLE_NAME;
    mini.open({
        url: "/roleRelevance/sysResourceTree",
        title: "资源信息",
        width: 1000,
        height: 550,
        showCloseButton: true, // 显示关闭按钮
        onload: function () {
            var iframe = this.getIFrameEl();
            var data = {roleId: roleId, roleName: roleName,roleCode:roleCode};
            iframe.contentWindow.SetData(data);
        },
        ondestroy: function (action) {
            grid.reload();

        }
    });
}

//查询
function search() {
    if(mini.get("names").validate() ==false){
        return;
    }
    var name = mini.get("names").getValue();
    // var name = document.getElementById("names").value;
    grid.load({name: name});
}

