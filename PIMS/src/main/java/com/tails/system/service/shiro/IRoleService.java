package com.tails.system.service.shiro;

import java.util.List;

import com.tails.common.generic.GenericService;
import com.tails.system.model.manage.Role;

/**
 * @Author 阁楼麻雀
 * @Date 2016-7-4
 * @Desc
 */
public interface IRoleService extends GenericService<Role, String> {
    /**
     * 通过用户id 查询用户 拥有的角色
     *
     * @param userId
     * @return
     */
    List<Role> selectRolesByUserId(String userId);
}
