package com.tails.system.dao.manage;

import com.tails.common.generic.GenericDao;
import com.tails.system.model.manage.Role;

import java.util.HashMap;

/**
 * Created by Administrator on 2017/3/21.
 */
public interface IRoleDao extends GenericDao<Role, Long> {
    /**
     * 分页显示角色信息
     * @param name
     * @param pageIndex
     * @param pageSize
     * @return
     */
    HashMap roleList(String name, int pageIndex, int pageSize);

    /**
     * 编辑角色信息，数据回填
     * @param id
     * @return
     */
    HashMap setData(String id);

    /**
     * 增加角色
     * @param role
     * @return
     */
    int insertSelective(Role role);

    /**
     * 编辑修改角色信息
     * @param map
     * @return
     */
    int editSelective(HashMap<String,Object> map);

    /**
     * 删除角色
     * @param ids
     * @return
     */
    int deleteByPrimaryKeys(String ids);
}
