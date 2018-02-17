package com.tails.system.service.shiro.impl;

import java.util.List;

import javax.annotation.Resource;

import org.springframework.stereotype.Service;

import com.tails.common.generic.GenericDao;
import com.tails.common.generic.GenericServiceImpl;
import com.tails.system.dao.shiro.IPermissionDao;
import com.tails.system.model.manage.SysResource;
import com.tails.system.service.shiro.IPermissionService;

/**
 * 权限Service实现类
 *
 * @author StarZou
 * @since 2014年6月10日 下午12:05:03
 */
@Service
public class PermissionServiceImpl extends GenericServiceImpl<SysResource, String> implements IPermissionService {

    @Resource
    private IPermissionDao permissionDao;


    @Override
    public GenericDao<SysResource, String> getDao() {
        return permissionDao;
    }

    public List<SysResource> selectPermissionsByRoleId(String roleId) {
        return permissionDao.selectPermissionsByRoleId(roleId);
    }
}
