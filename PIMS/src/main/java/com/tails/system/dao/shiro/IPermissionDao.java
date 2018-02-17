package com.tails.system.dao.shiro;

import java.util.List;

import com.tails.common.generic.GenericDao;
import com.tails.system.model.manage.SysResource;

/**
 * @Author 阁楼麻雀
 * @Date 2016-7-4
 * @Desc 权限接口
 */
public interface IPermissionDao extends GenericDao<SysResource, String> {

    List<SysResource> selectPermissionsByRoleId(String roleId);
}
