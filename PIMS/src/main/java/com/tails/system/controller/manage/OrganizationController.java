package com.tails.system.controller.manage;

import com.tails.common.utils.JsonUtils;
import com.tails.common.utils.UUIDHexGenerator;
import com.tails.common.utils.ImportExcelUtil;
import com.tails.system.model.manage.Organization;
import com.tails.system.service.manage.IOrganizationService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.ResponseBody;

import javax.annotation.Resource;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.io.IOException;
import java.io.FileInputStream;
import java.io.InputStream;
import java.io.OutputStream;
import java.io.BufferedOutputStream;
import java.util.*;

import org.apache.poi.hssf.usermodel.HSSFSheet;
import org.apache.poi.hssf.usermodel.HSSFWorkbook;
import org.springframework.web.multipart.MultipartFile;
import org.springframework.web.multipart.MultipartHttpServletRequest;

/**
 * Created by Administrator on 2017/3/21.
 */
@RequestMapping("/org")
@Controller
public class OrganizationController {

    @Resource
    private IOrganizationService service;
    @Autowired
    private ImportExcelUtil importExcelUtil;
    /**
    * 跳转到组织机构列表
    * */
    @RequestMapping("/firstPage")
    public String showList() {
        return "manage/org/organizationList";
    }

    /**
    * 返回列表数据
    * */
    @RequestMapping("/pageList")
    public void pageList(HttpServletRequest request, HttpServletResponse response) throws IOException {
        HashMap<String, Object> map = new HashMap<String, Object>();
        //查询条件
        String unitcode = request.getParameter("unitcode") == null ? "" : request.getParameter("unitcode");//单位编码
        String key = request.getParameter("key") == null ? "" : request.getParameter("key").trim();//模糊查询
        String unitbelong = request.getParameter("unitbelong") == null ? "" : request.getParameter("unitbelong");//上级组织编码
        //分页
        int pageIndex = 0;
        int pageSize =10000;
        map.put("key", key);
        map.put("pageIndex", pageIndex);
        map.put("pageSize", pageSize);
        map.put("unitcode", unitcode);
        map.put("unitbelong", unitbelong);
        Map rMap = service.orgList(map);
        String json = JsonUtils.Encode(rMap);
        response.getWriter().write(json);
    }

    /**
    * 跳转组织机构添加页面
    * */
    @RequestMapping(value = "/addOrg")
    public String addOrg(HttpServletRequest request) {
        Map<String, Object> map = new HashMap<String, Object>();
        String superiorCode = request.getParameter("superiorCode");
        return "manage/org/addOrg";
    }

    /**
    * 添加功能 保存组织机构信息到数据库
    * */
    @RequestMapping(value = "/saveData", method = RequestMethod.POST)
    @ResponseBody
    public HashMap saveDataOrg(Organization org) {
        try {
            org.setUnitId(UUIDHexGenerator.getUUID());
            int save = service.insertSelective(org);
            HashMap map = new HashMap();
            map.put("code", save);
            String json = JsonUtils.Encode(map);
            return map;
        }catch (Exception e){
            e.printStackTrace();
            return null;
        }
    }

    /**
    * 组织机构跳转编辑页面
    * */
    @RequestMapping(value = "/editManage")
    public String editOrg() {
        return "manage/org/editOrg";
    }

    @RequestMapping(value = "/setData", method = RequestMethod.POST)
    public void setData(HttpServletRequest request, HttpServletResponse response) throws IOException {
        try {
            //查询条件
            String id = request.getParameter("id");
            HashMap map = service.setData(id);
            String json = JsonUtils.Encode(map);
            response.getWriter().write(json);
        } catch (Exception e) {
            e.printStackTrace();
        }
    }

    /**
     * 获取id更新组织机构列表数据
     *
     * @param request
     * @param response
     * @param org
     * @return
     */
    @RequestMapping(value = "/editData", method = RequestMethod.POST)
    @ResponseBody
    public HashMap editDataOrg(HttpServletRequest request, HttpServletResponse response, Organization org) {
        Organization oldorg = service.selectById(org.getUnitId());
        oldorg.setUnitId(org.getUnitId());
        oldorg.setUnitCode(org.getUnitCode());
        oldorg.setUnitName(org.getUnitName());
        oldorg.setUnitBelong(org.getUnitBelong());
        oldorg.setValid(org.getValid());
        oldorg.setUnitTypeId(org.getUnitTypeId());
        oldorg.setMemo(org.getMemo());
        int edit = service.update(oldorg);
        HashMap map = new HashMap();
        map.put("code", edit);
        return map;
    }

    /**
     * 根据id删除列表数据
     *
     * @param request
     * @return
     */

    @RequestMapping(value = "/deleteData")
    @ResponseBody
    public HashMap deleteByPrimaryKey(HttpServletRequest request) {
        HashMap map = new HashMap();
        try {
            String idStr = request.getParameter("id");
            int delete = service.deleteByPrimaryKeys(idStr);
            map.put("code", delete);
            return map;
        } catch (Exception e) {
            map.put("code", "-1");
            return map;
        }
    }

    /**
     * 跳转到组织树 测试
     *
     * @return
     */
    @RequestMapping("/skipTree")
    public String organTree() {
        return "/demoTree/organTree";
    }

    /**
     * 跳转到我的组织树 测试
     *
     * @return
     */
    @RequestMapping("/orgTree")
    public String orgTree() {
        return "manage/org/orgTree";
    }

    /**
     * 加载组织机构树
     *
     * @param response
     * @date 2017-3-23
     */
    @RequestMapping(value = "/loadOrgTree")
    public void loadOrgTree(HttpServletResponse response) {
        String treeNodesJson = service.loadOrgTreeService();
        try {
            response.getWriter().write(treeNodesJson);
        } catch (IOException e) {
            e.printStackTrace();
        }
    }

    /**
     * 跳转到组织机构列表页
     *
     * @param request
     * @return
     */
    @RequestMapping(value = "/orgList")
    public String userList(HttpServletRequest request) {
        String unitcode = request.getParameter("ID") == null ? "" : request.getParameter("ID");
        String name = request.getParameter("key") == null ? "" : request.getParameter("key");
        String text = request.getParameter("TEXT") == null ? "" : request.getParameter("TEXT");
        String pid = request.getParameter("PID") == null ? "" : request.getParameter("PID");
        request.setAttribute("unitcode", unitcode);//组织编码
        request.setAttribute("unitname", text);//本级组织名称
        request.setAttribute("unitbelong", pid);//上级组织编码
        return "manage/org/organizationList";
    }

    /**
     * 添加功能回填上级组织编码和上级组织名称
     *
     * @param request
     * @param response
     * @throws IOException
     */
    @RequestMapping(value = "/setDataTOAdd", method = RequestMethod.POST)
    public void setDataTOAdd(HttpServletRequest request, HttpServletResponse response) throws IOException {
        //查询条件
        String superiorCode = request.getParameter("superiorCode");//上级组织编码
        String superior = request.getParameter("superior");//本级组织名称
        //String text = request.getParameter("text");//上级组织名称
        Map map = new HashMap();
        map.put("porgCode", superiorCode);
        map.put("porgName", superior);
        String json = JsonUtils.Encode(map);
        response.getWriter().write(json);
    }

    /**
     * 跳转到echarts1图表 测试
     *
     * @return
     */
    @RequestMapping("/echarts1")
    public String urlEcharts1() {
        return "/test/echarts1";
    }

    @RequestMapping("/natureCheckBox")
    public void natureCheckBox(HttpServletResponse response) {
        try {
            List list = service.natureCheckBox();
            String json = JsonUtils.Encode(list);
            response.getWriter().write(json);
        } catch (Exception e) {
            e.printStackTrace();
        }
    }

    /**
     * 弹出选择树
     *
     * @return
     */
    @RequestMapping("/selectNatures")
    public String selectNatures() {
        return "/manage/selectNaturesTree";
    }

    /**
     * 跳转到授权用户列表
     *
     * @return
     */
    @RequestMapping("/urlGrantPower")
    public String urlGrantPower() {
        return "manage/org/grantPower";
    }

    /**
     * 用户授权点击关联跳转的用户列表页面包含树
     *
     * @return
     */
    @RequestMapping("/openUserTree")
    public String openGrantUserList() {
        return "manage/org/userTreeForGrantPower";
    }

    /**
     * 跳转到为用户授权准备的纯用户列表页面
     *
     * @return
     */

    @RequestMapping("/urlUserList")
    public String urlUserList(HttpServletRequest request) {
        try {
            String orgName = request.getParameter("orgName");
            String orgCode = request.getParameter("orgCode");
            if (orgName != null && !"".equals(orgName)) {
                orgName = new String(orgName.getBytes("iso-8859-1"), "utf-8");
            }
            request.setAttribute("orgName", orgName);
            request.setAttribute("orgCode", orgCode);
            return "manage/org/usersListForGrantPower";
        } catch (Exception e) {
            e.printStackTrace();
            return null;
        }

    }

    /**
     * 回填角色id
     */
    @RequestMapping("/setDataTOGrand")
    public void setDataTOGrand(HttpServletRequest request, HttpServletResponse response) {
        Map<String, String> map = null;
        try {
            map = new HashMap<String, String>();
            String roleId = request.getParameter("roleId");
            map.put("roleCode", roleId);
            String json = JsonUtils.Encode(map);
            response.getWriter().write(json);
        } catch (Exception e) {
            e.printStackTrace();
        }
    }

    /**
     * 用户授权，插入用户id和角色id到用户角色表
     */
    @RequestMapping("/addGrandUser")
    public void addGrandUser(HttpServletRequest request, HttpServletResponse response) {
        try {
            HashMap<String, Object> map = new HashMap<String, Object>();
            String roleId = request.getParameter("roleId");
            String userId = request.getParameter("userId");
            String orgCode = request.getParameter("orgCode");
            String nameText = request.getParameter("nameText");
            int callbackForDeleteByUserId = service.deleteRelationOfUserAndRole(roleId, orgCode, nameText);
            String[] ids = userId.split(",");
            int i = service.insertRoleUserByUserIdAndRoleId(roleId, ids);
            map.put("code", i);
            String json = JsonUtils.Encode(map);
            response.getWriter().write(json);
        } catch (Exception e) {
            e.printStackTrace();
        }
    }

    /**
     *
     * @param request
     */
    @RequestMapping("/getRoleResource")
    public void getRoleResource(HttpServletRequest request,HttpServletResponse response){
       try {
           //查询条件
           String roleId = request.getParameter("roleId")== null ? "" : request.getParameter("roleId");;
           HashMap map = service.getRoleResource(roleId);
           String json = JsonUtils.Encode(map);
           response.getWriter().write(json);
       }catch (Exception e){
           e.printStackTrace();
       }
    }

    /**
     * POI导出组织结构信息
     * @param request
     */
    @RequestMapping("/exportDataExcel")
    public void exportDataExcel(HttpServletRequest request,HttpServletResponse response) throws IOException {
        HashMap<String, Object> map = new HashMap<String, Object>();
        //查询条件
        String key = request.getParameter("key") == null ? "" : request.getParameter("key");
        String unitcode = request.getParameter("unitcode")== null ? "" : request.getParameter("unitcode");
        int pageIndex = 0;
        int pageSize =10000;
        map.put("key", key);
        map.put("pageIndex", pageIndex);
        map.put("pageSize", pageSize);
        map.put("unitcode", unitcode);
        Map rMap = service.orgList(map);
        String filename = "组织机构信息.xls";
        String realPath =  request.getSession().getServletContext().getRealPath("/");
        InputStream is  = new FileInputStream( realPath.substring(0,realPath.indexOf("PIMS")+4)+"/resourceFile/"+filename);
        HSSFWorkbook workbook = new HSSFWorkbook(is);
        //获取第一个sheet页
        HSSFSheet sheet =  workbook.getSheetAt(0);
        //根据条件查询出记录，然后将记录赋值到excel中。
        ArrayList<HashMap> datas = (ArrayList<HashMap>)rMap.get("data");
        String unittype = "";
        for(int i=0; i<datas.size(); i++){
            HashMap dataMap = datas.get(i);
            unittype = dataMap.get("UNITTYPEID").toString();
            sheet.getRow(i+1).getCell(0).setCellValue(dataMap.get("UNITNAME").toString());
            sheet.getRow(i+1).getCell(1).setCellValue(dataMap.get("UNITCODE").toString());
            sheet.getRow(i+1).getCell(2).setCellValue(dataMap.get("UNITBELONG").toString());
            sheet.getRow(i+1).getCell(3).setCellValue(unittype.equals("1")?"局":(unittype.equals("2")?"段":(unittype.equals("3")?"车间":(unittype.equals("4")?"班组":""))));
            sheet.getRow(i+1).getCell(4).setCellValue(dataMap.get("MEMO").toString());
        }
        //提供excel下载
        response.reset();
        response.setContentType("application/octet-stream");
        response.addHeader("Content-Disposition", "attachment;filename="+java.net.URLEncoder.encode(filename,"UTF-8"));
        response.addHeader("Content-Length", "");
        OutputStream os = new BufferedOutputStream(response.getOutputStream());
        workbook.write(os);
        os.flush();
        os.close();
    }

    /**
     * 跳转导入文件选择页面
     * */
    @RequestMapping(value = "/importDataExcel")
    public String importDataExcel(HttpServletRequest request) {
        return "manage/org/importDataExcel";
    }
    /**
     * 导入文件
     * */
    @RequestMapping(value = "/uploadExcel",method = RequestMethod.POST)
    public void uploadExcel(HttpServletRequest request,HttpServletResponse response) throws Exception {
        MultipartHttpServletRequest multipartHttpServletRequest = (MultipartHttpServletRequest)request;
        MultipartFile multipartFile = multipartHttpServletRequest.getFile("file");
        if(multipartFile.isEmpty()){
            throw new Exception("文件不存在！");
        }
        InputStream inputStream = multipartFile.getInputStream();
        List<List<Object>> dataList = importExcelUtil.getBankListByExcel(inputStream,multipartFile.getOriginalFilename());
        Organization org = new Organization();
        String unittype = "";
        for(int i=1; i<dataList.size(); i++){
            List<Object> data = dataList.get(i);
            if(!data.get(0).toString().trim().equals("")){
                unittype = data.get(3).toString().trim();
                org.setUnitName(data.get(0).toString());
                org.setUnitCode(data.get(1).toString());
                org.setUnitBelong(data.get(2).toString());
                org.setUnitTypeId(unittype.equals("局")?1:(unittype.equals("段")?2:(unittype.equals("车间")?3:(unittype.equals("班组")?4:null))));
                org.setMemo(data.get(4).toString());
                org.setValid("1");
                org.setUnitId(UUIDHexGenerator.getUUID());
                service.insertSelective(org);
            }
        }
        inputStream.close();
    }
}
