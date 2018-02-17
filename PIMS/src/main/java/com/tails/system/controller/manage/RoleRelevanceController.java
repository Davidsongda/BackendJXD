package com.tails.system.controller.manage;

import com.tails.common.utils.JsonUtils;
import com.tails.system.model.manage.Role;
import com.tails.system.service.manage.IRoleResourceRelService;
import com.tails.system.service.manage.IRoleServices;
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
import java.util.HashMap;

/**
 * Created by llm on 2017/4/1.
 */
@Controller
@RequestMapping("/roleRelevance")
public class RoleRelevanceController {
    @Resource
    private ISysResourceService sysResourceService;
    @Resource(name = "roleServiceFront")
    private IRoleServices roleService;
    @Resource
    private IRoleResourceRelService roleResourceRelService;

    /**
     * @param role
     * @param result
     * @param model
     * @param request
     * @param response
     * @throws IOException
     * @auther llm
     * descript 资源源列表
     */
    @RequestMapping(value = "/pageList", method = RequestMethod.POST)
    public void pageList(Role role, BindingResult result, Model model, HttpServletRequest request, HttpServletResponse response) throws IOException {
        //查询条件
        String roleId = request.getParameter("roleId") == null ? "" : request.getParameter("roleId");
        String name = request.getParameter("name")==null?"":request.getParameter("name").trim();
        String pResourceCode = request.getParameter("pResourceCode");
        String includeParent = request.getParameter("includeParent");
        //分页
        int pageIndex = 0;
        int pageSize = 10000;
        //回填选择到的数据设置为选择
        HashMap map = sysResourceService.pageList(name, pageIndex, pageSize, pResourceCode, includeParent);
        String json = JsonUtils.Encode(map);
        response.getWriter().write(json);
    }

    /**
     * @param role
     * @param result
     * @param model
     * @param request
     * @param response
     * @throws IOException
     * @auther llm
     * descript 资源源列表
     */
    @RequestMapping(value = "/getRoleResource", method = RequestMethod.POST)
    public void getRoleResource(Role role, BindingResult result, Model model, HttpServletRequest request, HttpServletResponse response) throws IOException {
        //查询条件
        String roleId = request.getParameter("roleId") == null ? "" : request.getParameter("roleId");
        HashMap map = sysResourceService.getRoleResource(roleId);
        String json = JsonUtils.Encode(map);
        response.getWriter().write(json);
    }

    /**
     * 跳转到资源树的界面
     *
     * @return
     */
    @RequestMapping(value = "/sysResourceTree")
    public String demoTree() {
        return "/manage/resourcerelevance/resourceRelTree";
    }

    /**
     * 跳转到角色页面
     *
     * @return
     */
    @RequestMapping(value = "/roleRelevanceList")
    public String role() {
        return "/manage/resourcerelevance/resourceRelevance";
    }

    /**
     * 资源树点击事件
     *
     * @param request
     * @return
     */
    @RequestMapping(value = "/sysResourceList")
    public String sysResourceList(HttpServletRequest request) {
        String text = request.getParameter("TEXT");
        String pid = request.getParameter("ID");
        request.setAttribute("text", text);//本级组织名称
        request.setAttribute("pid", pid);//上级组织编码
        return "/manage/resourcerelevance/resourceRelList";
    }

    /**
     * 角色资源配比
     *
     * @param request
     * @param response
     * @return
     */
    @RequestMapping(value = "/addRoleResoure")
    @ResponseBody
    public HashMap deleteByPrimaryKey(HttpServletRequest request, HttpServletResponse response) {
        HashMap map = new HashMap();
        try {
            String idStr = request.getParameter("id");
            String roleId = request.getParameter("roleId");
            String roleCode = request.getParameter("roleCode");
            String pid = request.getParameter("pid");
            String nameText = request.getParameter("nameText");
            //是否包含下级判断
            String includeParent = request.getParameter("includeParent");
            String[] ids = idStr.split(",");
            int count = roleResourceRelService.saveRelResource(ids, roleCode, roleId, includeParent, pid, nameText);
            if (count > 0) {
                map.put("result", true);
            }
        } catch (Exception e) {
            e.printStackTrace();
            map.put("result", false);
        }
        return map;
    }

}
