package com.tails.system.dao.manage.impl;

import com.tails.common.utils.ExceptionUtils;
import com.tails.system.dao.manage.IRoleResourceRelDao;
import com.tails.system.model.manage.SysRoleResource;
import org.hibernate.SQLQuery;
import org.hibernate.Session;
import org.hibernate.SessionFactory;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.stereotype.Repository;

import javax.annotation.Resource;
import java.util.List;
import java.util.UUID;

/**
 * Created by Administrator on 2017/4/1.
 */
@Repository
public class RoleResourceRelDaoImpl implements IRoleResourceRelDao {
    @Resource
    protected SessionFactory sessionFactory;

    public static Logger logger = LoggerFactory.getLogger(RoleResourceRelDaoImpl.class);//日志

    public Session getSession() {
        return sessionFactory.getCurrentSession();
    }

    public void setSessionFactory(SessionFactory sessionFactory) {
        this.sessionFactory = sessionFactory;
    }

    public void saveRoleSource(String id, String roleCode) {
        try {
            String uuid = UUID.randomUUID().toString().substring(0, 32);
            SysRoleResource roleResource = new SysRoleResource();
            roleResource.setResourceId(uuid);
            roleResource.setRoleId(roleCode);
            roleResource.setResourceId(id);
            getSession().save(roleResource);
            logger.info("角色资源 保存saveRoleSource成功20170523171501");
        } catch (Exception e) {
            logger.error("执行 角色资源 saveRoleSource 方法失败20170523171502：" + ExceptionUtils.getErrorInfo(e));
        }

    }

    /**
     * 根据roceCode判断是否已经存在
     *
     * @param roleCode
     * @return
     */
    public void delResourceByCodeId(String roleCode) {
        try {
            StringBuffer sql = new StringBuffer();
            sql.append(" DELETE ");
            sql.append(" FROM ");
            sql.append(" 	SYS_ROLE_RESOURCE ");
            sql.append(" WHERE ");
            sql.append(" 	ROLE_ID = ? ");
            SQLQuery sqlQuery = getSession().createSQLQuery(sql.toString());
            sqlQuery.setParameter(0, roleCode);
            int result = sqlQuery.executeUpdate();
            logger.info("角色资源 根据roceCode判断是否已经存在成功20170523171601");
        } catch (Exception e) {
            logger.error("执行 角色资源 delResourceByCodeId 方法失败20170523171602：" + ExceptionUtils.getErrorInfo(e));
        }


    }

    /**
     * 根据roleId 获取数据
     *
     * @param roleId
     * @return
     */
    public List<String> getRoleRes(String roleId) {
        try {
            Session session = this.getSession();
            StringBuffer sql = new StringBuffer();
            sql.append(" SELECT ");
            sql.append(" 	T .RESOURCE_ID ");
            sql.append(" FROM ");
            sql.append(" 	SYS_ROLE_RESOURCE T ");
            sql.append(" WHERE ");
            sql.append(" 	T .ROLE_ID = '" + roleId + "'");
            List lists = getSession().createSQLQuery(sql.toString()).list();
            logger.info("角色资源 根据roleId 获取数据成功20170523171701");
            return lists;
        }catch (Exception e){
            logger.error("执行 角色资源 getRoleRes 方法失败20170523171702：" + ExceptionUtils.getErrorInfo(e));
            return null;
        }

    }

    @Override
    public int delRoleResourceFromResourceRel(String roleCode, String pid, String nameText, String includeParent) {
        StringBuffer sql = new StringBuffer();
        if ("Y".equals(includeParent)) {//N表示没有选中下级，Y表示选中下级
            pid += "%";
        }
        sql.append(" DELETE ");
        sql.append(" FROM ");
        sql.append(" 	SYS_ROLE_RESOURCE ");
        sql.append(" WHERE ");
        sql.append(" 	ROLE_ID = ? ");
        sql.append(" 	AND RESOURCE_ID IN ( ");
        sql.append(" SELECT ");
        sql.append(" 	RESOURCE_ID ");
        sql.append(" FROM ");
        sql.append(" 	SYS_RESOURCE ");
        sql.append(" WHERE  ");
        sql.append("    P_RESOURCE_CODE LIKE ? ");
        sql.append(" AND RESOURCE_NAME LIKE ? ");
        sql.append(" 	) ");
        SQLQuery sqlQuery = getSession().createSQLQuery(sql.toString());
        sqlQuery.setParameter(0, roleCode).setString(1, pid).setString(2, (nameText == null ? "%%" : ("%" + nameText + "%")));
        return sqlQuery.executeUpdate();
    }


    /**
     * 插入对象
     *
     * @param sysRoleResource 对象
     */
    public int insertSelective(SysRoleResource sysRoleResource) {
        return 0;
    }

    /**
     * 更新对象
     *
     * @param sysRoleResource 对象
     */
    public int updateByPrimaryKeySelective(SysRoleResource sysRoleResource) {
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
    public SysRoleResource selectByPrimaryKey(String id) {
        return null;
    }
}
