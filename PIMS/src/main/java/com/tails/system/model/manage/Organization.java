package com.tails.system.model.manage;

import javax.persistence.*;

/**
 * Created by Administrator on 2017/3/21.
 * 组织机构实体
 */
@Entity
@Table(name = "SYS_ORG")
public class Organization {
    private String unitId;//id 序号
    private String unitCode;//单位编号
    private String unitName;//单位名称
    private String unitBelong;//所属单位编号
    private String valid;//有效标识 1-有效，0-无效
    private Integer unitTypeId;//单位类别 1-局，2-段，3-车间，4-班组
    private String memo;//备注说明

    @Id
    @Column(name = "UNITID")
    public String getUnitId() {
        return unitId;
    }

    public void setUnitId(String unitId) {
        this.unitId = unitId;
    }

    @Basic
    @Column(name = "UNITCODE")
    public String getUnitCode() {
        return unitCode;
    }

    public void setUnitCode(String unitCode) {
        this.unitCode = unitCode;
    }
    @Basic
    @Column(name = "UNITNAME")
    public String getUnitName() {
        return unitName;
    }

    public void setUnitName(String unitName) {
        this.unitName = unitName;
    }
    @Basic
    @Column(name = "UNITBELONG")
    public String getUnitBelong() {
        return unitBelong;
    }

    public void setUnitBelong(String unitBelong) {
        this.unitBelong = unitBelong;
    }
    @Basic
    @Column(name = "VALID")
    public String getValid() {
        return valid;
    }

    public void setValid(String valid) {
        this.valid = valid;
    }
    @Basic
    @Column(name = "UNITTYPEID")
    public Integer getUnitTypeId() {
        return unitTypeId;
    }

    public void setUnitTypeId(Integer unitTypeId) {
        this.unitTypeId = unitTypeId;
    }

    @Basic
    @Column(name = "MEMO")
    public String getMemo() {
        return memo;
    }

    public void setMemo(String memo) {
        this.memo = memo;
    }






}
