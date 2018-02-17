/**
 * Created by 王书礼 on 2016/8/8.
 */
function onButtonEdit(obj) {
    var btnEdit = obj;
    mini.open({
        url:"#",
        showMaxButton: false,
        title: "选择树",
        width: 360,
        height: 450,
        ondestroy: function (action) {
            if (action == "ok") {
                var iframe = this.getIFrameEl();
                var data = iframe.contentWindow.GetData();
                data = mini.clone(data);
                if (data) {
                    btnEdit.setValue(data.id);
                    btnEdit.setText(data.text);
                }
            }
        }
    });

}