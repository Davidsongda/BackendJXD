<%@ page language="java" import="java.util.*" pageEncoding="utf-8" %>
<%@ include file="../common/global.jsp"%>
<html xmlns="http://www.w3.org/1999/xhtml">
<head>
	<link rel="shortcut icon" href="${BASE_FRONT}/app/img/favicon.ico" type="image/x-icon">
	<%@ include file="../common/title.jsp"%>
	<%@ include file="../common/meta.jsp"%>
	<%@ include file="../common/style.jsp"%>
	<%@ include file="../common/script.jsp"%>
	<link rel="stylesheet" href="${BASE_FRONT}/app/css/main/main.css">
	<script language="javascript" charset="utf-8" src="${BASE_FRONT}/app/js/main/main.js"></script>
	<!--[if lt IE 9]>
	<script src="<%=basePath %>app/lib/html/html5shiv.min.js"></script>
	<script src="<%=basePath %>app/lib/html/respond.min.js"></script>
	<![endif]-->
</head>
<body>
<div>
	<!--首页头部 start-->
	<%@ include file="../common/header.jsp"%>
	<!--首页头部 end-->

	<!--主要内容区 start-->
	<div id="cpanel" class="mini-splitter main" showSplit="true" allowResize="false" style="width: 100%;">
		<div size="230" class="left">
			<div class="page-sidebar sidebar-fixed" id="sidebar" style="position: relative;top:0;">
				<!-- Sidebar Menu -->
				<div class="slimScrollDiv">
					<ul id="nav" class="nav sidebar-menu">
						<!--
						<li mid="0" level="1">
							<a class="menu-dropdown" href="#" data-addtab="案例查询" title="案例查询" url="/caseSearch/caseTree">
								<i class="icon icon-menu0"></i>
								<span class="menu-text">案例查询</span>
								<i class="menu menu-close"></i>
							</a>
						</li>

						<li mid="1" level="1">
							<a class="menu-dropdown" href="#" data-addtab="案例分析报告" title="案例分析报告" url="/caseAnalyse/caseAnalyseTree">
								<i class="icon icon-menu1"></i>
								<span class="menu-text">案例分析报告</span>
								<i class="menu menu-close"></i>
							</a>
						</li>
						<li mid="2" level="1">
							<a class="menu-dropdown" href="#" title="案例上传管理">
								<i class="icon icon-menu2"></i>
								<span class="menu-text">案例上传管理</span>
								<i class="menu menu-close"></i>
							</a>
							<ul class="submenu" id="2">
								<li>
									<a class="menu-dropdown" href="#" data-addtab="案例管理" title="案例管理" url="/caseUpload/caseUploadTree">
										<span class="menu-text">案例管理</span>
									</a>
								</li>
								<li>
									<a class="menu-dropdown" href="#" data-addtab="数据版本查看" title="数据版本查看" url="/versionSearch/caseUploadSearch">
										<span class="menu-text">数据版本查看</span>
									</a>
								</li>
							</ul>
						</li>
						<li mid="3" level="1">
							<a class="menu-dropdown" href="#" title="离线案例库版本管理">
								<i class="icon icon-menu3"></i>
								<span class="menu-text">离线案例库版本管理</span>
								<i class="menu menu-close"></i>
							</a>
							<ul class="submenu" id="3">
								<li>
									<a class="menu-dropdown" href="#" data-addtab="案例版本管理" title="案例版本管理" url="/versionManagement/getList">
										<span class="menu-text">案例版本管理</span>
									</a>
								</li>
								<li>
									<a class="menu-dropdown" href="#" data-addtab="案例版本查看" title="案例版本查看" url="/systemSearch/systemSearchPage">
										<span class="menu-text">案例版本查看</span>
									</a>
								</li>
								<li>
									<a class="menu-dropdown" href="#" data-addtab="版本下载" title="版本下载" url="/versionDownload/versionDownloadPage">
										<span class="menu-text">版本下载</span>
									</a>
								</li>
								<li>
									<a class="menu-dropdown" href="#" data-addtab="意见反馈" title="意见反馈" url="/feedBack/getList">
										<span class="menu-text">意见反馈</span>
									</a>
								</li>
							</ul>
						</li>
						<li mid="4" level="1">
							<a class="menu-dropdown" href="#" title="系统帮助">
								<i class="icon icon-menu4"></i>
								<span class="menu-text">系统帮助</span>
								<i class="menu menu-close"></i>
							</a>
							<ul class="submenu" id="4">
								<li>
									<a class="menu-dropdown" href="#" data-addtab="系统介绍" title="系统介绍" url="/systemIntroduce/systemIntroducePage">
										<span class="menu-text">系统介绍</span>
									</a>
								</li>
								<li>
									<a class="menu-dropdown" href="#" data-addtab="操作说明" title="操作说明" url="/systemSpecification/pdfView">
										<span class="menu-text">操作说明</span>
									</a>
								</li>
								<li>
									<a class="menu-dropdown" href="#" data-addtab="建议意见" title="建议意见" url="/systemAdvice/systemAdvicePage">
										<span class="menu-text">建议意见</span>
									</a>
								</li>
							</ul>
						</li>-->
						<li mid="5" level="1">
							<a class="menu-dropdown" href="#" title="系统管理">
								<i class="icon icon-menu5"></i>
								<span class="menu-text">系统管理</span>
								<i class="menu menu-close"></i>
							</a>
							<ul class="submenu" id="5">
								<li>
									<a class="menu-dropdown" href="#" data-addtab="组织机构管理" title="组织机构管理" url="/org/orgTree">
										<span class="menu-text">组织机构管理</span>
									</a>
								</li>
								<%--<li>--%>
									<%--<a class="menu-dropdown" href="#" data-addtab="人员管理" title="人员管理" url="/users/usersTree">--%>
										<%--<span class="menu-text">人员管理</span>--%>
									<%--</a>--%>
								<%--</li>--%>
								<%--<li>--%>
									<%--<a class="menu-dropdown" href="#" data-addtab="角色管理" title="角色管理" url="/role/role">--%>
										<%--<span class="menu-text">角色管理</span>--%>
									<%--</a>--%>
								<%--</li>--%>
								<%--<li>--%>
									<%--<a class="menu-dropdown" href="#" data-addtab="资源管理" title="资源管理" url="/sysResource/sysResourceTree">--%>
										<%--<span class="menu-text">资源管理</span>--%>
									<%--</a>--%>
								<%--</li>--%>
								<%--<li>--%>
									<%--<a class="menu-dropdown" href="#" data-addtab="资源关联" title="资源关联" url="/roleRelevance/roleRelevanceList">--%>
										<%--<span class="menu-text">资源关联</span>--%>
									<%--</a>--%>
								<%--</li>--%>
								<%--<li>--%>
									<%--<a class="menu-dropdown" href="#" data-addtab="用户授权" title="用户授权" url="/org/urlGrantPower">--%>
										<%--<span class="menu-text">用户授权</span>--%>
									<%--</a>--%>
								<%--</li>--%>
								<%--<li>--%>
									<%--<a class="menu-dropdown" href="#" data-addtab="系统参数管理" title="系统参数管理" url="/dictionary/dictionaryList">--%>
										<%--<span class="menu-text">系统参数管理</span>--%>
									<%--</a>--%>
								<%--</li>--%>
								<%--<li>--%>
									<%--<a class="menu-dropdown" href="#" data-addtab="操作日志查询" title="操作日志查询" url="/caseLog/caseLogList">--%>
										<%--<span class="menu-text">操作日志查询</span>--%>
									<%--</a>--%>
								<%--</li>--%>
								<%--<li>
									<a class="menu-dropdown" href="#" data-addtab="测试Demo" title="测试Demo" url="/demo/usersTree">
										<span class="menu-text">测试Demo</span>
									</a>
								</li>--%>
							</ul>
						</li>
						<%--<li mid="6" level="1">--%>
							<%--<a class="menu-dropdown" href="#">--%>
								<%--<i class="icon icon-menu6"></i>--%>
								<%--<span class="menu-text">后台服务管理</span>--%>
								<%--<i class="menu menu-close"></i>--%>
							<%--</a>--%>
							<%--<ul class="submenu" id="6">--%>
								<%--<li>--%>
									<%--<a class="menu-dropdown" href="#" data-addtab="案例上传后台管理" title="案例上传后台管理" url="">--%>
										<%--<span class="menu-text">案例上传后台管理</span>--%>
									<%--</a>--%>
								<%--</li>--%>
								<%--<li>--%>
									<%--<a class="menu-dropdown" href="#" data-addtab="离线案例库版本后台管理" title="离线案例库版本后台管理" url="">--%>
										<%--<span class="menu-text">离线案例库版本后台管理</span>--%>
									<%--</a>--%>
								<%--</li>--%>
								<%--<li>--%>
									<%--<a class="menu-dropdown" href="#" data-addtab="客户端案例库自动升级" title="客户端案例库自动升级" url="">--%>
										<%--<span class="menu-text">客户端案例库自动升级</span>--%>
									<%--</a>--%>
								<%--</li>--%>
								<%--<li>--%>
									<%--<a class="menu-dropdown" href="#" data-addtab="案例库系统后台管理" title="案例库系统后台管理" url="">--%>
										<%--<span class="menu-text">案例库系统后台管理</span>--%>
									<%--</a>--%>
								<%--</li>--%>
							<%--</ul>--%>
						<%--</li>--%>
					</ul>
				</div>
			</div>
		</div>
		<div id="tabs" showCollapseButton="false" class="right">
			<!-- Nav tabs -->
			<ul class="nav nav-tabs" role="tablist">
				<li role="presentation" class="active" id="tab_tab_首页" aria-url="/page/homepage">
					<a href="#tab_首页" aria-controls="tab_首页" role="tab" data-toggle="tab">首页</a>
				</li>
			</ul>
			<!-- Tab panes -->
			<div class="tab-content">
				<div class="tab-pane active" id="tab_首页" role="tabpanel">
					<iframe class="iframeClass" frameborder="no" scrolling="no" border="0" src="/page/homepage"></iframe>
				</div>
			</div>
		</div>
	</div>
	<!--主要内容区 end-->

	<!-- 脚部文件 start-->
	<div id="copyRight">
		<%@ include file="../common/footer.jsp"%>
	</div>
	<!-- 脚部文件 end-->
</div>
</body>
</html>
