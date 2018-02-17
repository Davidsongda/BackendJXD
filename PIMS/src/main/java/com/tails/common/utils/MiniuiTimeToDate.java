package com.tails.common.utils;

import java.text.ParseException;
import java.text.SimpleDateFormat;
import java.util.Date;

/**
 * Created by Sun Karl on 2016/7/22.
 * MiniUI中的时间框架输出的时间为GMT时间格式
 * 无法正常存为Date或Timestamp时间
 * 所以需要将MiniUI中的时间格式化为Date型
 */

public class MiniuiTimeToDate {

    public Date timeConversion(String string) {
        String str[] = string.split(" ");
        if ("Jan".equals(str[1])) {
            str[1] = "01";
        } else if ("Feb".equals(str[1])) {
            str[1] = "02";
        } else if ("Mar".equals(str[1])) {
            str[1] = "03";
        } else if ("Apr".equals(str[1])) {
            str[1] = "04";
        } else if ("May".equals(str[1])) {
            str[1] = "05";
        } else if ("Jun".equals(str[1])) {
            str[1] = "06";
        } else if ("Jul".equals(str[1])) {
            str[1] = "07";
        } else if ("Aug".equals(str[1])) {
            str[1] = "08";
        } else if ("Sep".equals(str[1])) {
            str[1] = "09";
        } else if ("Oct".equals(str[1])) {
            str[1] = "10";
        } else if ("Nov".equals(str[1])) {
            str[1] = "11";
        } else if ("Dec".equals(str[1])) {
            str[1] = "12";
        }
        String time = str[3] + "-" + str[1] + "-" + str[2] + " " + str[4];
        SimpleDateFormat sdf = new SimpleDateFormat("yyyy-MM-dd HH:mm:ss");
        Date date = new Date();
        try {
            date = sdf.parse(time);
            return date;
        } catch (ParseException e) {
            e.printStackTrace();
        }
        return null;
    }
}

