mini.parse();
var grid = mini.get("datagrid1");
grid.hideColumn("loginnameColumn");
grid.load();
//查询角色
function search() {
    if(mini.get("names").validate() ==false){
        return;
    }
    var name = mini.get("names").getValue();
    grid.load({name: name.trim()});
}
//添加角色方法
function add() {
    mini.open({
        url: "/role/addRole",
        title: "新增角色", width: 350, height: 250,
        onload: function () {
            var iframe = this.getIFrameEl();
        },
        ondestroy: function (action) {
            grid.reload();
        }
    });
}
//删除角色方法
function del() {
    var rows = grid.getSelecteds();
    if (rows.length > 0) {
        mini.confirm("确定删除选中记录？","提示",function(e) {
            if (e == "ok") {
            var ids = [];
            for (var i = 0, l = rows.length; i < l; i++) {
                var r = rows[i];
                ids.push(r.ROLE_ID);
            }
            var id = ids.join(',');
            grid.loading("操作中，请稍后......");
            $.ajax({
                data: {id: id},
                url: "/role/deleteData",
                success: function (data) {
                    if (data.code == -1) {
                        mini.alert("删除失败");
                    } else {
                        mini.alert("删除成功");
                    }
                    grid.reload();
                },
                error: function () {
                    mini.alert("error");
                    grid.reload();
                }
            });
        }})
    } else {
        mini.alert("请选中一条或者多条记录");
    }
}
//编辑角色方法
function edit() {
    var row = grid.getSelected();
    var rows = grid.getSelecteds();
    if (row) {
       /* var row = grid.getSelected();*/
        if (rows.length == 1) {
            mini.open({
                url: "/role/editRole",
                title: "修改角色", width: 350, height: 250,
                onload: function () {
                    var iframe = this.getIFrameEl();
                    var data = {action: "edit", id: row.ROLE_ID};
                    iframe.contentWindow.SetData(data);
                },
                ondestroy: function (action) {
                    grid.reload();
                }
            });
        } else {
            mini.alert("请只选中一条记录");
        }
    } else {
        mini.alert("请选中一条记录");
    }
}