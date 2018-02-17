mini.parse();
var form = new mini.Form("form1");

var checkSubmitFlg = true;
mini.get("upgradeUnit").setValue($("#departName").val());
mini.get("upgradeUnit").setText($("#departName").val());
//点击弹出选择树
function onButtonEdit(e) {
    var btnEdit = this;
    mini.open({
        url: "/users/userOrgName",
        showMaxButton: false,
        title: "选择组织结构名称",
        width: 250,
        height: 400,
        ondestroy: function (action) {
            var orgName = action.TEXT;
            mini.get("downloadUnit").setValue(orgName);
            mini.get("downloadUnit").setText(orgName);
            var orgCode = action.ID;
            mini.get("orgCode").setValue(orgCode);
        }
    });
}
//点击取消
function onCancel(e) {
    window.CloseOwnerWindow("ok");
}


function versionDown(){
    window.location.href = "/versionManagement/download?filePath="+$("#filePath").val()+"&varsionCode="+$("#varsionCode").val();
    window.setTimeout(function () {
        if (checkSubmitFlg) {
            var o = form.getData();
            form.validate();
            if (form.isValid() == false) {
                validNoticeAlert();
                return;
            }
            checkSubmitFlg = false;
            $.ajax({
                url: "/versionDownload/saveDownInfo?varsionCode="+$("#varsionCode").text(),
                type: 'post',
                dataType: "text json",
                data: o,
                success: function (data) {
                    if(data.code == "true"){
                        /**
                         * 进行下载之前需要先判断是否存在改下载文件
                         * @type {string}
                         */
                        window.CloseOwnerWindow("ok");
                    }else{
                        mini.alert("信息保存失败，请稍后下载");
                        window.CloseOwnerWindow("ok");
                    }
                },
                error: function (data) {
                    mini.alert("失败");
                    window.CloseOwnerWindow("ok");
                }
            });
        }
    },1000);

}

