<!-- organTree.jsp-->
<%@ page language="java" import="java.util.*" pageEncoding="utf-8"%>
<%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c" %>
<%
    String path = request.getContextPath();
    String basePath = request.getScheme()+"://"+request.getServerName()+":"+request.getServerPort()+path+"/";

%>
<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">

<html xmlns="http://www.w3.org/1999/xhtml">
<head>
    <title>组织机构树</title>
    <meta http-equiv="content-type" content="text/html; charset=UTF-8" />
    <script src="<%=basePath %>app/lib/jquery/jquery-1.10.2.min.js" type="text/javascript"></script>
    <script src="<%=basePath %>app/lib/miniui/miniui.js" type="text/javascript"></script>
    <link href="<%=basePath %>app/lib/miniui/themes/default/miniui.css" rel="stylesheet" type="text/css"/>
    <link href="<%=basePath %>app/lib/miniui/themes/icons.css" rel="stylesheet" type="text/css"/>

    <style type="text/css">
        html, html body
        {
            padding:0;border:0;margin:0;
            width:100%;height:100%;overflow:hidden;
            font-family:Verdana;
            font-size:12px;
            line-height:22px;
        }
        .mini-layout-region-south img
        {
            vertical-align:top;
        }
    </style>
    <%--   <script src="core.js" type="text/javascript"></script>--%>
</head>
<body>
<div class="mini-layout" style="width:100%;height:100%; background-color: white;">
    <div>  <input type="button" onclick="ok()" value="确定" class="input-flat"/></div>
    <div region="west" title="组织机构树" showHeader="true" bodyStyle="padding-left:1px;" width="280" minWidth="100" maxWidth="350">
        <%-- <ul id="apiTree" class="mini-tree"  url="<%=basePath %>demo/loadDemoTree"   textField="text" idField="id"  parentField="pid" showTreeIcon="true" style="width:100%;height:100%;" >
         </ul>--%>
        <ul id="apiTree" class="mini-tree" url="<%=basePath %>org/loadOrgTree" style="width:100%;"
            showTreeIcon="true" textField="TEXT" idField="ID" parentField="PID" resultAsTree="false"
        ></ul>
    </div>
</div>

<script type="text/javascript">
    mini.parse();
    var tree = mini.get("apiTree");
    var basePath = '<%=basePath %>';
    function ok() {
        var node = tree.getSelectedNode();
        window.CloseOwnerWindow(node);

    }


</script>
</body>
</html>
