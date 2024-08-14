package com.qmc.model;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;

@Entity
public class Farmer {
@Id
@GeneratedValue(strategy = GenerationType.IDENTITY)
private int farmerid;
private String farmername;
private String mobileno;
private String district;
private String area;
private String village;
private String requireddate;
private String machineid;
private double rent;
private double hours;
private double totalrent;
public Farmer() {
}
public Farmer(int farmerid, String farmername, String mobileno, String district, String area, String village,
		String requireddate, String machineid, double rent, double hours, double totalrent) {
	super();
	this.farmerid = farmerid;
	this.farmername = farmername;
	this.mobileno = mobileno;
	this.district = district;
	this.area = area;
	this.village = village;
	this.requireddate = requireddate;
	this.machineid = machineid;
	this.rent = rent;
	this.hours = hours;
	this.totalrent = totalrent;
}
public int getFarmerid() {
	return farmerid;
}
public void setFarmerid(int farmerid) {
	this.farmerid = farmerid;
}
public String getFarmername() {
	return farmername;
}
public void setFarmername(String farmername) {
	this.farmername = farmername;
}
public String getMobileno() {
	return mobileno;
}
public void setMobileno(String mobileno) {
	this.mobileno = mobileno;
}
public String getDistrict() {
	return district;
}
public void setDistrict(String district) {
	this.district = district;
}
public String getArea() {
	return area;
}
public void setArea(String area) {
	this.area = area;
}
public String getVillage() {
	return village;
}
public void setVillage(String village) {
	this.village = village;
}
public String getRequireddate() {
	return requireddate;
}
public void setRequireddate(String requireddate) {
	this.requireddate = requireddate;
}
public String getMachineid() {
	return machineid;
}
public void setMachineid(String machineid) {
	this.machineid = machineid;
}
public double getRent() {
	return rent;
}
public void setRent(double rent) {
	this.rent = rent;
}
public double getHours() {
	return hours;
}
public void setHours(double hours) {
	this.hours = hours;
}
public double getTotalrent() {
	return totalrent;
}
public void setTotalrent(double totalrent) {
	this.totalrent = totalrent;
}



}
