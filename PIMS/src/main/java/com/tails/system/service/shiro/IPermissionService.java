package com.tails.system.service.shiro;

import java.util.List;

import com.tails.common.generic.GenericService;
import com.tails.system.model.manage.SysResource;

/**
 * @Author 阁楼麻雀
 * @Date 2016-7-4
 * @Desc
 */
public interface IPermissionService extends GenericService<SysResource, String> {

    /**
     * 通过角色id 查询角色 拥有的权限
     *
     * @param roleId
     * @return
     */
    List<SysResource> selectPermissionsByRoleId(String roleId);
}