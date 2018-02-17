package com.tails.system.service.manage;

import com.tails.common.generic.GenericService;
import com.tails.system.model.manage.SysResource;

import java.util.HashMap;

/**
 * Created by Administrator on 2017/3/21.
 */
public interface ISysResourceService extends GenericService<SysResource,String> {

    /**
     * 分页显示资源数据
     * @param name
     * @param pageIndex
     * @param pageSize
     * @param pResourceCode
     * @param includeParent
     * @return
     */
    HashMap pageList(String name, int pageIndex, int pageSize,String pResourceCode,String includeParent);

    /**
     * 修改前进行资源数据回显
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
     * 加载资源树
     * @return
     */
    public String loadSysResourceTreeService();

    /**
     * 获取角色拥有的资源
     * @param roleId
     * @return
     */
    HashMap getRoleResource(String roleId);
}
