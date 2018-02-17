package com.tails.system.controller.manage;

import com.tails.common.utils.JsonUtils;
import com.tails.system.model.manage.SysResource;
import com.tails.system.service.manage.ISysResourceService;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.validation.BindingResult;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.ResponseBody;

import javax.annotation.Resource;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.io.IOException;
import java.util.Date;
import java.util.HashMap;

/**
 * Created by Administrator on 2017/3/21.
 */
@Controller
@RequestMapping("/sysResource")
public class SysResourceContorller {
    @Resource
    private ISysResourceService sysResourceService;

    /**
     * 跳转到资源添加页面
     * @return
     */
    @RequestMapping(value = "/addSysResource")
    public String addSysResourse() {
        return "/manage/sysResource/addSysResource";
    }

    /**
     * 跳转到资源展示页面
     * @return
     */
    @RequestMapping(value = "/SysResource")
    public String SysResource() {
        return "/manage/sysResource/sysResourceList";
    }

    /**
     * 跳转到资源修改页面
     * @return
     */
    @RequestMapping(value = "/editSysResource")
    public String editSysResource() {
        return "/manage/sysResource/editSysResource";
    }

    /**
     * 修改资源数据
     * @param request
     * @param response
     * @param sysResource
     * @return
     */
    @RequestMapping(value = "/editData", method = RequestMethod.POST)
    @ResponseBody
    public String editDataSysResource(HttpServletRequest request, HttpServletResponse response, SysResource sysResource) {
        System.out.println(sysResource.getResourceId());
        String id = request.getParameter("RESOURCE_ID");
        String name = request.getParameter("RESOURCE_NAME");
        String code = request.getParameter("RESOURCE_CODE");
        String type = request.getParameter("RESOURCE_TYPE");
        String superiorCode = request.getParameter("P_RESOURCE_CODE");
        String superior = request.getParameter("P_RESOURCE_NAME");
        String path = request.getParameter("RESOURCE_PATH");
        String sign = request.getParameter("RESOURCE_SIGN");
        String remark = request.getParameter("REMARK");
        sysResource.setResourceId(id);
        sysResource.setResourceName(name);
        sysResource.setResourceCode(code);
        sysResource.setResourceType(type);
        sysResource.setpResourceCode(superiorCode);
        sysResource.setpResourceName(superior);
        sysResource.setRemark(remark);
        sysResource.setResourcePath(path);
        sysResource.setResourceSign(sign);
        int edit = sysResourceService.editData(sysResource);
        HashMap map = new HashMap();
        map.put("code", edit);
        String json = JsonUtils.Encode(map);
        return json;
    }

    /**
     * 分页显示资源数据
     *
     * @param sysResource
     * @param result
     * @param model
     * @param request
     * @param response
     * @throws IOException
     */
    @RequestMapping(value = "/pageList", method = RequestMethod.POST)
    public void pageList(SysResource sysResource, BindingResult result, Model model, HttpServletRequest request, HttpServletResponse response) throws IOException {
        //查询条件
        String name = request.getParameter("name")==null?request.getParameter("name"):request.getParameter("name").trim();
        String pResourceCode = request.getParameter("pResourceCode");//上级
        String includeParent = request.getParameter("includeParent");
        //分页
        int pageIndex = Integer.parseInt(request.getParameter("pageIndex"));
        int pageSize = Integer.parseInt(request.getParameter("pageSize"));
        HashMap map = sysResourceService.pageList(name, pageIndex, pageSize, pResourceCode, includeParent);
        String json = JsonUtils.Encode(map);
        response.getWriter().write(json);
    }

    /**
     * 新增资源数据
     * @param request
     * @param response
     * @param sysResource
     * @return
     */
    @RequestMapping(value = "/saveData", method = RequestMethod.POST)
    @ResponseBody
    public HashMap saveDataSysResource(HttpServletRequest request, HttpServletResponse response, SysResource sysResource) {
        Date date = new Date();
        sysResource.setCreateTime(date);
        int save = sysResourceService.insert(sysResource);
        HashMap map = new HashMap();
        map.put("code", save);
        String json = JsonUtils.Encode(map);
        return map;
    }

    /**
     * 修改之前进行资源查询
     *
     * @param request
     * @param response
     * @throws IOException
     */
    @RequestMapping(value = "/setData", method = RequestMethod.POST)
    @ResponseBody
    public void setData(HttpServletRequest request, HttpServletResponse response) throws IOException {
        String id = request.getParameter("id");
        HashMap map = sysResourceService.setData(id);
        String json = JsonUtils.Encode(map);
        response.getWriter().write(json);
    }

    /**
     * 删除资源数据
     *
     * @param request
     * @param response
     * @return
     */
    @RequestMapping(value = "/deleteData")
    @ResponseBody
    public HashMap deleteByPrimaryKey(HttpServletRequest request, HttpServletResponse response) {
        HashMap map = new HashMap();
        try {
            String idStr = request.getParameter("id");
            String[] ids = idStr.split(",");
            int delete = 0;
            for (int i = 0; i < ids.length; i++) {
                delete = sysResourceService.delete(ids[i]);
            }
            map.put("code", delete);
            return map;
        } catch (Exception e) {
            map.put("code", "-1");
            return map;
        }
    }

    /**
     * 跳转到资源树页面
     * @return
     */
    @RequestMapping(value = "/sysResourceTree")
    public String demoTree() {
        return "/manage/sysResource/sysResourceTree";
    }

    /**
     * 跳转到选择上级资源树页面
     * @return
     */
    @RequestMapping(value = "resourceNameTree")
    public String resourceNameTree() {
        return "/manage/sysResource/resourceNameTree";
    }

    /**
     * 加载资源树
     * @param response
     */
    @RequestMapping(value = "/loadSysResourceTree")
    public void LoadSysResourceTree(HttpServletResponse response) {
        String treeNodesJson = sysResourceService.loadSysResourceTreeService();
        try {
            response.getWriter().write(treeNodesJson);
        } catch (IOException e) {
            e.printStackTrace();
        }
    }

    /**
     *生成上下等级树
     * @param request
     * @return
     */
    @RequestMapping(value = "/sysResourceList")
    public String sysResourceList(HttpServletRequest request) {
        String text = request.getParameter("TEXT");
        String pid = request.getParameter("ID");
        request.setAttribute("text", text);//本级组织名称
        request.setAttribute("pid", pid);//上级组织编码
        return "/manage/sysResource/sysResourceList";
    }


}
