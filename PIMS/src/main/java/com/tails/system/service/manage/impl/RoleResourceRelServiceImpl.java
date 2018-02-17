package com.tails.system.service.manage.impl;

import com.tails.common.generic.GenericDao;
import com.tails.common.generic.GenericServiceImpl;
import com.tails.system.dao.manage.IRoleResourceRelDao;
import com.tails.system.dao.manage.ISysResourceDao;
import com.tails.system.model.manage.SysRoleResource;
import com.tails.system.service.manage.IRoleResourceRelService;
import org.springframework.stereotype.Service;

import javax.annotation.Resource;

/**
 * Created by Administrator on 2017/4/1.
 */
@Service
public class RoleResourceRelServiceImpl extends GenericServiceImpl<SysRoleResource, String> implements IRoleResourceRelService {
    /**
     * 角色资源的添加
     *
     * @param ids
     * @param roleId
     * @param roleCode
     * @param includeParent @return
     */
    public int saveRelResource(String[] ids, String roleCode, String roleId, String includeParent,String pid,String nameText) {
        //判断该角色是否已经添加了资源如果添加删掉，没添加直接添加
        int delNum = iRoleResourceRelDao.delRoleResourceFromResourceRel(roleId, pid, nameText, includeParent);
        int count = 0;
        for (int i = 0; i < ids.length; i++) {
            //防止ids里面只有一个空字符串
            if("".equals(ids[i])){
                continue;
            }
            iRoleResourceRelDao.saveRoleSource(ids[i], roleId);
            count++;
        }
        //count=0说明只是进行了删除操作，此时count应取删除条数，否则后台不显示保存成功
        return count < 1 ? delNum : count;
    }


    /**
     * 定义成抽象方法,由子类实现,完成dao的注入
     *
     * @return GenericDao实现类
     */
    public GenericDao<SysRoleResource, String> getDao() {
        return null;
    }
    @Resource
    private IRoleResourceRelDao iRoleResourceRelDao;
    @Resource
    private ISysResourceDao sysResourceDao;
}
