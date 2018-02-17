mini.parse();
var grid = mini.get("datagrid1");
grid.hideColumn("validcolumn");//隐藏有效标识
grid.load();
function onGenderRenderer(e) {
    for (var i = 0, l = sex.length; i < l; i++) {
        var g = sex[i];
        if (g.id == e.value) return g.text;
    }
    return "";
}
function search() {
    if (mini.get("key").validate() == false) {
        return;
    }
    var key = mini.get("key").getValue();//模糊查询的输入数据
    grid.load({key: key, name: '<%=code %>'});
}
grid.on("drawCell", function (e) {
    var record = e.record,
        value = e.value,
        field = e.field;
    if (field == "UNITTYPEID") {
        if (value == '1') {
            e.cellHtml = '局';
        } else if (value == '2') {
            e.cellHtml = '段';
        } else if (value == '3') {
            e.cellHtml = '班组';
        } else if (value == '4') {
            e.cellHtml = '车间';
        }
    }
});

function add() {
    var superiorCode = "${pid}";//上级组织编码
    var text = "${text}";
    var superior = "${superior}";
    //alert("这是上级组织编码:"+superiorCode);
    //alert("这是本级组织名称:"+text);
    //alert("这是上级组织名称:"+superior);
    mini.open({
        url: "/org/addOrg",
        title: "新增单位", width: 670, height: 320,
        data: {superiorCode: superiorCode, superior: superior},
        onload: function () {
            var iframe = this.getIFrameEl();
            var data = {action: "add", superiorCode: superiorCode, superior: superior, text: text};
            iframe.contentWindow.SetData(data);
        },
        ondestroy: function (action) {
            grid.reload();
        }
    });
}

function del() {
    var rows = grid.getSelecteds();
    if (rows.length > 0) {
        mini.confirm("确定删除选中记录？","提醒",function(action){
            if(action == "ok"){
            var ids = [];
            for (var i = 0, l = rows.length; i < l; i++) {
                var r = rows[i];
                ids.push(r.UNITID);
            }
            var id = ids.join(',');
            grid.loading("操作中，请稍后......");
            $.ajax({
                data: {id: id},
                url: "/org/deleteData",
                success: function (data) {
                    if (data.code == -1) {
                        mini.alert("删除失败","提示", grid.reload());
                    } else {
                        mini.alert("删除成功","提示", grid.reload());
                    }
                },
                error: function () {
                    mini.alert("删除失败","提示", grid.reload());
                }
            });
        }})
    } else {
        mini.alert("请选中一条记录");
    }
}

function edit() {
    var rows = grid.getSelecteds();
    if (rows && rows.length == 1) {
        var row = rows[0];
        mini.open({
            url: "/org/editManage",
            title: "编辑单位", width: 670, height: 320,
            onload: function () {
                var iframe = this.getIFrameEl();
                var data = {action: "edit", id: row.UNITID};
                iframe.contentWindow.SetData(data);
            },
            ondestroy: function (action) {
                grid.reload();
            }
        });
    } else {
        mini.alert("请选中一条记录");
    }
}
//模糊查询回车事件
$("#key").keydown(function (e) {
    if (e.keyCode == 13) {
        search();
    }
});

function rrr(){
    grid.reload();
}

function closeWin(){
    window.CloseOwnerWindow("ok");
}
//导出
function exportDataExcel(unitcode){
    var key = mini.get("key").getValue();//模糊查询的输入数据
    var url = "/org/exportDataExcel?key="+key+"&unitcode="+unitcode;
    document.getElementById("exportIframe").src=url;
}
//导入
function importDataExcel() {
    mini.open({
        url: "/org/importDataExcel",
        title: "导入信息", width: 460, height: 200,
        data: {},
        onload: function () {},
        ondestroy: function (action) {
            grid.reload();
        }
    });
}