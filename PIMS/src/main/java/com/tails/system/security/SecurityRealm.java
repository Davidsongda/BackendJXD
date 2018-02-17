package com.tails.system.security;

import com.tails.system.model.manage.Role;
import com.tails.system.model.manage.SysResource;
import com.tails.system.model.manage.Users;
import com.tails.system.service.shiro.IPermissionService;
import com.tails.system.service.shiro.IRoleService;
import com.tails.system.service.shiro.IUserService;
import org.apache.shiro.authc.AuthenticationException;
import org.apache.shiro.authc.AuthenticationInfo;
import org.apache.shiro.authc.AuthenticationToken;
import org.apache.shiro.authc.SimpleAuthenticationInfo;
import org.apache.shiro.authz.AuthorizationInfo;
import org.apache.shiro.authz.SimpleAuthorizationInfo;
import org.apache.shiro.realm.AuthorizingRealm;
import org.apache.shiro.subject.PrincipalCollection;
import org.springframework.stereotype.Component;

import javax.annotation.Resource;
import java.util.List;

/**
 * @Author 阁楼麻雀
 * @Date 2016-7-4 15:25
 * @Desc 用户身份验证授权组件
 */

@Component(value = "securityRealm")
public class SecurityRealm extends AuthorizingRealm {

    @Resource
    private IUserService userService;

    @Resource
    private IRoleService roleService;

    @Resource
    private IPermissionService permissionService;

    /**
     * 权限检查
     */
    @Override
    protected AuthorizationInfo doGetAuthorizationInfo(PrincipalCollection principals) {
        SimpleAuthorizationInfo authorizationInfo = new SimpleAuthorizationInfo();
        String username = String.valueOf(principals.getPrimaryPrincipal());

        final Users user = userService.selectByUsername(username);
        final List<Role> roleInfos = roleService.selectRolesByUserId(user.getLogonId());
        if (roleInfos!=null) {
            for (Role role : roleInfos) {
                // 添加角色
                System.err.println("添加角色："+role);
                authorizationInfo.addRole(role.getCode());

                List<SysResource> permissions = permissionService.selectPermissionsByRoleId(role.getId());
                if (permissions!=null) {
                    for (SysResource permission : permissions) {
                        // 添加权限
                        System.err.println(permission);
                        authorizationInfo.addStringPermission(permission.getResourceSign());
                    }
                }
            }
        }
        return authorizationInfo;
    }

    /**
     * 登录验证
     */
    @Override
    protected AuthenticationInfo doGetAuthenticationInfo(AuthenticationToken token) throws AuthenticationException {
        String username = String.valueOf(token.getPrincipal());
        String password = new String((char[]) token.getCredentials());
        // 通过数据库进行验证
        final Users authentication = userService.authentication(new Users(username, password));
        if (authentication == null) {
            throw new AuthenticationException("用户名或密码错误.");
        }
        SimpleAuthenticationInfo authenticationInfo = new SimpleAuthenticationInfo(username, password, getName());
        return authenticationInfo;
    }

}
