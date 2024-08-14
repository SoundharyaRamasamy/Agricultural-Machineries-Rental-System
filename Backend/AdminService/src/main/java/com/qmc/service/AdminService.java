package com.qmc.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.web.client.RestTemplate;

import com.qmc.model.Farmer;
import com.qmc.model.Fertilizer;
import com.qmc.model.Machinery;
import com.qmc.model.AdminLogin;
import com.qmc.repository.AdminRepository;

@Service
public class AdminService {
@Autowired
private AdminRepository adminRepository;
	private String FarmerReqURL="http://localhost:8082/api/FarmerService";
	private String FertilizerReqURL="http://localhost:8083/api/FertilizerService";
	private String MachineryReqURL="http://localhost:8084/api/MachineryService";
	private RestTemplate restTemplate = new RestTemplate();
	public AdminLogin login(AdminLogin adminLogin) {
		String Username=adminLogin.getUsername();
		String Pwd=adminLogin.getPwd();
		return adminRepository.findByUsernameAndPwd(Username,Pwd);
	}
	public AdminLogin login(String username, String pwd) {
		return adminRepository.findByUsernameAndPwd(username, pwd);
	}
	
	public List<Farmer> farmergetAll() {
		List<Farmer> farmer = restTemplate.getForObject(FarmerReqURL+"/Farmers", List.class);
		return farmer;
	}
	public Farmer farmergetById(int farmerid) {
		Farmer farmer = restTemplate.getForObject(FarmerReqURL+"/Farmer/"+farmerid,Farmer.class);
		return farmer;
				}
    public Farmer farmercreate(Farmer farmer) {
		Farmer farmer1 = restTemplate.postForObject(FarmerReqURL+"/create",farmer,Farmer.class);
		return farmer1;
	}
	public void farmerdelete(int farmerid) {
		restTemplate.delete(FarmerReqURL+"/Farmers"+farmerid);
	}
	public Farmer farmerupdate(Farmer farmer) {
		restTemplate.put(FarmerReqURL+"/update", farmer);
		return farmergetById(farmer.getFarmerid());
	}

	public List<Fertilizer> fertilizergetAll() {
		List<Fertilizer> fertilizer = restTemplate.getForObject(FertilizerReqURL+"/Fertilizers", List.class);
		return fertilizer;
	}

	public Fertilizer fertilizergetById(int shopid) {
		Fertilizer fertilizer = restTemplate.getForObject(FertilizerReqURL+"/Fertilizer/"+shopid, Fertilizer.class);
		return fertilizer;
	}

	public Fertilizer fertilizercreate(Fertilizer fertilizer) {
		Fertilizer fertilizer1 = restTemplate.postForObject(FertilizerReqURL+"/create",fertilizer,Fertilizer.class);
		return fertilizer1;
	}
	public void fertilizerdelete(int shopid) {
		restTemplate.delete(FertilizerReqURL+"/Fertilizer/"+shopid);
	}

	public Fertilizer fertilizerupdate(Fertilizer fertilizer) {
		restTemplate.put(FertilizerReqURL+"/update",fertilizer);
		return fertilizergetById(fertilizer.getShopid());
		
	}

	public List<com.qmc.model.Machinery> machinerygetAll() {
		List<Machinery> machinery = restTemplate.getForObject(MachineryReqURL+"/Machineries", List.class);
		return machinery;
	}

	public Machinery machinerygetById(int machineid) {
		Machinery machinery = restTemplate.getForObject(MachineryReqURL+"/Machinery/"+machineid, Machinery.class);
		return machinery;
	}

	public Machinery machinerycreate(Machinery machinery) {
		Machinery machinery1 = restTemplate.postForObject(MachineryReqURL+"/create",machinery,Machinery.class);
		return machinery1;
	}

	public void machinerydelete(int machineid) {
		restTemplate.delete(MachineryReqURL+"/Machinery/"+machineid);
		
	}

	public Machinery machineryupdate(Machinery machinery) {
		restTemplate.put(MachineryReqURL+"/update",machinery);
		return machinerygetById(machinery.getMachineid());
				
	}
}
