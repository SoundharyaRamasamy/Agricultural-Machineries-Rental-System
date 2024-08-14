package com.qmc.model;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;

@Entity
public class Fertilizer {
@Id
@GeneratedValue(strategy = GenerationType.IDENTITY)
private int shopid;
private String areas;
private String shopname;
private String date;
private String availableproducts;
private String contact;
public Fertilizer() {
}


public Fertilizer(int shopid, String areas, String shopname, String date, String availableproducts, String contact) {

	this.shopid = shopid;
	this.areas = areas;
	this.shopname = shopname;
	this.date = date;
	this.availableproducts = availableproducts;
	this.contact = contact;
}


public int getShopid() {
	return shopid;
}
public void setShopid(int shopid) {
	this.shopid = shopid;
}
public String getAreas() {
	return areas;
}
public void setAreas(String areas) {
	this.areas = areas;
}
public String getShopname() {
	return shopname;
}
public void setShopname(String shopname) {
	this.shopname = shopname;
}
public String getDate() {
	return date;
}
public void setDate(String date) {
	this.date = date;
}
public String getAvailableproducts() {
	return availableproducts;
}
public void setAvailableproducts(String availableproducts) {
	this.availableproducts = availableproducts;
}
public String getContact() {
	return contact;
}
public void setContact(String contact) {
	this.contact = contact;
}



}
