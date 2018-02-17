package com.tails.system.service.manage;

import com.tails.common.generic.GenericService;
import com.tails.system.model.manage.Role;

import java.util.HashMap;

/**
 * Created by Administrator on 2017/3/21.
 */
public interface IRoleServices extends GenericService<Role,Long> {
    /**
     * 分页显示
     * @param name
     * @param pageIndex
     * @param pageSize
     * @return
     */
    HashMap roleList(String name, int pageIndex, int pageSize);

    /**
     * 编辑修改角色信息，数据回填
     * @param id
     * @return
     */
    HashMap setData(String id);

    /**
     * 添加角色
     * @param role
     * @return
     */
    int insertSelective(Role role);

    /**
     * 编辑修改角色
     * @param map
     * @return
     */
    int editSelective(HashMap<String,Object> map );

    /**
     * 删除角色
     * @param ids
     * @return
     */
    int deleteByPrimaryKeys(String ids);
}
