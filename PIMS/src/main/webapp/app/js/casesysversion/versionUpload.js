
/*
 * 离线系统上传功能
 * author wanghui 2017-6-6
 */
//防止保存多次的参数
var checkSubmitFlg = true;
var form = new mini.Form("form1");
mini.parse();
mini.get("upgradeUnit").setValue($("#departName").val());
mini.get("upgradeUnit").setText($("#departName").val());
//将用户单位进行显示


/**
 * 文件上传功能，表单提交并进行验证
 */
function onOk(){
    if (checkSubmitFlg) {
        form.validate();
        if (form.isValid() == false) {
            validNoticeAlert();
            return;
        }
        checkSubmitFlg = false;
        $("#form1").ajaxSubmit({
            type: 'post', // 提交方式 get/post
            dataType: "text json",
            url: '/versionManagement/upload', // 需要提交的 url
            success: function(result) {
                if(result.code == "true"){
                    mini.alert("上传成功");
                    window.CloseOwnerWindow("ok");
                }else{
                    checkSubmitFlg = true;
                    mini.alert("上传失败");
                }
            },
            error:function(){
                checkSubmitFlg = true;
                mini.alert("上传失败");
            }

        });
    }

}

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
            mini.get("upgradeUnit").setValue(orgName);
            mini.get("upgradeUnit").setText(orgName);
            var orgCode = action.ID;
            mini.get("orgCode").setValue(orgCode);
        }
    });
}
//点击取消
function onCancel(e) {
    window.CloseOwnerWindow("ok");
}


