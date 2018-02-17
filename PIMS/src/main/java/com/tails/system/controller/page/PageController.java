package com.tails.system.controller.page;

import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.CookieValue;
import org.springframework.web.bind.annotation.RequestMapping;


/**
 * @Author 阁楼麻雀
 * @Date 2016-7-4 17:26
 * @Desc 视图控制器,返回jsp视图给前端
 */

@Controller
@RequestMapping("/page")
public class PageController {

    /**
     * 登录页
     */
    @RequestMapping("/login")
    public String login(Model model, @CookieValue(value = "REMS_LOGON_ID", required = false, defaultValue = "") String uName,
                        @CookieValue(value = "REMS_LOGON_PWD", required = false, defaultValue = "") String uPass) {
        model.addAttribute("usernameCookie", uName==null?"":uName);
        model.addAttribute("passwordCookie", uPass==null?"":uPass);
        return "/login/login";
    }

    /**
     * 404页
     */
    @RequestMapping("/404")
    public String error404() {
        return "404";
    }

    /**
     * 401页
     */
    @RequestMapping("/401")
    public String error401() {
        return "401";
    }

    /**
     * 500页
     */
    @RequestMapping("/500")
    public String error500() {
        return "500";
    }
    /**
     * 主页面
     */
    @RequestMapping("/homepage")
    public String toHomePage() {
        return "/homepage/homepage";
    }

}