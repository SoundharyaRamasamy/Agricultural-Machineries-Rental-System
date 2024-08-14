package com.qmc.model;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;

@Entity
public class Machinery {
@Id
@GeneratedValue(strategy = GenerationType.IDENTITY)
private int machineid;
private String holder;
private String machine;
private double rent;
private String phoneno;
public Machinery() {
}

public Machinery(int machineid, String holder, String machine, double rent, String phoneno) {
	
	this.machineid = machineid;
	this.holder = holder;
	this.machine = machine;
	this.rent = rent;
	this.phoneno = phoneno;
}

public int getMachineid() {
	return machineid;
}
public void setMachineid(int machineid) {
	this.machineid = machineid;
}
public String getHolder() {
	return holder;
}
public void setHolder(String holder) {
	this.holder = holder;
}
public String getMachine() {
	return machine;
}
public void setMachine(String machine) {
	this.machine = machine;
}
public double getRent() {
	return rent;
}
public void setRent(double rent) {
	this.rent = rent;
}
public String getPhoneno() {
	return phoneno;
}
public void setPhoneno(String phoneno) {
	this.phoneno = phoneno;
}

}
