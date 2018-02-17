package com.tails.system.service.manage;

import com.tails.common.generic.GenericService;
import com.tails.system.model.manage.Organization;

import java.util.HashMap;
import java.util.List;

/**
 * Created by Administrator on 2017/3/21.
 * 组织机构service接口
 */
public interface IOrganizationService extends GenericService<Organization, String> {
    /*
    * 分页查询组织机构数据接口
    * */
    public HashMap orgList(HashMap<String, Object> map);

    /*
    * 添加组织结构
    * */
    public int insertSelective(Organization org);
    /*
    *   根据id去数据库查
    * */
    public HashMap setData(String id) throws Exception;

    //根据id删除组织机构数据
    public int deleteByPrimaryKeys(String ids);

    //加载组织机构树
    public String loadOrgTreeService();

    /**
     * 查询组织性质
     * @return
     */
    public List natureCheckBox();

    public Organization getByOrgName(String orgName);

    /**
     * 批量添加用户角色表数据
     * @param roleId
     * @param userIds
     * @return
     */
    public int insertRoleUserByUserIdAndRoleId(String roleId,String[] userIds);

    /**
     * 根据角色id删除用户角色表数据
     * @param roleId
     * @return
     */
    public int deleteRelationOfUserAndRole(String roleId, String orgCode, String nameText);

    /**
     * 根据角色id去查角色用户表
     * @param roleId
     * @return
     */
    HashMap getRoleResource(String roleId);

    public Organization selectById(String id) ;
}
