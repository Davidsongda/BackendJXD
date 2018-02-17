package com.tails.system.service.manage.impl;

import com.tails.system.dao.manage.IUsersDao;
import com.tails.system.model.manage.Users;
import com.tails.system.service.manage.IUsersService;
import org.springframework.stereotype.Service;

import javax.annotation.Resource;
import java.util.HashMap;
import java.util.List;

/**
 * Created by Administrator on 2017/3/21.
 */
@Service("usersService")
public class UsersServiceImpl implements IUsersService {
    @Resource
    private IUsersDao usersDao;

    /**
     * 添加新用户
     *
     * @param users
     * @return
     */
    public int insertUsers(Users users) {
        return usersDao.insertUsers(users);
    }

    /**
     * 修改用户
     *
     * @param users
     * @return
     */
    public int updateUsers(Users users) {
        return usersDao.updateUsers(users);
    }

    /**
     * 通过主键删除用户
     *
     * @param logonId 用户主键
     * @return
     */
    public int deleteUsersByPrimaryKey(String logonId) {
        return usersDao.deleteUsersByPrimaryKey(logonId);
    }

    /**
     * 通过主键查询单个用户
     *
     * @param logonId 主键
     * @return
     */
    public Users selectUsersByPrimaryKey(String logonId) {
        return usersDao.selectUsersByPrimaryKey(logonId);
    }

    /**
     * 分页查询（条件：按照名字查询）
     *
     * @param userName
     * @param pageIndex
     * @param pageSize
     * @return
     */
    public HashMap usersList(String userName, int pageIndex, int pageSize, String orgCode) {
        return usersDao.usersList(userName, pageIndex, pageSize, orgCode);
    }

    /**
     * 查询全部的用户
     *
     * @return
     */
    public List<Users> getAllUsers() {
        return usersDao.getAllUsers();
    }
}
