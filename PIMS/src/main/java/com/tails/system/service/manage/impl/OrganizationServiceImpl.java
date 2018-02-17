package com.tails.system.service.manage.impl;

import com.tails.system.dao.manage.IOrganizationDao;
import com.tails.system.model.manage.Organization;
import com.tails.system.service.manage.IOrganizationService;
import flexjson.JSONSerializer;
import org.springframework.stereotype.Service;
import javax.annotation.Resource;
import java.util.HashMap;
import java.util.List;

/**
 * Created by Administrator on 2017/3/21.
 */
@Service("orgService")
public class OrganizationServiceImpl implements IOrganizationService {

    @Resource
    private IOrganizationDao dao;

    /**
    * 分页查询组织机构列表
    * */
    public HashMap orgList(HashMap<String,Object> map) {
        return dao.queryList(map);
    }

    /**
    * 添加组织结构
    * */
    public int insertSelective(Organization org) {
        return dao.insertSelective(org);
    }

    /**
    * 根据id查询单条数据
    * */
    public HashMap setData(String id) throws Exception {
        return dao.setData(id);
    }

    /**
     * 根据id删除组织机构数据
     * @param ids
     * @return
     */
    public int deleteByPrimaryKeys(String ids) {
        return dao.deleteByPrimaryKeys(ids);
    }

    /**
     * 加载树
     * @return
     */
    public String loadOrgTreeService(){
        List list = dao.loadOrgTreeDao();
        if(list==null){
            return "";
        }else{
            if(list != null && (list.getClass().equals(String.class))) return list.toString();
            JSONSerializer serializer = new JSONSerializer();
            return serializer.deepSerialize(list);
        }
    }

    /**
     * 查询组织性质数据
     * @return
     */
    public List natureCheckBox() {
        return dao.natureCheckBox();
    }
    public Organization getByOrgName(String orgCode){
        return dao.getByOrgName(orgCode);
    }

    public int insertRoleUserByUserIdAndRoleId(String roleId, String[] userIds) {
        int callBackValue=0;
        for(int i = 0;i<userIds.length;i++){
            dao.insertRoleUserByUserIdAndRoleId(roleId,userIds[i]);
             callBackValue++;
        }
        return callBackValue;
    }

    /**
     * 根据用户id删除用户角色表数据
     * @param roleId
     * @return
     */
    public int deleteRelationOfUserAndRole(String roleId, String orgCode, String nameText){
        return dao.deleteRelationOfUserAndRole(roleId, orgCode, nameText);
    }

    /**
     * 获取角色授权给的用户
     *
     * @param roleId
     * @return
     */
    public HashMap getRoleResource(String roleId) {
        //查询有多少Id被分配与该角色
        List<String> list = dao.getRoleRes(roleId);
        //通过resourceId 去查询资源对象
        if(list.size()>0){
            HashMap map = dao.getResourceByIds(list);
            return map;
        }else{
            HashMap noValueMap = new HashMap();
            noValueMap.put("code",-1);
            return noValueMap;
        }
    }

    /**
     * 添加方法 未使用
     * @param organization
     * @return
     */
    @Override
    public int insert(Organization organization) {
        return 0;
    }

    /**
     * 更新方法 未使用
     * @param organization
     * @return
     */
    @Override
    public int update(Organization organization) {
        return dao.updateByPrimaryKeySelective(organization);
    }

    /**
     * 刪除方法 未使用
     * @param id 主键
     * @return
     */
    @Override
    public int delete(String id) {
        return 0;
    }

    /**
     * 根據id查詢 未使用
     * @param id
     * @return
     */
    @Override
    public Organization selectById(String id) {
        return dao.selectByPrimaryKey(id);
    }

    /**
     * 查詢返回對象 未使用
     * @return
     */
    @Override
    public Organization selectOne() {
        return null;
    }

    /**
     * 查詢 未使用
     * @return
     */
    @Override
    public List<Organization> selectList() {
        return null;
    }

}
