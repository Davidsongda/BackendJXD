package com.tails.system.model.shiro;

import javax.persistence.*;

/**
 * @Author 阁楼麻雀
 * @Date 2016-7-8
 * @Desc
 */
@Entity
@Table(name = "pub_role", schema = "db_humanresource", catalog = "")
public class PubRole {
    private long id;
    private String roleName;
    private String roleSign;
    private String description;

    @Id
    @Column(name = "id")
    public long getId() {
        return id;
    }

    public void setId(long id) {
        this.id = id;
    }

    @Basic
    @Column(name = "role_name")
    public String getRoleName() {
        return roleName;
    }

    public void setRoleName(String roleName) {
        this.roleName = roleName;
    }

    @Basic
    @Column(name = "role_sign")
    public String getRoleSign() {
        return roleSign;
    }

    public void setRoleSign(String roleSign) {
        this.roleSign = roleSign;
    }

    @Basic
    @Column(name = "description")
    public String getDescription() {
        return description;
    }

    public void setDescription(String description) {
        this.description = description;
    }

    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (o == null || getClass() != o.getClass()) return false;

        PubRole pubRole = (PubRole) o;

        if (id != pubRole.id) return false;
        if (roleName != null ? !roleName.equals(pubRole.roleName) : pubRole.roleName != null) return false;
        if (roleSign != null ? !roleSign.equals(pubRole.roleSign) : pubRole.roleSign != null) return false;
        if (description != null ? !description.equals(pubRole.description) : pubRole.description != null) return false;

        return true;
    }

    @Override
    public int hashCode() {
        int result = (int) (id ^ (id >>> 32));
        result = 31 * result + (roleName != null ? roleName.hashCode() : 0);
        result = 31 * result + (roleSign != null ? roleSign.hashCode() : 0);
        result = 31 * result + (description != null ? description.hashCode() : 0);
        return result;
    }
}
