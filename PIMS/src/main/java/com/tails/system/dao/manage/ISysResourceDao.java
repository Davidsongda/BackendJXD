package com.tails.system.dao.manage;

import com.tails.common.generic.GenericDao;
import com.tails.system.model.manage.SysResource;

import java.util.HashMap;
import java.util.List;

public interface ISysResourceDao  extends GenericDao<SysResource,String >{
    /**
     * 分页显示资源
     * @param name
     * @param pageIndex
     * @param pageSize
     * @param pResourceCode
     * @param includeParent
     * @return
     */
    HashMap pageList(String name, int pageIndex, int pageSize,String pResourceCode,String includeParent);

    /**
     * 添加资源数据
     * @param id
     * @return
     */
    HashMap setData(String id);

    /**
     * 修改资源数据
     * @param sysResource
     * @return
     */
    int editData(SysResource sysResource);

    /**
     * 登陆资源树
     * @return
     */
    public List loadSysResourceTree();


    /**
     * 根据code查询资源的id
     * @param roleCode
     * @return
     */
    List<String> getResourceByCode(String roleCode);

    /**
     * 获取资源对象
     * @param list
     * @return
     */
    HashMap getResourceByIds(List list);
}
