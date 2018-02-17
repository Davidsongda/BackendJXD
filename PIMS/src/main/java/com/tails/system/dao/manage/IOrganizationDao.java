package com.tails.system.dao.manage;

import com.tails.common.generic.GenericDao;
import com.tails.system.model.manage.Organization;

import java.util.HashMap;
import java.util.List;

/**
 * Created by Administrator on 2017/3/21.
 */
public interface IOrganizationDao extends GenericDao<Organization,String> {
    /*
    * 查询组织列表数据 带模糊查询
    * */
    public HashMap queryList(HashMap<String, Object> map);

    /*
    *   插入数据到组织机构表
    * */

    public int insertSelective(Organization org);

    /*
    * 根据id查询单条数据
    * */
    public HashMap setData(String id) throws Exception;

    /**
     * 根据id删除组织机构数据
     *
     * @param ids
     * @return
     */
    public int deleteByPrimaryKeys(String ids);

    /**
     * 加载树
     *
     * @return
     */
    public List loadOrgTreeDao();

    /**
     * @return 获取组织性质下拉框数据
     */
    public List natureCheckBox();

    public Organization getByOrgName(String orgCode);

    /**
     * 用户id和角色id插入到用户角色表
     *
     * @param roleId
     * @param userId
     * @return
     */
    public int insertRoleUserByUserIdAndRoleId(String roleId, String userId);

    /**
     * @param userId
     * @return
     */
    public int deleteRelationOfUserAndRole(String userId, String orgCode, String nameText);

    /**
     * 根据roleId 获取数据
     * @param roleId
     * @return
     */
    List<String> getRoleRes(String roleId);

    /**
     * 获取资源对象
     * @param list
     * @return
     */
    HashMap getResourceByIds(List list);
}
