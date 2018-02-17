<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<%@ page contentType="text/html;charset=UTF-8" language="java" %>
<html>
<head>
    <title>组织机构列表</title>
    <%@ include file="../../common/style.jsp" %>
    <%@ include file="../../common/script.jsp" %>
</head>
<body class="list-body">
<iframe id="exportIframe" style="display: none;"></iframe>
<div class="body_main">
    <div class="search-box clearfix">
        <%--可能会添加的功能--%>
        <div class="form-group">
            <label>单位名称:</label>
            <input id="key" class="mini-textbox" emptyText="请输入" vtype="specialCharacter"/>
        </div>
        <div class="form-group">
            <a class="mini-button" onclick="search()">查&nbsp;询</a>
        </div>
        <div class="form-group last-group">
            <a class="mini-btn" onclick="add()">新&nbsp;增</a>
            <a class="mini-btn" onclick="edit()">修&nbsp;改</a>
            <a class="mini-btn" onclick="del()">删&nbsp;除</a>
            <a class="mini-btn" onclick="exportDataExcel('${unitcode}')">导&nbsp;出</a>
            <a class="mini-btn" onclick="importDataExcel()">导&nbsp;入</a>
        </div>
    </div>
    <div id="datagrid1" class="mini-datagrid"
         url="/org/pageList?unitcode=${unitcode}&unitbelong=${unitbelong}" sizeList="[30,40,50]" pageSize="30"
         allowAlternating="true" multiSelect="true" allowResizeColumn="true">
        <%--<input name="UNITID" class="mini-hidden"/>--%>
        <div property="columns" showVGridLines="true">
            <%--复选框 暂保留--%>
            <div type="checkcolumn" width="20"></div>
            <div type="indexcolumn" headerAlign="center" align="center" width="40">序号</div>
            <div field="UNITNAME" width="150" align="center" headerAlign="center">单位名称
            </div>
            <div field="UNITCODE" width="100" headerAlign="center" align="center">
                单位编号
            </div>
            <div field="UNITBELONG" width="150" align="center" headerAlign="center" align="center">
                所属单位编号
            </div>
            <div field="VALID" name="validcolumn" width="150" align="center" headerAlign="center"
                 align="center">有效标识
            </div>
            <div field="UNITTYPEID" width="150" align="center" headerAlign="center" align="center">单位类别
            </div>
            <div field="MEMO" width="150" align="left" headerAlign="center">备注说明
            </div>
        </div>
    </div>
</div>
<script type="text/javascript" charset="UTF-8" src="${BASE_FRONT}/app/js/common/resize.js"></script>
<script type="text/javascript" charset="utf-8" src="${BASE_FRONT}/app/js/manage/org/organizationList.js"></script>
</body>
</html>
