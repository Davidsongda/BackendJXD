<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<%@ page contentType="text/html;charset=UTF-8" language="java" %>
<html>
<head>
    <%@ include file="../../common/style.jsp" %>
    <%@ include file="../../common/script.jsp" %>
</head>
<body class="list-body">
<div class="body_main">
    <div class="search-box clearfix">
        <div class="form-group">
            <label>资源名称：</label>
            <input id="names" class="mini-textbox" emptyText="请输入" vtype="specialCharacter"/>
            <input id="codeId" class="mini-textbox" style="display: none;" value=""/>
            <input id="incloudF" name="incloudF" class="mini-checkbox" text="是否包含下级" value="Y" trueValue="Y"
                   falseValue="N"/>
        </div>
        <div class="form-group">
            <a class="mini-button" onclick="search()">查&nbsp;询</a>
        </div>
    </div>
    <input type="hidden" id="pidOfResourceTreeForSavingFilter" value="${pid}" >
    <div id="datagrid1" class="mini-datagrid"
         url="/roleRelevance/pageList?pResourceCode=${pid}" idField="RESOURCE_ID" showPager="false" allowResize="true"
         multiSelect="true" onload="onGridLoad" onselectionchanged="onSelectoinChanged"
    >

        <div property="columns">
            <div type="checkcolumn" width="30"></div>
            <div type="indexcolumn" width="40">序号</div>
            <div field="RESOURCE_ID" visible="false" width="100" headerAlign="center" align="center">ID
            </div>
            <div field="RESOURCE_NAME" width="100" headerAlign="center" align="left">资源名称</div>
            <div field="RESOURCE_TYPE" width="100" align="center" headerAlign="center">资源性质</div>
            <div field="RESOURCE_PATH" width="100" align="left" headerAlign="center">资源路径</div>
            <div field="RESOURCE_SIGN" visible="false" width="100" align="center" headerAlign="center">资源权限标志</div>
            <div field="P_RESOURCE_NAME" width="100" align="center" headerAlign="center">上级资源</div>
            <div field="CREATE_TIME" visible="false" dateFormat="yyyy-MM-dd HH:mm:ss " width="100" align="center"
                 headerAlign="center">创建时间
            </div>
            <div field="REMARK" visible="false" width="100" align="center" headerAlign="center">备注</div>

        </div>
    </div>
</div>
<script type="text/javascript" charset="utf-8" src="${BASE_FRONT}/app/js/common/resize.js"></script>
<script type="text/javascript" charset="utf-8"
        src="${BASE_FRONT}/app/js/manage/resourcerelevance/resourceRelList.js"></script>
</body>
</html>
