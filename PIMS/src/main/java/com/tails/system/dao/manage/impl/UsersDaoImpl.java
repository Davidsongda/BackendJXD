package com.tails.system.dao.manage.impl;


import com.tails.common.utils.ExceptionUtils;
import com.tails.common.utils.PageUtils;
import com.tails.system.dao.manage.IUsersDao;
import com.tails.system.model.manage.Users;
import org.hibernate.*;
import org.slf4j.LoggerFactory;
import org.springframework.stereotype.Repository;
import org.slf4j.Logger;

import javax.annotation.Resource;
import java.util.*;

@Repository("usersDao")
public class UsersDaoImpl implements IUsersDao {

    @Resource
    protected SessionFactory sessionFactory;

    public static Logger logger = LoggerFactory.getLogger(UsersDaoImpl.class);//日志

    public Session getSession() {
        return sessionFactory.getCurrentSession();
    }

    public void setSessionFactory(SessionFactory sessionFactory) {
        this.sessionFactory = sessionFactory;
    }

    /**
     * 添加新用户
     *
     * @param users
     * @return
     */
    public int insertUsers(Users users) {
        try {
            if (users != null && !("").equals(users)) {
                getSession().save(users);
                logger.info("用户" + users.getName() + "新增成功20170523162301：用户名:" + users.getLogonId() + "密码：" + users.getPassword());
                return 1;
            }
            }catch(Exception e){
                logger.error("执行 insertUsers 方法失败20170523162302：" + ExceptionUtils.getErrorInfo(e));
            }


        return -1;
    }

    /**
     * 修改用户
     *
     * @param users
     * @return
     */
    public int updateUsers(Users users) {
        try {
            if (users != null && !("").equals(users)) {
                String hql = new String("UPDATE SYS_USER SET NAME = ?,DEPARTNAME= ?,STATE= ?,TELEPHONE=? where LOGONID = ?");
                Query query = getSession().createSQLQuery(hql);
                query.setParameter(0, users.getName());
                query.setParameter(1, users.getDepartName());
                query.setParameter(2, users.getState());
                query.setParameter(3, users.getTelephone());
                query.setParameter(4, users.getLogonId());
                int p = query.executeUpdate();
                logger.info("用户" + users.getName() + "修改成功20170523162701：用户名:" + users.getLogonId() + "密码：" + users.getPassword());
                return p;
            }
            }catch(Exception e){
                logger.error("执行 updateUsers 方法失败20170523162702：" + ExceptionUtils.getErrorInfo(e));
            }


        return -1;
    }

    /**
     * 通过主键删除用户
     *
     * @param logonId 主键
     * @return
     */
    public int deleteUsersByPrimaryKey(String logonId) {
        try {
            if (logonId != null && !"".equals(logonId)) {
                Users users = (Users) getSession().get(Users.class, logonId);
                getSession().delete(users);
                logger.info("用户" + users.getName() + "删除成功20170523163001：用户名:" + users.getLogonId() + "密码：" + users.getPassword());
                return 1;
            }
        } catch (Exception e) {
            logger.error("执行 deleteUsersByPrimaryKey 方法失败20170523163002：" + ExceptionUtils.getErrorInfo(e));
            return -1;
        }
        return -1;
    }

    /**
     * 通过用户主键查询单个用户
     *
     * @param logonId 主键
     * @return
     */
    public Users selectUsersByPrimaryKey(String logonId) {
        Users users = new Users();
        try {
            if (logonId != null && !"".equals(logonId)) {
                users = (Users) getSession().get(Users.class, logonId);
                logger.info("用户主键查询单个用户成功20170523163101：用户名:" + users.getLogonId());
                return users;
            }
        } catch (Exception e) {
            logger.error("执行 selectUsersByPrimaryKey 方法失败20170523163102：" + ExceptionUtils.getErrorInfo(e));
            return null;
        }
        return users;
    }

    /**
     * 分页查询
     *
     * @param userName（按照名字查询）
     * @param pageIndex
     * @param pageSize
     * @return
     */
    public HashMap usersList(String userName, int pageIndex, int pageSize, String orgCode) {
        try {
            StringBuffer userListhql = new StringBuffer();
            userListhql.append("from Users users where 1=1 ");
            if (userName != null && !"".equals(userName)) {
                userListhql.append("and name like (:userName)");
            }
            if (orgCode != null && !"".equals(orgCode)) {
                userListhql.append(" and departId=(:orgCode)");
            }
            Query userListQuery = getSession().createQuery(userListhql.toString());
            if (userName != null && !"".equals(userName)) {
                userListQuery.setParameter("userName", "%" + userName.trim() + "%");
            }
            if (orgCode != null && !"".equals(orgCode)) {
                userListQuery.setParameter("orgCode", orgCode.trim());
            }
            List userList = userListQuery.list();
            HashMap result = new HashMap();
            result = PageUtils.pageHelper(pageIndex, pageSize, userList);
            logger.info("用户分页查询成功20170523163201");
            return result;
        } catch (Exception e) {
            logger.error("执行 usersList 方法失败20170523163202：" + ExceptionUtils.getErrorInfo(e));
            return null;
        }
    }

    /**
     * 查询全部的用户
     *
     * @return
     */
    public List<Users> getAllUsers() {
        try {
            String usersListhql = "from Users users";
            Query userListquery = getSession().createQuery(usersListhql);
            List userList = userListquery.list();
            logger.info("查询全部的用户成功20170523163401");
            return userList;
        } catch (Exception e) {
            logger.error("执行 getAllUsers 方法失败20170523163402：" + ExceptionUtils.getErrorInfo(e));
            return null;
        }

    }
}
