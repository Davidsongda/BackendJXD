package com.tails.system.dao.shiro.impl;

import java.util.List;

import javax.annotation.Resource;

import org.hibernate.SQLQuery;
import org.hibernate.Session;
import org.hibernate.SessionFactory;
import org.springframework.stereotype.Repository;

import com.tails.system.dao.shiro.IPermissionDao;
import com.tails.system.model.manage.SysResource;

/**
 * @Author 阁楼麻雀
 * @Date 2016-7-4
 * @Desc 权限接口
 */
@Repository("permissionDao")
public  class PermissionDaoImpl implements IPermissionDao {
    @Resource
    protected SessionFactory sessionFactory;

    public Session getSession() {
        return sessionFactory.getCurrentSession();
    }

    public void setSessionFactory(SessionFactory sessionFactory) {
        this.sessionFactory = sessionFactory;
    }

    @SuppressWarnings("unchecked")
    public List<SysResource> selectPermissionsByRoleId(String roleId){
        Session session = this.getSession();
        String sql = " SELECT P.* FROM SYS_RESOURCE P LEFT JOIN SYS_ROLE_RESOURCE RP ON RP.RESOURCE_ID = P.RESOURCE_ID WHERE RP.ROLE_ID = '"+roleId+"'  ";
        SQLQuery query = session.createSQLQuery(sql);
        query.addEntity("P",SysResource.class);
        List permissionList = query.list();
        if (permissionList.size() >= 1) {
            return permissionList;
        }
        return null;
    }

    /**
     * 插入对象
     *
     * @param sysResource 对象
     */
    public int insertSelective(SysResource sysResource) {
        return 0;
    }

    /**
     * 更新对象
     *
     * @param sysResource 对象
     */
    public int updateByPrimaryKeySelective(SysResource sysResource) {
        return 0;
    }

    /**
     * 通过主键, 删除对象
     *
     * @param id 主键
     */
    public int deleteByPrimaryKey(String id) {
        return 0;
    }

    /**
     * 通过主键, 查询对象
     *
     * @param id 主键
     * @return
     */
    public SysResource selectByPrimaryKey(String id) {
        return null;
    }
}
