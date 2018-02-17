<%@ page contentType="text/html;charset=UTF-8" language="java" %>
<%
    String path = request.getContextPath();
    String basePath = request.getScheme() + "://" + request.getServerName() + ":" + request.getServerPort() + path + "/";
%>
<script type="text/javascript" charset="utf-8" src="<%=basePath %>/app/lib/jquery/jquery-1.10.2.min.js"></script>
<script type="text/javascript" charset="utf-8" src="<%=basePath %>/app/lib/bootstrap/js/bootstrap.min.js"></script>
<script type="text/javascript" charset="utf-8" src="<%=basePath %>/app/lib/miniui/miniui.js"></script>
<script type="text/javascript" src="${BASE_FRONT}/app/js/common/checkData.js"></script>
<script type="text/javascript" charset="utf-8" src="<%=basePath %>/app/lib/bootstrap/js/bootstrap-addtabs.js"></script>
<script type="text/javascript">
    BASE = '<%=basePath %>';
    BASE_FRONT = '<%=basePath %>'
</script>
