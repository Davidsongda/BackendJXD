mini.parse();
var grid = mini.get("datagrid1");
grid.load();
//条件查询
function search() {
    if(mini.get("names").validate() ==false){
        return;
    }
    var name = mini.get("names").getValue();
    grid.load({name: name});
}

//新增用户
function add() {
    var orgCode = $("#orgCode").val();
    mini.open({
        url: "/users/addUserOrganization?orgCode=" + orgCode,
        title: "新增用户",
        width: 500,
        height: 250,
        onload: function () {
            var iframe = this.getIFrameEl();
            if (orgCode != null && orgCode != "") {
                var data = {orgCode: orgCode};
                iframe.contentWindow.SetData(data);
            }
        },
        ondestroy: function (action) {
            grid.reload();
        }
    });
}
//删除用户
function del() {
    var rows = grid.getSelecteds();
    if (rows.length > 0) {

        mini.confirm("确定删除选中记录？","提示",function(e) {
            if (e == "ok") {
                var ids = [];
                for (var i = 0, l = rows.length; i < l; i++) {
                    var r = rows[i];
                    ids.push(r.logonId);
                }
                var id = ids.join(',');
                grid.loading("操作中，请稍后......");
                $.ajax({
                    data: {id: id},
                    url: "/users/deleteUserByPrimaryKey",
                    success: function (data) {
                        if (data.code == -1) {
                            mini.alert("删除失败");
                        } else {
                            mini.alert("删除成功");
                        }
                        grid.reload();
                    },
                    error: function () {
                        grid.reload();
                    }
                });
            }
        })
    } else {
        mini.alert("请选中一条或者多条记录");
    }
}
//修改用户时获取用户主键的方法
function edit() {
    var row = grid.getSelected();
    var choose = grid.getSelecteds();
    if (row) {
        if (choose.length == 1) {
            mini.open({
                url: "/users/editUser",
                title: "修改用户",
                width: 500,
                height: 250,
                onload: function () {
                    var iframe = this.getIFrameEl();
                    var data = {action: "edit", id: row.logonId};
                    //向修改页面传值
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

