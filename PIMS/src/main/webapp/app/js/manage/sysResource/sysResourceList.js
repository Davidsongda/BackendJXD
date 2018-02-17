mini.parse();
var grid = mini.get("datagrid1");
grid.load();

//是否包含下级查询
function search() {
    if(mini.get("names").validate() ==false){
        return;
    }
    var name = mini.get("names").getValue();
    var includeParent = mini.get("incloudF").getValue();
    grid.load({name: name, includeParent: includeParent});
}
//新增资源
function add() {
    mini.open({
        url: "/sysResource/addSysResource",
        title: "新增资源", width: 650, height: 300,
        onload: function () {
            var iframe = this.getIFrameEl();
        },
        ondestroy: function (action) {
            grid.reload();
        }
    });
}
//删除资源
function del() {
    var rows = grid.getSelecteds();
    if (rows.length > 0) {
        mini.confirm("确定删除选中记录？","提示",function(e){
            if(e == "ok"){
            var ids = [];
            for (var i = 0, l = rows.length; i < l; i++) {
                var r = rows[i];
                ids.push(r.RESOURCE_ID);
            }
            var id = ids.join(',');
            grid.loading("操作中，请稍后......");
            $.ajax({
                data: {id: id},
                url: "/sysResource/deleteData",
                success: function (data) {
                    if (data.code == -1) {
                        alert("删除失败");
                    } else {
                        alert("删除成功");
                    }
                    grid.reload();
                },
                error: function () {
                    alert("删除失败");
                    grid.reload();
                }
            });
        }})
    } else {
        alert("请选中一条或者多条记录");
    }
}
//修改资源
function edit() {
    var row = grid.getSelected();
    var rows = grid.getSelecteds();
    if (row) {
        if (rows.length == 1) {
            mini.open({
                url: "/sysResource/editSysResource",
                title: "修改资源", width: 650, height: 300,
                onload: function () {
                    var iframe = this.getIFrameEl();
                    var data = {action: "edit", id: row.RESOURCE_ID};
                    iframe.contentWindow.SetData(data);
                },
                ondestroy: function (action) {
                    grid.reload();
                }
            });
        }else{
            mini.alert("请只选中一条记录");
        }
    } else {
        mini.alert("请选中一条记录");
    }

}
