package com.tails.system.service.shiro.impl;

import java.util.List;

import javax.annotation.Resource;

import com.tails.system.dao.shiro.IRoleDao;
import com.tails.system.model.manage.Role;
import com.tails.system.service.shiro.IRoleService;
import org.springframework.stereotype.Service;

import com.tails.common.generic.GenericDao;
import com.tails.common.generic.GenericServiceImpl;

/**
 * 角色Service实现类
 *
 * @author StarZou
 * @since 2014年6月10日 下午4:16:33
 */
@Service
public class RoleServiceImpl extends GenericServiceImpl<Role, String> implements IRoleService {

    @Resource
    private IRoleDao roleDao;

    @Override
    public GenericDao<Role, String> getDao() {
        return roleDao;
    }

    public List<Role> selectRolesByUserId(String userId) {
        return roleDao.selectRolesByUserId(userId);
    }

}
