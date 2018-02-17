mini.parse();
var grid = mini.get("datagrid1");
grid.hideColumn("filePositionName");//隐藏该列

function SetData(data) {
    grid.load({fileCaseId:data.caseId});
}
/*下载附件方法*/
function downloadFile() {
    var rows = grid.getSelecteds();
    if(rows.length == 1){
        var position = rows[0].filePosition;
        window.location.href = "/versionManagement/download?filePath="+position;
    }else{
        mini.alert("请选择一个附件");
        return;
    }

}