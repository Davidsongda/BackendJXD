package com.tails.system.service.shiro;


import com.tails.system.model.manage.Users;

/**
 * @Author 阁楼麻雀
 * @Date 2016-6-22
 * @Desc 用户信息接口
 */
public interface IUserService {
    /**
     * @Author 阁楼麻雀
     * @Date 2016-7-4 16:33
     * @Desc 通过名字查询用户信息
     */
    public Users selectByUsername(String username);

    /**
     * @Author 阁楼麻雀
     * @Date 2016-7-4 16:33
     * @Desc 用户登录验证查询
     */
    public Users authentication(Users hrUser);

    /**
     * 获取当前用户的密码
     * author：张文文
     *
     * @param userId 用户ID
     * @return String
     */
    String getCurPasswd(String userId);

    /**
     * 重置密码
     * author: 张文文
     *
     * @param userId:
     * @param userPwdNew:
     * @return int
     */
    int updatePwdData(String userId, String userPwdNew);
}
