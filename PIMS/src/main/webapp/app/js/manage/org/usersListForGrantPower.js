mini.parse();
var grid = mini.get("datagrid1");
grid.load();
function search() {
    if(mini.get("names").validate() ==false){
        return;
    }
    var name = mini.get("names").getValue();
    grid.load({name: name});
}
function saveAut() {
    var roleCode = parent.role_code;
    var rows = grid.getSelecteds();

    var orgCode = $('#orgCodeOfOrgTreeForSavingFilter').val();
    var nameText = mini.get('names').getValue();

    var confirmStr = '';
    if (rows.length > 0) {
        confirmStr = "确定授权所选用户？";
    } else {
        confirmStr = "您未选中表中任何一条数据，是否保存授权？";
    }
        mini.confirm(confirmStr,'提醒',function(action){
            if (action == "ok") {
                var ids = [];
                for (var i = 0, l = rows.length; i < l; i++) {
                    var r = rows[i];
                    ids.push(r.logonId);
                }
                var id = ids.join(',');
                grid.loading("操作中，请稍后......");
                $.ajax({
                    data: {
                        userId: id,
                        roleId: roleCode,
                        orgCode: orgCode,
                        nameText: nameText
                    },
                    url: "/org/addGrandUser",
                    success: function (data) {
                        if (data.code < 0) {
                            mini.alert("授权失败");
                        } else {
                            mini.alert("授权成功");
                        }
                        grid.reload();
                    },
                    error: function () {
                        mini.alert("授权失败");
                        grid.reload();
                    }
                });
            }
        });
}
//加载设置是否被选中
grid.on("load", function (e) {
    var roleId = parent.role_code;//角色id
    //1:数据库查询被选中的资源
    $.ajax({
        url: "/org/getRoleResource",
        type: 'post',
        data: {roleId:roleId},
        dataType: "json",
        async: false,
        success: function (data) {
            if(data.code== -1){
                return;
            }
            grid.selects(data.data);
        },
        error: function () {
            alert("系统错误！");
        }
    });
});
//模糊查询回车事件
$("#names").keydown(function (e) {
    if (e.keyCode == 13) {
        search();
    }
});