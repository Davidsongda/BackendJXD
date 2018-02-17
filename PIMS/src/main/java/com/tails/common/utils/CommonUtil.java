/*
 * Copyright © 2016 金现代信息产业股份有限公司. All rights reserved. 
 * @Title: CommonUtil.java 
 * @Package: com.jxd.framework.core.utils 
 * @Description: <p></p> 
 * @author：王宾宾 
 * @email: bjw211@126.com 
 * @version： V0.0.0.1 
 * <p>修改历史：无</p> 
 */
package com.tails.common.utils;

import javax.servlet.http.HttpServletRequest;
import java.io.IOException;
import java.io.InputStream;
import java.text.ParseException;
import java.text.SimpleDateFormat;
import java.util.Date;
import java.util.Properties;
import java.util.ResourceBundle;
import java.util.regex.Matcher;
import java.util.regex.Pattern;

/**
 * @ClassName: CommonUtil 
 * @Description: 
 * @author: Administrator
 * @date: 2016年11月1日 下午3:56:28  
 */
public class CommonUtil {
	/** 定义userPath*/
	public final static String userPath = "config.properties";
	/** 定义userPath*/
	public final static String SECURITY_PROPERTIES = "security.properties";
	/** 匹配html标签的*/
	private static final String REGEX_HTML = "<(\\S*?)[^>]*>|</\\1>|<.*?/>";
	/** 匹配换行符等*/
	private static final String REGEX_SPACE = "\\s*|\t|\r|\n";
	/** 定义P_HTML*/
	private static final Pattern P_HTML = Pattern.compile(REGEX_HTML);
	/** 定义P_SPACE*/
	private static final Pattern P_SPACE = Pattern.compile(REGEX_SPACE);

	/**
	 * 
	 * @param str 
	 * @return String 
	 */
	public static String delHtmlTag(String str) {
//		if (ObjectHelper.isNotEmpty(str)) {
			Matcher m_html = P_HTML.matcher(str);
			str = m_html.replaceAll("");
			Matcher m_space = P_SPACE.matcher(str);
			str = m_space.replaceAll("");
//		}
		return str;
	}
	/**
	 * @param key 
	 * @param fileName 配置文件的相对路径
	 * @return String 
	 */
	public static String getProperties(String key, String fileName) {
		try {
//			if (ObjectHelper.isEmpty(key) || ObjectHelper.isEmpty(fileName))
//				return "";
			InputStream in = CommonUtil.class.getClassLoader().getResourceAsStream(fileName);
			Properties p = new Properties();
			p.load(in);
			Object object = p.get(key);
//			if (ObjectHelper.isNotEmpty(object)) {
				return object.toString().trim();
//			}
		} catch (IOException e) {
			e.printStackTrace();
		}
		if ("user.properties".equals(fileName)) {
			// 默认显示5条
			if ("pageSize".equals(key)) {
				return "5";
			}
			return "1";
		}
		return "";
	}
	/**
	 * 解析时间
	 * @param strdate 
	 * @return Date
	 */
	public static Date parseDate(String strdate) {
		SimpleDateFormat format4 = new SimpleDateFormat("yyyy-MM-dd");
		try {
			return format4.parse(strdate);
		} catch (ParseException e1) {
			e1.printStackTrace();
		}
		SimpleDateFormat format6 = new SimpleDateFormat("yyyy/MM/dd");
		try {
			return format6.parse(strdate);
		} catch (ParseException e1) {
			e1.printStackTrace();
		}
	    SimpleDateFormat format5 = new SimpleDateFormat("yyyy.MM");
		try {
			return format5.parse(strdate);
		} catch (ParseException e1) {
			e1.printStackTrace();
		}
		SimpleDateFormat format7 = new SimpleDateFormat("yyyyMM");
		try {
			return format7.parse(strdate);
		} catch (ParseException e) {
			e.printStackTrace();
		}
		SimpleDateFormat format8 = new SimpleDateFormat("yyyy-MM");
		try {
			return format8.parse(strdate);
		} catch (ParseException e1) {
			e1.printStackTrace();
		}
		SimpleDateFormat format3 = new SimpleDateFormat("yyyy.MM");
		try {
			return format3.parse(strdate);
		} catch (ParseException e1) {
			e1.printStackTrace();
		}
		SimpleDateFormat format10 = new SimpleDateFormat("HH:mm");
		try {
			return format10.parse(strdate);
		} catch (ParseException e) {
		    e.printStackTrace();
		}
		SimpleDateFormat format9 = new SimpleDateFormat("yyyy");
		try {
			return format9.parse(strdate);
		} catch (ParseException e) {
			e.printStackTrace();
		}
//		if (ObjectHelper.isEmpty(strdate))
//			return null;
		SimpleDateFormat format = new SimpleDateFormat("yyyyMMdd HH:ss");
		try {
			return format.parse(strdate);
		} catch (ParseException e) {
			e.printStackTrace();
		}
		SimpleDateFormat format1 = new SimpleDateFormat("yyyyMMdd");
		try {
			return format1.parse(strdate);
		} catch (ParseException e) {
			e.printStackTrace();
		}
		SimpleDateFormat format2 = new SimpleDateFormat("yyyy.MM.dd");
		try {
			return format2.parse(strdate);
		} catch (ParseException e) {
			e.printStackTrace();
		}
		return null;
	}
	/**
	 * @author 20151021 @Title: formatDate 
	 * @Description: (日期格式化) 
	 * @param date 
	 * @param formatStr 
	 * @return String 返回类型 
	 */
	public static String formatDate(Date date, String formatStr) {
		String dateStr = "";
		SimpleDateFormat format = new SimpleDateFormat(formatStr);
		dateStr = format.format(date);
		return dateStr;
	}

	/**
	 * 获取config配置文件参数方法
	 * @param s  属性名
	 * @return   属性值
	 */
	public static String getConfigPro(String s){
		ResourceBundle resource = ResourceBundle.getBundle("config");
		String value = resource.getString(s);
		return value;
	}

	public static String getLocalIp(HttpServletRequest request) {
		String remoteAddr = request.getRemoteAddr();
		String forwarded = request.getHeader("X-Forwarded-For");
		String realIp = request.getHeader("X-Real-IP");

		String ip = null;
		if (realIp == null) {
			if (forwarded == null) {
				ip = remoteAddr;
			} else {
				ip = remoteAddr + "/" + forwarded.split(",")[0];
			}
		} else {
			if (realIp.equals(forwarded)) {
				ip = realIp;
			} else {
				if(forwarded != null){
					forwarded = forwarded.split(",")[0];
				}
				ip = realIp + "/" + forwarded;
			}
		}
		return ip;
	}

	public static final void main(String[] args){
		CommonUtil util = new CommonUtil();
		String  path = util.getProperties("zhifubao", CommonUtil.userPath);
		System.out.println(path);
	}
}
