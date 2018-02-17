package com.tails.system.dao.shiro.impl;

import com.tails.system.dao.shiro.IRoleDao;
import com.tails.system.model.manage.Role;
import org.hibernate.SQLQuery;
import org.hibernate.Session;
import org.hibernate.SessionFactory;
import org.springframework.stereotype.Repository;

import javax.annotation.Resource;
import java.util.List;

/**
 * @Author 阁楼麻雀
 * @Date 2016-7-4
 * @Desc
 */
@Repository("roleDao")
public  class RoleDaoImpl implements IRoleDao {

    @Resource
    protected SessionFactory sessionFactory;

    public Session getSession() {
        return sessionFactory.getCurrentSession();
    }

    public void setSessionFactory(SessionFactory sessionFactory) {
        this.sessionFactory = sessionFactory;
    }


    @SuppressWarnings("unchecked")
    public List<Role> selectRolesByUserId(String userId) {
        Session session = this.getSession();
        String sql = " SELECT R.* FROM SYS_ROLE R LEFT JOIN SYS_ROLE_USER UR ON R.ROLE_ID = UR.ROLE_ID WHERE UR.USER_ID= '"+userId+"'  ";
        SQLQuery query = session.createSQLQuery(sql);
        query.addEntity("R",Role.class);
        List roleList = query.list();
        if (roleList.size() >= 1) {
            return roleList;
        }
        return null;
    }

    /**
     * 插入对象
     *
     * @param role 对象
     */
    public int insertSelective(Role role) {
        return 0;
    }

    /**
     * 更新对象
     *
     * @param role 对象
     */
    public int updateByPrimaryKeySelective(Role role) {
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
    public Role selectByPrimaryKey(String id) {
        return null;
    }
}
