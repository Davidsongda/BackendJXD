package com.tails.system.controller.shiro;

import com.tails.common.utils.ExceptionUtils;
import com.tails.common.utils.MD5Utils;
import com.tails.system.model.manage.Users;
import com.tails.system.service.shiro.IUserService;
import org.apache.shiro.SecurityUtils;
import org.apache.shiro.authc.AuthenticationException;
import org.apache.shiro.authc.UsernamePasswordToken;
import org.apache.shiro.subject.Subject;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.validation.BindingResult;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.ResponseBody;

import javax.annotation.Resource;
import javax.servlet.http.Cookie;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import javax.servlet.http.HttpSession;
import java.io.UnsupportedEncodingException;
import java.net.URLEncoder;
import java.util.HashMap;

/**
 * @Author 阁楼麻雀
 * @Date 2016-7-4
 * @Desc 登录控制类
 */
@Controller
@RequestMapping("/user")
public class LoginController {
    @Resource
    private IUserService userService;
    public static Logger logger = LoggerFactory.getLogger(LoginController.class);//日志

    /**
     * @Author 阁楼麻雀
     * @Date 2016-7-25 16:15
     * @Desc 登录
     */

    @RequestMapping(value = "/login", method = RequestMethod.POST)
    public String login(Users user, String isRememberPwd, BindingResult result, Model model, HttpServletRequest request, HttpServletResponse response) {
        try {
            Subject subject = SecurityUtils.getSubject();
            // 已登陆则 跳到首页
            if (subject.isAuthenticated()) {
                return "/main/main";
            }
            if (result.hasErrors()) {
                model.addAttribute("message", "参数错误！");
                return "/login/login";
            }

            // 身份验证
            subject.login(new UsernamePasswordToken(user.getLogonId(), user.getPassword()));
            // 验证成功在Session中保存用户信息
            final Users authUserInfo = userService.selectByUsername(user.getLogonId());
            request.getSession().setAttribute("userInfo", authUserInfo);

            // 验证成功判断是否存cookie
            if ("1".equals(isRememberPwd)) {
                savePwdCookie(user.getLogonId(), user.getPassword(), response);
                Cookie[] cookie = request.getCookies();
                System.out.println(cookie);
            } else if("0".equals(isRememberPwd)){
                delPwdCookie(response);
            }
        } catch (AuthenticationException e) {
            // 身份验证失败
            model.addAttribute("message", "用户名或密码错误！");
            logger.info("登录错误：" + ExceptionUtils.getErrorInfo(e));
            return "/login/login";
        } catch (UnsupportedEncodingException e) {
            logger.info("存入cookie错误：" + ExceptionUtils.getErrorInfo(e));
        }
        return "/main/main";
    }

    /**
     * @Author 阁楼麻雀
     * @Date 2016-7-25 16:15
     * @Desc 登录
     */

    @RequestMapping(value = "/login", method = RequestMethod.GET)
    public String loginGet(Users user, String isRememberPwd, BindingResult result, Model model, HttpServletRequest request, HttpServletResponse response) {
        return login(user, isRememberPwd, result, model, request, response);
    }

    /**
     * @Author 阁楼麻雀
     * @Date 2016-7-4 16:58
     * @Desc 退出登陆
     */
    @RequestMapping(value = "/logout", method = RequestMethod.GET)
    public String logout(HttpSession session) {
        session.removeAttribute("userInfo");
        // 登出操作
        Subject subject = SecurityUtils.getSubject();
        subject.logout();
        return "login/login";
    }

//    /**
//     * @Author 阁楼麻雀
//     * @Date 2016-7-25 16:14
//     * @Desc 加载主页信息
//     */
//    @RequestMapping(value = "/nav", method = RequestMethod.GET)
//    public String nav() {
//        return "/login/nav";
//    }

    /**
     * 打开至重置密码页面
     *
     * @return String
     * @author: 张文文
     */
    @RequestMapping(value = "/resetPwd")
    public String resetPwd() {
        return "sys/resetPwd";
    }

    /**
     * @param request  请求对象
     * @param response 响应对象
     * @return String
     * @Title: resetPwdData
     * @Description: 重置密码
     * @author: 张文文
     */
    @RequestMapping(value = "/resetPwdData")
    @ResponseBody
    public HashMap resetPwdData(HttpServletRequest request, HttpServletResponse response) {
        HashMap map = new HashMap();
        Users usersModel = (Users) request.getSession().getAttribute("userInfo");
        String userId = usersModel.getLogonId();
        String passwd = userService.getCurPasswd(userId);
        // 密码加密
        String pwd = MD5Utils.getMd5For32(request.getParameter("pwd"));
        if (passwd.equals(pwd)) {
            String userPwdNew = request.getParameter("newPwdFirst");
            int update = userService.updatePwdData(userId, userPwdNew);
            map.put("code", update);
        } else {
            map.put("code", -1);
        }
        return map;
    }

    private void savePwdCookie(String uName, String uPwd, HttpServletResponse response) throws UnsupportedEncodingException {
        Cookie cookie1 = new Cookie("REMS_LOGON_ID", URLEncoder.encode(uName, "UTF-8"));   // 新建Cookie
        cookie1.setMaxAge(604800);//7天
        cookie1.setPath("/");
        response.addCookie(cookie1);
        Cookie cookie2 = new Cookie("REMS_LOGON_PWD", URLEncoder.encode(uPwd, "UTF-8"));   // 新建Cookie
        cookie2.setMaxAge(604800);//7天
        cookie2.setPath("/");
        response.addCookie(cookie2);
    }

    private void delPwdCookie(HttpServletResponse response) {
        Cookie cookie1 = new Cookie("REMS_LOGON_ID", null);
        cookie1.setMaxAge(0);
        cookie1.setPath("/");
        response.addCookie(cookie1);
        Cookie cookie2 = new Cookie("REMS_LOGON_PWD", null);
        cookie2.setMaxAge(0);
        cookie2.setPath("/");
        response.addCookie(cookie2);
    }

}
