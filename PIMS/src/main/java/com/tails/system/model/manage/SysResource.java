package com.tails.system.model.manage;

import java.util.Date;

import javax.persistence.Basic;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.Table;

@Table(name = "SYS_RESOURCE")
@Entity
public class SysResource {
    private String resourceId;      //资源ID
    private String resourceName;    //资源名称
    private String resourceCode;    //资源编码
    private String resourceType;    //资源类型
    private String pResourceCode;   //上级资源编码
    private String pResourceName;   //上级资源名称
    private String resourcePath;    //资源路径
    private String resourceSign;    //资源权限标志
    private Date createTime;        //创建时间
    private String remark;          //备注

    @Id
    @Column(name = "RESOURCE_ID")
    public String getResourceId() {
        return resourceId;
    }

    public void setResourceId(String resourceId) {
        this.resourceId = resourceId;
    }

    @Basic
    @Column(name = "RESOURCE_NAME")
    public String getResourceName() {
        return resourceName;
    }

    public void setResourceName(String resourceName) {
        this.resourceName = resourceName;
    }

    @Basic
    @Column(name = "RESOURCE_CODE")
    public String getResourceCode() {
        return resourceCode;
    }

    public void setResourceCode(String resourceCode) {
        this.resourceCode = resourceCode;
    }

    @Basic
    @Column(name = "RESOURCE_TYPE")
    public String getResourceType() {
        return resourceType;
    }

    public void setResourceType(String resourceType) {
        this.resourceType = resourceType;
    }

    @Basic
    @Column(name = "P_RESOURCE_CODE")
    public String getpResourceCode() {
        return pResourceCode;
    }

    public void setpResourceCode(String pResourceCode) {
        this.pResourceCode = pResourceCode;
    }

    @Basic
    @Column(name = "P_RESOURCE_NAME")
    public String getpResourceName() {
        return pResourceName;
    }

    public void setpResourceName(String pResourceName) {
        this.pResourceName = pResourceName;
    }

    @Basic
    @Column(name = "RESOURCE_PATH")
    public String getResourcePath() {
        return resourcePath;
    }

    public void setResourcePath(String resourcePath) {
        this.resourcePath = resourcePath;
    }

    @Basic
    @Column(name = "RESOURCE_SIGN")
    public String getResourceSign() {
        return resourceSign;
    }

    public void setResourceSign(String resourceSign) {
        this.resourceSign = resourceSign;
    }

    @Basic
    @Column(name = "CREATE_TIME")
    public Date getCreateTime() {
        return createTime;
    }

    public void setCreateTime(Date createTime) {
        this.createTime = createTime;
    }

    @Basic
    @Column(name = "REMARK")
    public String getRemark() {
        return remark;
    }

    public void setRemark(String remark) {
        this.remark = remark;
    }
}
