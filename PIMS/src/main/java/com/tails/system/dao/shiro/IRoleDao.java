package com.tails.system.dao.shiro;

import java.util.List;

import com.tails.common.generic.GenericDao;
import com.tails.system.model.manage.Role;

/**
 * @Author 阁楼麻雀
 * @Date 2016-7-4 15:58
 * @Desc 角色Dao 接口
 */

public interface IRoleDao extends GenericDao<Role, String> {

    /**
     * @Author 阁楼麻雀
     * @Date 2016-7-4 15:58
     * @Desc 通过用户id 查询用户 拥有的角色
     */

    List<Role> selectRolesByUserId(String userId);
}