package com.qmc.model;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;

@Entity
public class AdminLogin {
@Id
@GeneratedValue(strategy = GenerationType.IDENTITY)
private int id;
private String username;
private String pwd;
public AdminLogin() {
}
public AdminLogin(int id, String username, String pwd) {
	
	this.id = id;
	this.username = username;
	this.pwd = pwd;
}
public int getId() {
	return id;
}
public void setId(int id) {
	this.id = id;
}
public String getUsername() {
	return username;
}
public void setUsername(String username) {
	this.username = username;
}
public String getPwd() {
	return pwd;
}
public void setPwd(String pwd) {
	this.pwd = pwd;
}

}
