package com.tails.system.dao.manage.impl;

import com.tails.common.utils.ExceptionUtils;
import com.tails.common.utils.PageUtils;
import com.tails.system.dao.manage.IOrganizationDao;
import com.tails.system.model.manage.Organization;
import com.tails.system.model.manage.Users;
import org.hibernate.Query;
import org.hibernate.SQLQuery;
import org.hibernate.Session;
import org.hibernate.SessionFactory;
import org.hibernate.transform.Transformers;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.stereotype.Repository;

import javax.annotation.Resource;
import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.UUID;

/**
 * Created by Administrator on 2017/3/21.
 * 单位类
 */
@Repository("orgDao")
public class OrganizationDaoImpl implements IOrganizationDao {
    @Resource
    protected SessionFactory sessionFactory;

    public static Logger logger = LoggerFactory.getLogger(OrganizationDaoImpl.class);//日志

    public Session getSession() {
        return sessionFactory.getCurrentSession();
    }

    /**
     * 分页可查询 组织机构列表
     */
    public HashMap queryList(HashMap<String, Object> map) {
        try {
            String unitcode = map.get("unitcode") == null ? "" : map.get("unitcode").toString();//单位编码
            int pageIndex = Integer.parseInt(map.get("pageIndex").toString() == null ? "" : map.get("pageIndex").toString());
            int pageSize = Integer.parseInt(map.get("pageSize").toString());
            String key = map.get("key") == null ? "" : map.get("key").toString();//组织编码
            int start = pageIndex * pageSize, end = start + pageSize;
            StringBuffer querySql = new StringBuffer();
            querySql.append("SELECT UNITID,");//id 序号
            querySql.append(" UNITCODE,");//单位编号
            querySql.append(" UNITNAME,");//单位名称
            querySql.append(" UNITBELONG,");//所属单位编号
            querySql.append(" VALID,");//有效标识 1-有效，0-无效
            querySql.append(" UNITTYPEID,");//单位类别 1-局，2-段，3-车间，4-班组
//            querySql.append(" CHECKTYPEID,");//维修检查作业分类编号
//            querySql.append(" CLASSDISTANCETYPE,");//作业班组范围类别
//            querySql.append(" PWMISUNITCODE,");//对应pwmis表的单位编号
            querySql.append(" MEMO ");//备注说明
            querySql.append(" FROM SYS_ORG");//单位表
            querySql.append(" WHERE UNITNAME LIKE ?");//根据单位名称模糊查询
            if (!"".equals(unitcode)) {
                querySql.append("AND  UNITBELONG = ?");
            }
            Query query = getSession().createSQLQuery(querySql.toString());
            query.setString(0, "%" + key + "%");
            if (!"".equals(unitcode)) {
                query.setString(1, unitcode);
            }
            List orgList = query.setResultTransformer(Transformers.ALIAS_TO_ENTITY_MAP).list();
            HashMap result = new HashMap();
            result = PageUtils.pageHelper(pageIndex, pageSize, orgList);
            logger.info("组织单位分页查询组织机构列表成功20170523164401");
            return result;
        } catch (Exception e) {
            logger.error("执行 组织单位 queryList 方法失败20170523164402：" + ExceptionUtils.getErrorInfo(e));
        }
        return null;
    }

    /**
     * insert 新增数据到组织机构表
     */
    public int insertSelective(Organization org) {
        try {
            if (org != null) {
                org.setUnitId(UUID.randomUUID().toString());
                getSession().save(org);
                logger.info("新增数据到组织机构表成功20170523165301");
                return 1;
            }
        } catch (Exception e) {
            logger.error("执行 组织单位 insertSelective 方法失败20170523165302：" + ExceptionUtils.getErrorInfo(e));
            return -1;
        }
        return -1;
    }

    /**
     * 根据主键更新数据
     *
     * @param organization
     * @return
     */
    @Override
    public int updateByPrimaryKeySelective(Organization organization) {
        try {
            getSession().update(organization);
            return 1;
        } catch (Exception e) {
            logger.error("执行 组织机构update 方法失败[OrganizationDaoImpl.updateByPrimaryKeySelective]：" + ExceptionUtils.getErrorInfo(e));
            return -1;
        }
    }

    /**
     * 根据id查询单条数据
     */
    public HashMap setData(String id) {
        try {
            String querySql = "SELECT UNITID,UNITCODE,UNITNAME,UNITBELONG,VALID,UNITTYPEID,MEMO FROM SYS_ORG WHERE UNITID = ?";
            Query query = getSession().createSQLQuery(querySql);
            query.setString(0, id);
            List data = query.setResultTransformer(Transformers.ALIAS_TO_ENTITY_MAP).list();
            if (data.size() != 1) {
                return null;
            }
            logger.info("根据id查询单条数据组织机构表成功20170523165401");
            return (HashMap) data.get(0);
        } catch (Exception e) {
            logger.error("执行 组织单位 setData 方法失败20170523165402：" + ExceptionUtils.getErrorInfo(e));
        }
        return null;
    }

    /**
     * 根据id删除组织列表数据
     *
     * @param ids
     * @return
     */

    public int deleteByPrimaryKeys(String ids) {
        try {
            String sql = "DELETE FROM SYS_ORG WHERE  UNITID IN('" + ids.replace(",", "','") + "')";
            SQLQuery query = getSession().createSQLQuery(sql);
            int a = query.executeUpdate();
            logger.info("根据id删除组织列表数据成功20170523165601");
            return a;
        } catch (Exception e) {
            logger.error("执行 组织单位 deleteByPrimaryKeys 方法失败20170523165602：" + ExceptionUtils.getErrorInfo(e));
            return -1;
        }
    }

    /**
     * 查询树状列表
     *
     * @return
     */
    public List loadOrgTreeDao() {
        try {
            Session session = this.getSession();
            String sql = "SELECT UNITCODE ID,UNITNAME TEXT,UNITBELONG PID FROM SYS_ORG ORDER BY UNITCODE";
            List list = session.createSQLQuery(sql).setResultTransformer(Transformers.ALIAS_TO_ENTITY_MAP).list();
            if (list.size() > 1) {
                logger.info("查询树状组织列表成功20170523165701");
                return list;
            }
            return null;
        } catch (Exception e) {
            logger.error("执行 组织单位 loadOrgTreeDao 方法失败20170523165702：" + ExceptionUtils.getErrorInfo(e));
            return null;
        }

    }

    /**
     * 根据单位编码查询单条数据
     *
     * @param orgCode
     * @return
     */
    public Organization getByOrgName(String orgCode) {
        try {
            String hql = "FROM Organization WHERE unitCode= ?";
            Query query = getSession().createQuery(hql);
            query.setString(0, orgCode);
            List list = query.list();
            Organization organization = (Organization) list.get(0);
            logger.info("根据单位编码查询单条组织列表数据成功20170523165801");
            return organization;
        } catch (Exception e) {
            logger.error("执行 组织单位 getByOrgName 方法失败20170523165802：" + ExceptionUtils.getErrorInfo(e));
        }
        return null;
    }

    /**
     * 插入到用户角色表
     *
     * @param roleId
     * @param userId
     * @return
     */
    public int insertRoleUserByUserIdAndRoleId(String roleId, String userId) {
        try {
            String sql = "INSERT INTO  SYS_ROLE_USER (ROLE_USER_ID,ROLE_ID,USER_ID) VALUES (sys_guid(),?,?)";
            Query query = getSession().createSQLQuery(sql);
            query.setParameter(0, roleId);
            query.setParameter(1, userId);
            int i = query.executeUpdate();
            logger.info("组织单位 插入到用户角色表成功20170523165901");
            return i;
        } catch (Exception e) {
            logger.error("执行 组织单位 insertRoleUserByUserIdAndRoleId 方法失败20170523165902：" + ExceptionUtils.getErrorInfo(e));
            return -1;
        }

    }

    /**
     * 根据用户id删除用户决策表数据
     *
     * @param roleId
     * @return
     */
    public int deleteRelationOfUserAndRole(String roleId, String orgCode, String nameText) {
        try {
            String sql = "DELETE FROM SYS_ROLE_USER WHERE ROLE_ID = ? AND USER_ID IN (SELECT LOGONID FROM SYS_USER WHERE DEPARTID = ? AND NAME LIKE ?)";
            Query query = getSession().createSQLQuery(sql);
            query.setString(0, roleId).setString(1, orgCode).setString(2, ("%" + (nameText == null ? "" : nameText) + "%"));
            int i = query.executeUpdate();
            logger.info("组织单位 根据用户id删除用户决策表数据成功20170523170001");
            return i;
        } catch (Exception e) {
            logger.error("执行 组织单位 deleteRelationOfUserAndRole 方法失败20170523170002：" + ExceptionUtils.getErrorInfo(e));
            return -1;
        }
    }

    /**
     * 查询组织性质
     *
     * @return
     */
    public List natureCheckBox() {
        try {
            String sql = "SELECT DISTINCT(ORG_NATURE ) TEXT FROM SYS_ORG";
            List list = getSession().createSQLQuery(sql).setResultTransformer(Transformers.ALIAS_TO_ENTITY_MAP).list();
            if (list.size() > 0) {
                logger.info("组织单位 查询组织性质成功20170523170101");
                return list;
            }
        } catch (Exception e) {
            logger.error("执行 组织单位 natureCheckBox 方法失败20170523170102：" + ExceptionUtils.getErrorInfo(e));
        }
        return null;
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
            String querySql = "SELECT T.USER_ID  FROM SYS_ROLE_USER T WHERE T.ROLE_ID = ? ";
            Query query = getSession().createSQLQuery(querySql);
            query.setString(0, roleId);
            List lists = query.list();
            logger.info("组织单位 根据roleId 获取数据成功20170523170201");
            return lists;
        } catch (Exception e) {
            logger.error("执行 组织单位 getRoleRes 方法失败20170523170202：" + ExceptionUtils.getErrorInfo(e));
        }
        return null;
    }

    /**
     * 获取用户对象
     *
     * @param list
     * @return
     */
    public HashMap getResourceByIds(List list) {
        try {
            Session session = this.getSession();
            List<Users> users = new ArrayList<Users>();
            for (int i = 0; i < list.size(); i++) {
                users.add((Users) session.createQuery("FROM Users WHERE logonId='" + list.get(i) + "'").uniqueResult());
            }
            HashMap result = new HashMap();
            result.put("data", users);
            result.put("total", users.size());
            logger.info("组织单位 获取用户对象成功20170523170401");
            return result;
        } catch (Exception e) {
            logger.error("执行 组织单位 getResourceByIds 方法失败20170523170402：" + ExceptionUtils.getErrorInfo(e));
            return null;
        }

    }

    /**
     * 添加功能 未使用
     *
     * @param o
     * @return
     */
    public int insertSelective(String o) {
        return 0;
    }

    /**
     * 根据主键删除 未使用
     *
     * @param id 主键
     * @return
     */
    public int deleteByPrimaryKey(String id) {
        return 0;
    }

    /**
     * 根据主键查询对象
     *
     * @param id 主键
     * @return
     */
    public Organization selectByPrimaryKey(String id) {
        Organization org = null;
        try {
            if (id != null) {
                org = (Organization) getSession().get(Organization.class, id);
                logger.info("组织单位 根据主键查询对象成功20170523170501");
            }
        } catch (Exception e) {
            logger.error("执行 组织单位 selectByPrimaryKey 方法失败20170523170502：" + ExceptionUtils.getErrorInfo(e));
            return null;
        }
        return org;
    }
}
