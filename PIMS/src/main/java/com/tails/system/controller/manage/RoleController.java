package com.tails.system.controller.manage;

import com.tails.common.utils.JsonUtils;
import com.tails.system.model.manage.Role;
import com.tails.system.service.manage.IRoleServices;
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
 * @ClassName: RoleController
 * @Description: 角色类
 * @author：xuyan
 * @date: 2017-04-18 13:00:45
 */
@Controller
@RequestMapping("/role")
public class RoleController {
    @Resource(name = "roleServiceFront")
    private IRoleServices roleService;

    /**
     * @Title: pageList
     * @Description: 获取角色列表
     * @param role  角色信息
     * @return: void
     */
    @RequestMapping(value = "/pageList", method = RequestMethod.POST)
    public void pageList(Role role, BindingResult result, Model model, HttpServletRequest request, HttpServletResponse response) throws IOException {
        //查询条件
        String name = request.getParameter("name")==null?"":request.getParameter("name").trim();
        //分页
        int pageIndex = Integer.parseInt(request.getParameter("pageIndex"));
        int pageSize = Integer.parseInt(request.getParameter("pageSize"));
        HashMap map = roleService.roleList(name, pageIndex, pageSize);
        String json = JsonUtils.Encode(map);
        response.getWriter().write(json);
    }

    /**
     * @Title: addRole
     * @Description: 打开新增页面
     * @return: 页面地址
     */
    @RequestMapping(value = "/addRole")
    public String addRole() {
        return "/manage/role/addRole";
    }

    /**
     * @Title: editRole
     * @Description: 打开编辑页面
     * @return: 页面地址
     */
    @RequestMapping(value = "/editRole")
    public String editRole() {
        return "/manage/role/editRole";
    }

    /**
     * @Title: setData
     * @Description: 保存角色信息
     * @return: void
     */
    @RequestMapping(value = "/setData", method = RequestMethod.POST)
    public void setData(HttpServletRequest request, HttpServletResponse response) throws IOException {
        //查询条件
        String id = request.getParameter("id");
        HashMap map = roleService.setData(id);
        String json = JsonUtils.Encode(map);
        response.getWriter().write(json);
    }

    /**
     * @Title: role
     * @Description: 进入主页面
     * @return: void
     */
    @RequestMapping(value = "/role")

    public String role() {
        return "/manage/role/roleList";
    }

    /**
     * @Title: setData
     * @Description: 保存角色信息
     * @return: void
     */
    @RequestMapping(value = "/saveData", method = RequestMethod.POST)
    @ResponseBody
    public HashMap saveDataRole(HttpServletRequest request, HttpServletResponse response, Role role) {
        int save = roleService.insertSelective(role);
        HashMap map = new HashMap();
        map.put("code", save);
        return map;
    }

    /**
     * @Title: editData
     * @Description: 获取角色信息
     * @return: 角色信息
     */
    @RequestMapping(value = "/editData", method = RequestMethod.POST)
    @ResponseBody
    public HashMap editDataRole(HttpServletRequest request, HttpServletResponse response) {
        HashMap<String, Object> attrMap = new HashMap<String, Object>();
        String name = request.getParameter("ROLE_NAME");
        String shortName = request.getParameter("REMARK");
        String code = request.getParameter("ROLE_CODE");
        String id = request.getParameter("ROLE_ID");
        attrMap.put("name", name);
        attrMap.put("shortName", shortName);
        attrMap.put("code", code);
        attrMap.put("id", id);
        int edit = roleService.editSelective(attrMap);
        HashMap map = new HashMap();
        map.put("code", edit);
        return map;
    }

    /**
     * @Title: deleteByPrimaryKey
     * @Description: 删除角色信息
     * @return: void
     */
    @RequestMapping(value = "/deleteData")
    @ResponseBody
    public HashMap deleteByPrimaryKey(HttpServletRequest request, HttpServletResponse response)throws Exception {
            HashMap map = new HashMap();
        String idStr = request.getParameter("id");
        String[] ids = idStr.split(",");
        int delete = -1;
        for (int i = 0; i < ids.length; i++) {
            delete = roleService.deleteByPrimaryKeys(ids[i]);
        }
            if (delete>0) {
                map.put("code", delete);
            }else {
                map.put("code", "-1");
            }
        return map;
    }
}
