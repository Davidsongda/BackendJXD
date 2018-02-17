package com.tails.system.service.manage.impl;

import com.tails.common.generic.GenericDao;
import com.tails.common.generic.GenericServiceImpl;
import com.tails.system.dao.manage.IRoleDao;
import com.tails.system.model.manage.Role;
import com.tails.system.service.manage.IRoleServices;
import org.springframework.stereotype.Service;

import javax.annotation.Resource;
import java.util.HashMap;

/**
 * Created by Administrator on 2017/3/21.
 */
@Service("roleServiceFront")
public class RoleServiceImpl extends GenericServiceImpl<Role, Long> implements IRoleServices {
    @Resource(name = "roleDaoImpl")
    private IRoleDao roleDao;

    /**
     * 分页显示角色信息
     * @param name
     * @param pageIndex
     * @param pageSize
     * @return
     */
    public HashMap roleList(String name, int pageIndex, int pageSize) {
        return roleDao.roleList(name,pageIndex,pageSize);
    }

    /**
     * 编辑修改角色信息，数据回填
     * @param id
     * @return
     */
    public HashMap setData(String id) {
        return roleDao.setData(id);
    }

    /**
     * 添加角色
     * @param role
     * @return
     */
    public int insertSelective(Role role) {
        return roleDao.insertSelective(role);
    }

    /**
     * 编辑修改角色信息
     * @param map
     * @return
     */
    public int editSelective(HashMap<String,Object> map) {
        return roleDao.editSelective(map);
    }

    /**
     * 删除角色信息
     * @param ids
     * @return
     */
    public int deleteByPrimaryKeys(String ids) {
        return roleDao.deleteByPrimaryKeys(ids);
    }

    public GenericDao<Role, Long> getDao() {
        return roleDao;
    }
}
