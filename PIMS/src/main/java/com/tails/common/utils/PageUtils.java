package com.tails.common.utils;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;

/**
 * @Author 阁楼麻雀
 * @Date 2016-7-25
 * @Desc 页面处理公共类
 */
public class PageUtils {
    /**
     * @Author 阁楼麻雀
     * @Date 2016-7-25 18:33
     * @Desc 分页方法
     */

    public static HashMap pageHelper(int pageIndex, int pageSize, List list){
        HashMap result = new HashMap();
        ArrayList data = new ArrayList();
        int start = pageIndex * pageSize, end = start + pageSize;
        for (int i = 0, l = list.size(); i < l; i++) {
            if (start <= i && i < end)
                data.add(list.get(i));
        }
        result.put("data", data);
        result.put("total", list.size());
        return result;
    }
}
