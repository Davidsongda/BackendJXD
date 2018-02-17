mini.parse();
var grid = mini.get("datagrid1");
//合并的数据
function SetData(data) {
    if (data.action == "edit") {
        //跨页面传递的数据对象，克隆后才可以安全使用
        data = mini.clone(data);
        var ids = data.id;
        grid.setUrl('/caseUpload/selectCombineByPrimaryKey?id=' + (ids ? ids : ''));
        grid.load();
    }
}
//合并确定
function combineEnsure() {
    mini.confirm("确定合并记录？", "提示", function (e) {
        if (e == "ok") {
            var rows = grid.getSelecteds();
            var rowList = grid.getList();
            if (rows.length == 1) {
                var ids = [];
                for (var i = 0, l = rowList.length; i < l; i++) {
                    var r = rowList[i];
                    if (!grid.isSelected(r)) {
                        ids.push(r.id);
                    }
                }
                var id = ids.join(',');
                $.ajax({
                    data: {id: id},
                    url: "/caseUpload/editByPrimaryKey",
                    type: 'post',
                    dataType: "json",
                    cache: false,
                    async: false,
                    success: function (data) {
                        if (data.code == -1) {
                            mini.alert("合并失败", "提示", combineCancel);
                        } else {
                            mini.alert("合并成功", "提示", combineCancel);
                        }
                    },
                    error: function () {
                        mini.alert("合并失败", "提示", combineCancel);
                    }
                });
            } else {
                mini.alert("请选中一条合并记录");
            }
        }
    })
}
//合并取消
function combineCancel(e) {
    window.CloseOwnerWindow("ok");
}