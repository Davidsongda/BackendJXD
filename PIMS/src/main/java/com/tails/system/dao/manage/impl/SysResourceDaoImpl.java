package com.tails.system.dao.manage.impl;

import com.tails.common.utils.ExceptionUtils;
import com.tails.common.utils.PageUtils;
import com.tails.system.dao.manage.ISysResourceDao;
import com.tails.system.model.manage.SysResource;
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

@Repository("SysResourceDao")
public class SysResourceDaoImpl implements ISysResourceDao {
    @Resource
    protected SessionFactory sessionFactory;
    public static Logger logger = LoggerFactory.getLogger(SysResourceDaoImpl.class);//日志

    public Session getSession() {
        return sessionFactory.getCurrentSession();
    }

    public void setSessionFactory(SessionFactory sessionFactory) {
        this.sessionFactory = sessionFactory;
    }

    /**
     * 添加资源数据
     *
     * @param sysResource
     * @return
     */
    public int insertSelective(SysResource sysResource) {
        try {
            if (sysResource != null) {
                String id = UUID.randomUUID().toString().substring(0, 32);
                sysResource.setResourceId(id);
                getSession().save(sysResource);
                logger.info("添加资源数据成功20170523171901");
                return 1;
            }
        } catch (Exception e) {
            logger.error("执行 资源 insertSelective 方法失败20170523171902：" + ExceptionUtils.getErrorInfo(e));
        }

        return -1;
    }

    /**
     * 删除资源数据
     *
     * @param ids
     * @return
     */
    public int deleteByPrimaryKey(String ids) {
        try {
            if (ids != null) {
                SysResource sysResource = (SysResource) getSession().get(SysResource.class, ids);
                getSession().delete(sysResource);
                logger.info("删除资源数据成功20170523172001");
                return 1;
            }
        } catch (Exception e) {
            logger.error("执行 资源 deleteByPrimaryKey 方法失败20170523172002：" + ExceptionUtils.getErrorInfo(e));
            return -1;
        }
        return -1;
    }

    /**
     * 分页查询资源数据
     *
     * @param name
     * @param pageIndex
     * @param pageSize
     * @return
     */
    public HashMap pageList(String name, int pageIndex, int pageSize, String pResourceCode, String includeParent) {
        try {
            if (name == null || "".equals(name)) {
                name = "";
            }
            int start = pageIndex * pageSize;
            int end = start + pageSize;
            StringBuffer sql = new StringBuffer();
            sql.append(" SELECT ");
            sql.append(" 	RESOURCE_ID, ");
            sql.append(" 	RESOURCE_NAME, ");
            sql.append(" 	RESOURCE_TYPE, ");
            sql.append(" 	P_RESOURCE_NAME, ");
            sql.append(" 	RESOURCE_PATH, ");
            sql.append(" 	RESOURCE_SIGN, ");
            sql.append(" 	CREATE_TIME, ");
            sql.append(" 	REMARK ");
            sql.append(" FROM ");
            sql.append(" 	SYS_RESOURCE ");
            sql.append(" WHERE 1=1 ");
            if (name != null && !"".equals(name)) {
                sql.append(" AND RESOURCE_NAME LIKE ? ");
            }
       /* SysResource sysResource = null;
        if (name != null && !"".equals(name)) {
            String  sysResourceCode = "from SysResource where resourceName = (:resourceName)";
            Query sysResourceCodeQuery = getSession().createQuery(sysResourceCode);
            sysResourceCodeQuery.setParameter("resourceName",name);
            sysResource = (SysResource)sysResourceCodeQuery.uniqueResult();
        }
        if(sysResource!=null){
            if ("N".equals(includeParent)) {//N表示没有选中下级，Y表示选中下级
                sql.append(" AND P_RESOURCE_CODE ='" + sysResource.getResourceCode() + "' ");
            } else {
                if (sysResource.getResourceCode() != null && !"".equals(sysResource.getResourceCode())) {
                    sql.append(" AND P_RESOURCE_CODE like '" + sysResource.getResourceCode() + "' ");
                }
            }
        }*/
            if ("".equals(pResourceCode)) {
                sql.append(" AND P_RESOURCE_CODE = '001' ");
            } else {
                if ("N".equals(includeParent)) {//N表示没有选中下级，Y表示选中下级
                    sql.append(" AND P_RESOURCE_CODE = '" + pResourceCode + "' ");
                } else {
                    if (pResourceCode != null && !"".equals(pResourceCode)) {
                        sql.append(" AND P_RESOURCE_CODE LIKE '%" + pResourceCode + "%' ");
                    }
                }
            }
            SQLQuery list = getSession().createSQLQuery(sql.toString());
            if (name != null && !"".equals(name)) {
                list.setParameter(0, "%" + name + "%");
            }
            List sysResourceList = list.setResultTransformer(Transformers.ALIAS_TO_ENTITY_MAP).list();
            HashMap result = new HashMap();
            result = PageUtils.pageHelper(pageIndex, pageSize, sysResourceList);
            logger.info("分页查询资源数据成功20170523172101");
            return result;
        }catch (Exception e){
            logger.error("执行 资源 pageList 方法失败20170523172102：" + ExceptionUtils.getErrorInfo(e));
            return null;
        }
    }

    /**
     * 修改资源数据回显
     *
     * @param id
     * @return
     */
    public HashMap setData(String id) {
        try {
            StringBuffer setSql = new StringBuffer();
            setSql.append(" SELECT ");
            setSql.append(" 	RESOURCE_ID, ");
            setSql.append(" 	RESOURCE_NAME, ");
            setSql.append(" 	RESOURCE_CODE, ");
            setSql.append(" 	RESOURCE_TYPE, ");
            setSql.append(" 	P_RESOURCE_NAME, ");
            setSql.append(" 	P_RESOURCE_CODE, ");
            setSql.append(" 	RESOURCE_PATH, ");
            setSql.append(" 	RESOURCE_SIGN, ");
            setSql.append(" 	CREATE_TIME, ");
            setSql.append(" 	REMARK ");
            setSql.append(" FROM ");
            setSql.append(" 	SYS_RESOURCE ");
            setSql.append(" WHERE ");
            setSql.append(" RESOURCE_ID IN  ? ");
            SQLQuery editquery = getSession().createSQLQuery(setSql.toString());
            editquery.setParameter(0, id);
            List data = editquery.setResultTransformer(Transformers.ALIAS_TO_ENTITY_MAP).list();
            if (data.size() != 1) {
                return null;
            }
            logger.info("修改资源数据回显成功20170523172201");
            return (HashMap) data.get(0);
        }catch (Exception e){
            logger.error("执行 资源 setData 方法失败20170523172202：" + ExceptionUtils.getErrorInfo(e));
            return null;
        }

    }

    /**
     * 修改资源数据
     *
     * @param sysResource
     * @return
     */
    public int editData(SysResource sysResource) {
        try {
            String id = sysResource.getResourceId();
            String name = sysResource.getResourceName();
            String code = sysResource.getResourceCode();
            String type = sysResource.getResourceType();
            String superiorCode = sysResource.getpResourceCode();
            String superior = sysResource.getpResourceName();
            String remark = sysResource.getRemark();
            String path = sysResource.getResourcePath();
            String sign = sysResource.getResourceSign();
            StringBuffer editSql = new StringBuffer();
            editSql.append(" UPDATE ");
            editSql.append(" 	SYS_RESOURCE ");
            editSql.append(" 	SET ");
            editSql.append(" 	RESOURCE_NAME = ?, ");
            editSql.append(" 	RESOURCE_CODE = ?, ");
            editSql.append(" 	RESOURCE_TYPE = ?, ");
            editSql.append(" 	P_RESOURCE_NAME = ?, ");
            editSql.append(" 	P_RESOURCE_CODE = ?, ");
            editSql.append(" 	RESOURCE_PATH = ?, ");
            editSql.append(" 	RESOURCE_SIGN = ?, ");
            editSql.append(" 	REMARK = ?");
            editSql.append(" WHERE");
            editSql.append(" 	RESOURCE_ID = ?");
            SQLQuery query = getSession().createSQLQuery(editSql.toString());
            query.setParameter(0, name);
            query.setParameter(1, code);
            query.setParameter(2, type);
            query.setParameter(3, superior);
            query.setParameter(4, superiorCode);
            query.setParameter(5, path);
            query.setParameter(6, sign);
            query.setParameter(7, remark);
            query.setParameter(8, id);
            int a = query.executeUpdate();
            logger.info("修改资源数据成功20170523172301");
            return a;
        }catch (Exception e){
            logger.error("执行 资源 editData 方法失败20170523172302：" + ExceptionUtils.getErrorInfo(e));
            return -1;
        }

    }

    /**
     * 加载资源树
     */
    public List loadSysResourceTree() {
        try {
            Session session = this.getSession();
            StringBuffer treeSql = new StringBuffer();
            treeSql.append("SELECT ");
            treeSql.append("RESOURCE_CODE ID, ");
            treeSql.append("RESOURCE_NAME TEXT, ");
            treeSql.append("P_RESOURCE_CODE PID ");
            treeSql.append("  FROM");
            treeSql.append(" SYS_RESOURCE");
            treeSql.append(" ORDER  ");
            treeSql.append(" BY ");
            treeSql.append(" RESOURCE_CODE");
            List list = session.createSQLQuery(treeSql.toString()).setResultTransformer(Transformers.ALIAS_TO_ENTITY_MAP).list();
            if (list.size() >= 1) {
                logger.info("加载资源树成功20170523172401");
                return list;
            }
            return null;
        }catch (Exception e){
            logger.error("执行 资源 loadSysResourceTree 方法失败20170523172402：" + ExceptionUtils.getErrorInfo(e));
            return null;
        }

    }

    /**
     * 根据code查询资源的id
     *
     * @param roleCode
     * @return
     */
    public List<String> getResourceByCode(String roleCode) {
        StringBuffer sql = new StringBuffer();
        return null;
    }

    /**
     * 获取资源对象
     *
     * @param list
     * @return
     */
    public HashMap getResourceByIds(List list) {
        try {
            Session session = this.getSession();
            StringBuffer objSql = new StringBuffer();
            objSql.append("  ");
            objSql.append(" SELECT ");
            objSql.append(" 	RESOURCE_ID, ");
            objSql.append(" 	RESOURCE_NAME, ");
            objSql.append(" 	RESOURCE_TYPE, ");
            objSql.append(" 	P_RESOURCE_NAME, ");
            objSql.append(" 	RESOURCE_PATH, ");
            objSql.append(" 	RESOURCE_SIGN, ");
            objSql.append(" 	CREATE_TIME, ");
            objSql.append(" 	REMARK ");
            objSql.append(" FROM ");
            objSql.append(" 	SYS_RESOURCE ");
            objSql.append(" WHERE ");
            objSql.append(" RESOURCE_ID IN  ( ");
            for (int i = 0; i < list.size(); i++) {
                objSql.append(" '" + list.get(i) + "', ");
            }
            objSql.append(" '000000' )");
            List lists = session.createSQLQuery(objSql.toString()).setResultTransformer(Transformers.ALIAS_TO_ENTITY_MAP).list();
            HashMap result = new HashMap();
            ArrayList data = new ArrayList();
            for (int i = 0, l = lists.size(); i < l; i++) {
                data.add(lists.get(i));
            }
            result.put("data", data);
            result.put("total", list.size());
            logger.info("获取资源对象成功20170523172501");
            return result;
        }catch (Exception e){
            logger.error("执行 资源 getResourceByIds 方法失败20170523172502：" + ExceptionUtils.getErrorInfo(e));
            return  null;
        }

    }

    public int updateByPrimaryKeySelective(SysResource sysResource) {
        return 0;
    }

    public SysResource selectByPrimaryKey(String id) {
        return null;
    }
}
