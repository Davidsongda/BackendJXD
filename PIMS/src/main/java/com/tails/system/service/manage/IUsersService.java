package com.tails.system.service.manage;

import com.tails.system.model.manage.Users;

import java.util.HashMap;
import java.util.List;

/**
 * Created by Administrator on 2017/3/21.
 */
public interface IUsersService{
    /**
     * 添加新用户
     *
     * @param users
     * @return
     */
    int insertUsers(Users users);

    /**
     * 修改用户
     *
     * @param users
     * @return
     */
    int updateUsers(Users users);

    /**
     * 通过主键删除用户
     *
     * @param logonId 用户主键
     * @return
     */
    int deleteUsersByPrimaryKey(String logonId);

    /**
     * 通过主键查询单个用户
     *
     * @param logonId 主键
     * @return
     */
    Users selectUsersByPrimaryKey(String logonId);

    /**
     * 分页查询（条件：按照名字查询）
     *
     * @param userName
     * @param pageIndex
     * @param pageSize
     * @return
     */
    HashMap usersList(String userName, int pageIndex, int pageSize, String orgCode);

    /**
     * 查询全部的用户
     *
     * @return
     */
    List<Users> getAllUsers();
}
