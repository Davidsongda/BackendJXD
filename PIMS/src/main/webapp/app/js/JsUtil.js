/**
 * Created by Cank on 2016/9/18.
 */
//特殊字符过滤
function characterUtilJs(o) {
    var pattern = new RegExp("[']")
    for (var i in o) {
        if (i == 'sql'|| i == 'roleContent') {
            continue;
        } else if (pattern.test(o[i]) == true) {
            alert("非法字符！");
            return false;
        }
    }
    return true;
}

