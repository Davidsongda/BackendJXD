mini.parse();
var grid = mini.get("datagrid1");
grid.load();
var selectMaps = {};
var arrlyist;

//查询方法
function search() {
    if(mini.get("names").validate() ==false){
        return;
    }
    var name = mini.get("names").getValue();
    var includeParent = mini.get("incloudF").getValue();
    grid.load({name: name,includeParent:includeParent});
}

//1.加载设置是否被选中（1.第一次进页面 4.点击左侧资源树  8.点击保存）
grid.on("load", function (e) {
    var roleCode = parent.role_code;
    var roleName = parent.role_name;
    var roleId = parent.role_id;
    //1:数据库查询被选中的资源
    $.ajax({
        url: "/roleRelevance/getRoleResource",
        type: 'post',
        data: {id: id,roleCode:roleCode,roleId:roleId},
        dataType: "json",
        async: false,
        success: function (data) {
            grid.selects(data.data);
        },
        error: function () {

        }

    });
    //设置这条资源被选中
});

//3.初始化加载被赋予的资源(3.点击左侧资源树  7.点击保存)
function onGridLoad(e) {
    var rows = selectMaps[grid.getPageIndex()];
    if(rows) {
        grid.selects(rows);
    }
}

//6.获取选择到的资源
function GetAllSelecteds() {
    var data = [];
    for(var pageIndex in selectMaps){
        var rows = selectMaps[pageIndex];
        data.addRange(rows);
    }
    return data;
}

//2.当资源选择改变时（2.促进页面  5.点击左侧资源树  9.点击保存）
function onSelectoinChanged(e) {
    var rows = grid.getSelecteds();
    selectMaps[grid.getPageIndex()] = rows;
}

//保存授权
function saveAut() {
    var roleCode = parent.role_code;
    var roleName = parent.role_name;
    var roleId = parent.role_id;

    var pid = $('#pidOfResourceTreeForSavingFilter').val();
    var nameText = mini.get('names').getValue();

    //判断是否包含下级菜单
    var includeParent = mini.get("incloudF").getValue();
    //获得要授权的资源
    var rows = GetAllSelecteds();

    var confirmStr = '';
    if (rows.length > 0) {
        confirmStr = "确定添加资源？";
    } else {
        confirmStr = "您未选中表中任何一条权限，是否保存？";
    }
    mini.confirm(confirmStr, "提醒", function (action) {
        if (action == "ok") {
            var ids = [];
            for (var i = 0, l = rows.length; i < l; i++) {
                var r = rows[i];
                ids.push(r.RESOURCE_ID);
            }
            var id = ids.join(',');
            grid.loading("操作中，请稍后......");
            $.ajax({
                url: "/roleRelevance/addRoleResoure",
                type: 'post',
                data: {
                    id: id,
                    roleCode: roleCode,
                    roleId: roleId,
                    includeParent: includeParent,
                    pid: pid,
                    nameText: nameText
                },
                dataType: "json",
                async: false,
                success: function (data) {
                    if (data.result) {
                        mini.alert("权限修改成功");
                    }
                    grid.load({roleId: roleId});
                },
                error: function () {
                    mini.alert("权限修改失败");
                    grid.load();
                }
            });
            mini.get('incloudF').setChecked(true);
        }
    });
}
