package com.tails.system.dao.manage.impl;

import com.tails.common.utils.ExceptionUtils;
import com.tails.common.utils.PageUtils;
import com.tails.system.dao.manage.IRoleDao;
import com.tails.system.model.manage.Role;
import org.hibernate.Query;
import org.hibernate.SQLQuery;
import org.hibernate.Session;
import org.hibernate.SessionFactory;
import org.hibernate.transform.Transformers;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.stereotype.Repository;

import javax.annotation.Resource;
import java.util.HashMap;
import java.util.List;
import java.util.UUID;

/**
 * Created by Administrator on 2017/3/21.
 */
@Repository("roleDaoImpl")
public class RoleDaoImpl implements IRoleDao {

    @Resource
    protected SessionFactory sessionFactory;

    public static Logger logger = LoggerFactory.getLogger(RoleDaoImpl.class);//日志

    public Session getSession() {
        return sessionFactory.getCurrentSession();
    }

    public void setSessionFactory(SessionFactory sessionFactory) {
        this.sessionFactory = sessionFactory;
    }

    /**
     * 分页显示角色信息
     * @param name
     * @param pageIndex
     * @param pageSize
     * @return HashMap
     */
    public HashMap roleList(String name, int pageIndex, int pageSize) {
        try {
            if (name == null || "".equals(name)) {
                name = "";
            }
            int start = pageIndex * pageSize;
            int end = start + pageSize;
            String searchSql = "SELECT ROLE_ID,ROLE_NAME,REMARK,ROLE_CODE FROM SYS_ROLE WHERE ROLE_NAME LIKE ? ";
            Query query=getSession().createSQLQuery(searchSql);
            query.setParameter(0,"%"+name+"%");
            List roleList=query.setResultTransformer(Transformers.ALIAS_TO_ENTITY_MAP).list();
            HashMap result = PageUtils.pageHelper(pageIndex,pageSize,roleList);
            logger.info("分页显示角色信息成功20170523170701");
            return result;
        }catch (Exception e){
            logger.error("执行 角色 roleList 方法失败20170523170702：" + ExceptionUtils.getErrorInfo(e));
            return null;
        }

    }

    /**
     * 编辑修改角色，数据回填
     * @param id
     * @return HashMap
     */
    public HashMap setData(String id) {
        try {
            String searchSql = new String("SELECT ROLE_ID,ROLE_NAME,REMARK,ROLE_CODE FROM SYS_ROLE WHERE ROLE_ID = ? ");
            SQLQuery query=getSession().createSQLQuery(searchSql);
            query.setParameter(0,id);
            List data=query.setResultTransformer(Transformers.ALIAS_TO_ENTITY_MAP).list();
            if (data.size() !=1) {
                return null;
            }
            logger.info("编辑修改角色，数据回填成功20170523170801");
            return (HashMap) data.get(0);
        }catch (Exception e){
            logger.error("执行 角色 setData 方法失败20170523170802：" + ExceptionUtils.getErrorInfo(e));
            return null;
        }

    }

    /**
     * 增加角色
     * @param role
     * @return int
     */
    public int insertSelective(Role role) {
        try {
            //获取角色id
            String id = UUID.randomUUID().toString().substring(0,32);
            String name = role.getName();
            String shortName = role.getShortName();
            String code = role.getCode();
            String addSql = new String("INSERT INTO SYS_ROLE (ROLE_ID,ROLE_NAME,REMARK,ROLE_CODE) " +
                    "VALUES (?,?,?,?)");
            SQLQuery query = getSession().createSQLQuery(addSql);
            query.setParameter(0,id);
            query.setParameter(1,name);
            query.setParameter(2,shortName);
            query.setParameter(3,code);
            int a = query.executeUpdate();
            logger.info("增加角色成功20170523170901");
            return a;
        } catch (Exception e) {
            logger.error("执行 角色 setData 方法失败20170523170902：" + ExceptionUtils.getErrorInfo(e));
            return -1;
        }
    }

    /**
     * 编辑修改角色信息
     * @param map
     * @return int
     */
    public int editSelective(HashMap<String,Object> map) {
        try {
            String code = (String)map.get("code")==null?"":(String)map.get("code");
            String name = (String)map.get("name")==null?"":(String)map.get("name");
            String shortName =(String)map.get("shortName")==null?"":(String)map.get("shortName");
            String id = (String)map.get("id")==null?"":(String)map.get("id");
            String editSql = new String("UPDATE SYS_ROLE SET ROLE_CODE = ?,ROLE_NAME= ?,REMARK= ? where ROLE_ID = ?");
            SQLQuery query = getSession().createSQLQuery(editSql);
            query.setParameter(0,code);
            query.setParameter(1,name);
            query.setParameter(2,shortName);
            query.setParameter(3,id);
            int a = query.executeUpdate();
            logger.info("编辑修改角色信息成功20170523171001");
            return a;
        } catch (Exception e) {
            logger.error("执行 角色 editSelective 方法失败20170523171002：" + ExceptionUtils.getErrorInfo(e));
            return -1;
        }
    }

    /**
     * 删除角色信息
     * @param ids
     * @return int
     */
    public int deleteByPrimaryKeys(String ids) {
        try {
            String deleteSql = new String("DELETE FROM SYS_ROLE WHERE  ROLE_ID IN( ? )");
            SQLQuery query = getSession().createSQLQuery(deleteSql);
            query.setParameter(0,ids);
           int a= query.executeUpdate();
            logger.info("删除角色信成功20170523171101");
            return a;
        } catch (Exception e) {
            logger.error("执行 角色 deleteByPrimaryKeys 方法失败20170523171102：" + ExceptionUtils.getErrorInfo(e));
            return -1;
        }
    }

    //以下为继承自接口的方法，未使用
    public int updateByPrimaryKeySelective(Role role) {
        return 0;
    }

    public int deleteByPrimaryKey(Long id) {
        return 0;
    }

    public Role selectByPrimaryKey(Long id) {
        return null;
    }
}
