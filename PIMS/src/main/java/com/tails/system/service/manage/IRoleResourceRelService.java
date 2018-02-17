package com.tails.system.service.manage;

import com.tails.common.generic.GenericService;
import com.tails.system.model.manage.SysRoleResource;

/**
 * Created by Administrator on 2017/3/21.
 */
public interface IRoleResourceRelService extends GenericService<SysRoleResource, String> {

    /**
     * 角色资源的添加
     * @param ids
     * @param roleId
     *@param roleCode
     * @param includeParent   @return
     */
    int saveRelResource(String[] ids, String roleCode, String roleId, String includeParent, String pid, String nameText);
}
