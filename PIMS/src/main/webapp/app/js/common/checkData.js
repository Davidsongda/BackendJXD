/* 是否汉字 */
function isChinese(v) {
	var re = new RegExp("^[\u4e00-\u9fa5]+$");
	if (re.test(v)) return true;
	return false;
}
/*电话号码的验证长度必须是11位*/
function onTelephoneValidation(e){
    if (e.isValid) {
        var pattern = /\d*/;
        if (e.value.length < 11 || e.value.length > 11 || pattern.test(e.value) == false) {
            e.errorText = "必须输入11位数字";
            e.isValid = false;
        }
    }
}
/*验证是否是管理员不能为空*/
function onIssjValidation(e){
    if (e.isValid) {
    	if(e.value=="" || e.value==null){
            e.errorText = "不能为空";
            e.isValid = false;
		}
	}
}
/*验证状态不能为空*/
function onStateValidation(e){
    if (e.isValid) {
        if(e.value=="" || e.value==null){
            e.errorText = "不能为空";
            e.isValid = false;
        }
    }
}

function validNoticeAlert(){
    mini.alert("存在填写项不符合要求！请检查");
}
//验证特殊字符
/*自定义vtype*/
mini.VTypes["specialCharacterErrorText"] = "不能含有特殊字符";
mini.VTypes["specialCharacter"] = function (v) {
    var re = new RegExp("[`~!@#$%^&*()+=|{}';',\\[\\]<>/?~！@#￥%……&*（）——+|{}【】‘；：”“’。，、？]");
    if (re.test(v)) {
        return false;
    } else {
        return true;

    }
}