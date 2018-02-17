package com.tails.system.service.manage.impl;

import com.tails.system.dao.manage.IRoleResourceRelDao;
import com.tails.system.dao.manage.ISysResourceDao;
import com.tails.system.model.manage.SysResource;
import com.tails.system.service.manage.ISysResourceService;
import flexjson.JSONSerializer;
import org.springframework.stereotype.Service;

import javax.annotation.Resource;
import java.util.HashMap;
import java.util.List;

/**
 * Created by Administrator on 2017/3/21.
 */
@Service
public class SysResourceServiceImpl implements ISysResourceService {
    @Resource
    private ISysResourceDao sysResourceDao;
    @Resource
    private IRoleResourceRelDao roleResourceRelDao;

    /**
     * 修改资源数据
     *
     * @param sysResource
     * @return
     */
    public int editData(SysResource sysResource) {
        return sysResourceDao.editData(sysResource);
    }

    /**
     * 添加资源数据
     *
     * @param sysResource
     * @return
     */
    public int insert(SysResource sysResource) {
        return sysResourceDao.insertSelective(sysResource);
    }

    /**
     * 删除资源数据
     *
     * @param ids
     * @return
     */
    public int delete(String ids) {
        return sysResourceDao.deleteByPrimaryKey(ids);
    }

    /**
     * 分页显示资源数据
     *
     * @param name
     * @param pageIndex
     * @param pageSize
     * @param pResourceCode
     * @param includeParent
     * @return
     */
    public HashMap pageList(String name, int pageIndex, int pageSize, String pResourceCode, String includeParent) {
        return sysResourceDao.pageList(name, pageIndex, pageSize, pResourceCode, includeParent);
    }

    /**
     * 修改资源时进行数据回显
     * @param id
     * @return
     */
    public HashMap setData(String id) {
        return sysResourceDao.setData(id);
    }

    /**
     * 加载资源树
     * @return
     */
    public String loadSysResourceTreeService() {
        List list = sysResourceDao.loadSysResourceTree();
        if (list == null) {
            return "";
        } else {
            if (list != null && (list.getClass().equals(String.class))) return list.toString();
            JSONSerializer serializer = new JSONSerializer();
            return serializer.deepSerialize(list);
        }
    }

    /**
     * 获取角色拥有的资源
     *
     * @param roleId
     * @return
     */
    public HashMap getRoleResource(String roleId) {
        //查询有多少资源Id被分配与该角色
        List<String> list = roleResourceRelDao.getRoleRes(roleId);
        //通过resourceId 去查询资源对象
        if (list.size() > 0) {
            return sysResourceDao.getResourceByIds(list);
        }
        return null;
    }

    public int update(SysResource sysResource) {
        return 0;
    }

    public SysResource selectById(String id) {
        return null;
    }

    public SysResource selectOne() {
        return null;
    }

    public List<SysResource> selectList() {
        return null;

    }
}