package com.tails.system.controller.manage;

import com.tails.common.utils.JsonUtils;
import com.tails.common.utils.MD5Utils;
import com.tails.system.model.manage.Organization;
import com.tails.system.model.manage.Users;
import com.tails.system.service.manage.IOrganizationService;
import com.tails.system.service.manage.IUsersService;
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
import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;

@Controller
@RequestMapping("/users")
public class UsersController {
    @Resource
    private IUsersService usersService;
    @Resource
    private IOrganizationService orgService;

    /**
     * 加载左侧的用户组织机构树
     *
     * @return
     */
    @RequestMapping(value = "/usersTree")
    public String usersTree() {
        return "manage/users/userTree";
    }

    @RequestMapping(value = "/userListorgCode")
    public String userListorgCode(HttpServletRequest request, HttpServletResponse response) throws Exception {
        String orgCode = request.getParameter("orgCode");
        request.setAttribute("orgCode", orgCode);
        return "manage/users/usersList";
    }

    /**
     * 分页查询
     *
     * @param users
     * @param result
     * @param model
     * @param request
     * @param response
     * @throws IOException
     */
    @RequestMapping(value = "/userPageList", method = RequestMethod.POST)
    public void userPageList(Users users, BindingResult result, Model model, HttpServletRequest request, HttpServletResponse response) throws IOException {
        //查询条件：用户姓名和所属组织编码
        String name = request.getParameter("name");
        String orgCode = request.getParameter("orgCode");
        //分页
        int pageIndex = Integer.parseInt(request.getParameter("pageIndex"));
        int pageSize = Integer.parseInt(request.getParameter("pageSize"));
        HashMap usersMap = usersService.usersList(name, pageIndex, pageSize, orgCode);
        request.setAttribute("orgCode", orgCode);
        String json = JsonUtils.Encode(usersMap);
        response.getWriter().write(json);
    }

    /**
     * 添加新用户的组织和组织编码
     *
     * @param request
     * @param response
     * @return
     * @throws Exception
     */
    @RequestMapping(value = "/addUserOrganization")
    public String addUserOrganization(HttpServletRequest request, HttpServletResponse response) throws Exception {
        String orgCode = request.getParameter("orgCode");
        if (orgCode != null && !"".equals(orgCode)) {
            Organization organization = orgService.getByOrgName(orgCode);
            System.out.println(organization.getUnitCode());
            request.setAttribute("organization", organization);
        }
        return "/manage/users/addUser";
    }

    /**
     * 添加新用户
     *
     * @param request
     * @param response
     * @param users
     * @return
     */
    @RequestMapping(value = "/saveUser", method = RequestMethod.POST)
    @ResponseBody
    public HashMap saveUser(HttpServletRequest request, HttpServletResponse response, Users users) {
        /*获取所有的用户*/
        List<Users> usersList = usersService.getAllUsers();
        List<String> logoIds = new ArrayList<String>();
       /*获取所有的用户登录名称，验证登录名称是否存在*/
        for (int i = 0; i < usersList.size(); i++) {
            logoIds.add(usersList.get(i).getLogonId());
        }
        if (!logoIds.contains(users.getLogonId())) {
            users.setPassword(MD5Utils.getMd5For32("123456"));
            int save = usersService.insertUsers(users);
            HashMap map = new HashMap();
            map.put("code", save);
            String json = JsonUtils.Encode(map);
            return map;
        } else {
            HashMap map = new HashMap();
            map.put("code", 2);
            String json = JsonUtils.Encode(map);
            return map;
        }
    }

    /**
     * 通过主键删除用户
     *
     * @param request
     * @param response
     * @return
     */
    @RequestMapping(value = "/deleteUserByPrimaryKey")
    @ResponseBody
    public HashMap deleteUserByPrimaryKey(HttpServletRequest request, HttpServletResponse response) {
        HashMap map = new HashMap();
        try {
            String idStr = request.getParameter("id");
            String[] ids = idStr.split(",");
            int delete = -1;
            for (int i = 0; i < ids.length; i++) {
                delete = usersService.deleteUsersByPrimaryKey(ids[i]);
            }
            map.put("code", delete);
            return map;
        } catch (Exception e) {
            map.put("code", "-1");
            return map;
        }
    }

    /**
     * 跳转到修改用户的页面
     *
     * @return
     */
    @RequestMapping(value = "/editUser")
    public String editUser() {
        return "/manage/users/editUser";
    }

    /**
     * 通过主键查询单个用户用于查询
     *
     * @param request
     * @param response
     * @throws IOException
     */
    @RequestMapping(value = "/setUserData", method = RequestMethod.POST)
    public void setUserData(HttpServletRequest request, HttpServletResponse response) throws IOException {
        //查询条件
        String logonId = request.getParameter("userId");
        Users users = usersService.selectUsersByPrimaryKey(logonId);
        String json = JsonUtils.Encode(users);
        System.out.println(json);
        response.getWriter().write(json);
    }

    /**
     * 修改用户
     *
     * @param request
     * @param response
     * @param users
     * @return
     */
    @RequestMapping(value = "/updateUser", method = RequestMethod.POST)
    @ResponseBody
    public HashMap updateUser(HttpServletRequest request, HttpServletResponse response, Users users) {
        Users oldusers = usersService.selectUsersByPrimaryKey(users.getLogonId());
        oldusers.setName(users.getName());
        oldusers.setDepartId(users.getDepartId());
        oldusers.setDepartName(users.getDepartName());
        oldusers.setGzzh(users.getGzzh());
        oldusers.setIdEntId(users.getIdEntId());
        oldusers.setMainId(users.getMainId());
        oldusers.setState(users.getState());
        oldusers.setIssj(users.getIssj());
        oldusers.setTelephone(users.getTelephone());
        oldusers.setPersonId(users.getPersonId());
        oldusers.setSnlogonId(users.getSnlogonId());
        int edit = usersService.updateUsers(oldusers);
        HashMap map = new HashMap();
        map.put("code", edit);
        String json = JsonUtils.Encode(map);
        System.out.println(json);
        return map;
    }

    /**
     * 添加和修改用户时，点击弹出组织机构树
     *
     * @return
     */
    @RequestMapping(value = "/userOrgName")
    public String userOrgName() {
        return "/manage/users/userOrgName";
    }

    /**
     * 给弹出的组织机构树添加值
     *
     * @param request
     * @param response
     */
    @RequestMapping(value = "/getOrgName")
    public void getOrgName(HttpServletRequest request, HttpServletResponse response) {
        String treeNodesJson = orgService.loadOrgTreeService();
        try {
            response.getWriter().write(treeNodesJson);
        } catch (IOException e) {
            e.printStackTrace();
        }
    }
}
