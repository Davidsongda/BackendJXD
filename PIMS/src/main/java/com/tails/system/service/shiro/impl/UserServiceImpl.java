package com.tails.system.service.shiro.impl;

import com.tails.system.dao.shiro.IUserDao;
import com.tails.system.model.manage.Users;
import com.tails.system.service.shiro.IUserService;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import javax.annotation.Resource;

/**
 * @Author 阁楼麻雀
 * @Date 2016-6-22
 * @Desc
 */
@Transactional
@Service("userService")
public class UserServiceImpl implements IUserService {
    @Resource
    private IUserDao userDao;

    /**
     * @Author 阁楼麻雀
     * @Date 2016-7-4 16:41
     * @Desc 通过名字查询用户信息
     */

    public Users selectByUsername(String username) {
        return userDao.selectByUsername(username);
    }

    /**
     * @Author 阁楼麻雀
     * @Date 2016-7-4 16:41
     * @Desc 用户登录验证查询
     */

    public Users authentication(Users pubUser) {
        return userDao.authentication(pubUser);
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
        return userDao.getCurPasswd(userId);

    }

    /**
     * 重置密码
     * author: 张文文
     *
     * @param userId     :
     * @param userPwdNew :
     * @return int
     */
    @Override
    public int updatePwdData(String userId, String userPwdNew) {
        return userDao.updatePwdData(userId, userPwdNew);
    }
}
