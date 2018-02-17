package com.tails.system.dao.manage;

import com.tails.common.generic.GenericDao;
import com.tails.system.model.manage.SysRoleResource;

import java.util.List;

/**
 * Created by Administrator on 2017/3/21.
 */
public interface IRoleResourceRelDao extends GenericDao<SysRoleResource, String>{

    void  saveRoleSource(String id, String roleCode);
    /**
     * 根据roceCode删除
     * @param roleCode
     * @return
     */

    void delResourceByCodeId(String roleCode);

    /**
     * 根据roleId 获取数据
     * @param roleId
     * @return
     */
    List<String> getRoleRes(String roleId);

    int delRoleResourceFromResourceRel(String roleCode, String pid, String nameText, String includeParent);
}
