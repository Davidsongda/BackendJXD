package com.tails.system.model.manage;


import javax.persistence.*;

/**
 * Created by Administrator on 2017/3/21.
 */
@Table(name = "sys_role")
@Entity
public class Role {
    private String id;//角色id
    private String name;//角色名字
    private String shortName;//角色简称
    private String code;//角色编码

    @Id
    @Column(name = "ROLE_ID")
    public String getId() {
        return id;
    }

    public void setId(String id) {
        this.id = id;
    }
    @Basic
    @Column(name = "ROLE_NAME")
    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }



    @Basic
    @Column(name = "REMARK")
    public String getShortName() {
        return shortName;
    }
    public void setShortName(String shortName) {
        this.shortName = shortName;
    }

    @Basic
    @Column(name = "ROLE_CODE")
    public String getCode() {
        return code;
    }

    public void setCode(String code) {
        this.code = code;
    }
}