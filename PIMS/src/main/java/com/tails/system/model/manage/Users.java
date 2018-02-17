package com.tails.system.model.manage;

import org.hibernate.annotations.GenericGenerator;

import javax.persistence.*;

@Table(name = "SYS_USER")
@Entity
public class Users {
    private String logonId;         //LOGONID  登入名称
    private String name;            //NAME  姓名
    private String password;        //PASSWORD  密码
    private String departId;        //DEPARTID  机构编号
    private String departName;      //DEPARTNAME   机构名称
    private String idEntId;         //IDENTID   身份编号
    private String personId;        //PERSONID   人事编码
    private String issj;            //ISSJ    是否管理员
    private String mainId;          //MAINID   主账号标志
    private String state;           //STATE  状态
    private String snlogonId;       //SNLOGONID   登录标识
    private String gzzh;            //GZZH  工作证号
    private String telephone;       //TELEPHONE 联系电话

    public Users(String username, String password) {
        this.logonId = username;
        this.password = password;
    }

    public Users() {
    }

    @Id
    @Column(name = "LOGONID")
    public String getLogonId() {
        return logonId;
    }

    public void setLogonId(String logonId) {
        this.logonId = logonId;
    }

    @Basic
    @Column(name = "NAME")
    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    @Basic
    @Column(name = "PASSWORD")
    public String getPassword() {
        return password;
    }

    public void setPassword(String password) {
        this.password = password;
    }

    @Basic
    @Column(name = "DEPARTID")
    public String getDepartId() {
        return departId;
    }

    public void setDepartId(String departId) {
        this.departId = departId;
    }

    @Basic
    @Column(name = "DEPARTNAME")
    public String getDepartName() {
        return departName;
    }

    public void setDepartName(String departName) {
        this.departName = departName;
    }

    @Basic
    @Column(name = "IDENTID")
    public String getIdEntId() {
        return idEntId;
    }

    public void setIdEntId(String idEntId) {
        this.idEntId = idEntId;
    }

    @Basic
    @Column(name = "PERSONID")
    public String getPersonId() {
        return personId;
    }

    public void setPersonId(String personId) {
        this.personId = personId;
    }

    @Basic
    @Column(name = "ISSJ")
    public String getIssj() {
        return issj;
    }

    public void setIssj(String issj) {
        this.issj = issj;
    }

    @Basic
    @Column(name = "MAINID")
    public String getMainId() {
        return mainId;
    }

    public void setMainId(String mainId) {
        this.mainId = mainId;
    }

    @Basic
    @Column(name = "STATE")
    public String getState() {
        return state;
    }

    public void setState(String state) {
        this.state = state;
    }

    @Basic
    @Column(name = "SNLOGONID")
    public String getSnlogonId() {
        return snlogonId;
    }

    public void setSnlogonId(String snlogonId) {
        this.snlogonId = snlogonId;
    }

    @Basic
    @Column(name = "GZZH")
    public String getGzzh() {
        return gzzh;
    }

    public void setGzzh(String gzzh) {
        this.gzzh = gzzh;
    }

    @Basic
    @Column(name = "TELEPHONE")
    public String getTelephone() {
        return telephone;
    }

    public void setTelephone(String telephone) {
        this.telephone = telephone;
    }

}
