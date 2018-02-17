package com.tails.system.dao.shiro.impl;

import com.tails.common.utils.MD5Utils;
import com.tails.system.dao.shiro.IUserDao;
import com.tails.system.model.manage.Users;
import org.hibernate.HibernateException;
import org.hibernate.Query;
import org.hibernate.SQLQuery;
import org.hibernate.Session;
import org.hibernate.SessionFactory;
import org.springframework.stereotype.Repository;

import javax.annotation.Resource;
import java.util.List;

/**
 * @Author 阁楼麻雀
 * @Date 2016-6-22
 * @Desc
 */
@Repository("userDao")
public class UserDaoImpl implements IUserDao {

    @Resource
    protected SessionFactory sessionFactory;

    public Session getSession() {
        return sessionFactory.getCurrentSession();
    }

    public void setSessionFactory(SessionFactory sessionFactory) {
        this.sessionFactory = sessionFactory;
    }

    /**
     * @Author 阁楼麻雀
     * @Date 2016-7-4 16:33
     * @Desc 通过名字查询用户信息
     */
    public Users selectByUsername(String username) {
        Session session = this.getSession();
        Users user = null;
        String sql = "SELECT U.* FROM SYS_USER U WHERE LOGONID = '" + username + "'  ";
        SQLQuery query = session.createSQLQuery(sql);
        query.addEntity("U", Users.class);
        try {
            List<Users> userList = query.list();
            if (userList.size() >= 1) {
                user = userList.get(0);
                return user;
            }
        } catch (Exception e) {
            e.printStackTrace();
        }
        return null;
    }

    /**
     * @Author 阁楼麻雀
     * @Date 2016-7-4 16:41
     * @Desc 用户登录验证查询
     */
    public Users authentication(Users user) {
        Session session = this.getSession();
        Users User = new Users();
        String pd = MD5Utils.getMd5For32(user.getPassword());
        String sql = "SELECT T.LOGONID,T.NAME,T.PASSWORD FROM SYS_USER T WHERE T.LOGONID ='" + user.getLogonId() + "' AND T.PASSWORD ='" + pd + "'  ";
        Query query = session.createSQLQuery(sql);
        List userList = query.list();
        if (userList.size() >= 1) {
            Object[] obj = (Object[]) userList.get(0);
            User.setLogonId(obj[1].toString() == null ? "" : obj[1].toString());
            User.setPassword(obj[2].toString() == null ? "" : obj[2].toString());
            return User;
        }
        return null;
    }

    /**
     * 获取当前用户的密码
     * author：张文文
     *
     * @param userId 用户ID
     * @return String
     */
    @Override
    public String getCurPasswd(String userId) {
        StringBuffer sql = new StringBuffer();
        sql.append("select PASSWORD from SYS_USER where LOGONID = '");
        sql.append(userId);
        sql.append("'");
        List list = getSession().createSQLQuery(sql.toString()).list();
        String passwd = (String) list.get(0);
        return passwd;
    }

    /**
     * 重置密码
     *
     * @param userId     用户ID
     * @param userPwdNew 新密码
     * @return int
     * @author: 张文文
     */
    @Override
    public int updatePwdData(String userId, String userPwdNew) {
        int num = 0;
        try {
            // 密码加密
            userPwdNew = MD5Utils.getMd5For32(userPwdNew);
            StringBuffer sql = new StringBuffer();
            sql.append("update SYS_USER set PASSWORD = '")
                    .append(userPwdNew)
                    .append("' where LOGONID = '")
                    .append(userId)
                    .append("'");
            SQLQuery query = getSession().createSQLQuery(sql.toString());
            num = query.executeUpdate();
        } catch (HibernateException e) {
            System.out.println("重置密码错误 userId = [" + userId + "]");
            e.printStackTrace();
            num = -1;
        }
        return num;
    }
}
