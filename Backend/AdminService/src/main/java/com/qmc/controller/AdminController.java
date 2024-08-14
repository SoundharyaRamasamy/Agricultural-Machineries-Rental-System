package com.qmc.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.qmc.model.AdminLogin;
import com.qmc.model.Farmer;
import com.qmc.model.Fertilizer;
import com.qmc.model.Machinery;
import com.qmc.service.AdminService;
@CrossOrigin(origins = "http://localhost:4200",allowedHeaders = "*")
@RestController
@RequestMapping("/api/AdminLoginService")
public class AdminController {
	@Autowired
	private AdminService adminService;
@GetMapping("/login")
public AdminLogin validate(@RequestBody AdminLogin adminLogin) {
return adminService.login(adminLogin);
}

@GetMapping("/login/{username}/{pwd}")
public AdminLogin login(@PathVariable("username")String username,@PathVariable("pwd")String pwd) {
return adminService.login(username,pwd);
}
@GetMapping("/api/FarmerService/Farmers")
public List<Farmer> farmerApplication() {
	return adminService.farmergetAll();
}
@GetMapping("/api/FarmerService/Farmer/{id}")
public Farmer farmergetById(@PathVariable("id") int farmerid) {
	return adminService.farmergetById(farmerid);
}
@PostMapping("/api/FarmerService/create")
public Farmer farmercreate(@RequestBody Farmer farmer) {
return adminService.farmercreate(farmer);
}
@DeleteMapping("/api/FarmerService/Farmers/{id}")
public void farmerdelete(@PathVariable("id") int farmerid) {
	adminService.farmerdelete(farmerid);
}
@PutMapping("/api/FarmerService/update")
public Farmer update(@RequestBody Farmer farmer) {
	return adminService.farmerupdate(farmer);
}
@GetMapping("/api/FertilizerService/Fertilizers")
public List<Fertilizer> fertilizerApplication() {
	return adminService.fertilizergetAll();
}
@GetMapping("/api/FertilizerService/Fertilizer/{id}")
public Fertilizer fertilizergetById(@PathVariable("id") int shopid) {
	return adminService.fertilizergetById(shopid);
}
@PostMapping("/api/FertilizerService/create")
public Fertilizer fertilizercreate(@RequestBody Fertilizer fertilizer) {
   return adminService.fertilizercreate(fertilizer);
}
@DeleteMapping("/api/FertilizerService/Fertilizer/{id}")
public void fertilizerdelete(@PathVariable("id") int shopid) {
	adminService.fertilizerdelete(shopid);
}
@PutMapping("/api/FertilizerService/update")
public Fertilizer update(@RequestBody Fertilizer fertilizer) {
	return adminService.fertilizerupdate(fertilizer);
}
@GetMapping("/api/MachineryService/Machineries")
public List<Machinery> machineryApplication() {
	return adminService.machinerygetAll();
}
@GetMapping("/api/MachineryService/Machinery/{id}")
public Machinery machinerygetById(@PathVariable("id") int machineid) {
	return adminService.machinerygetById(machineid);
}
@PostMapping("/api/MachineryService/create")
public Machinery machinerycreate(@RequestBody Machinery machinery) {
   return adminService.machinerycreate(machinery);
}
@DeleteMapping("/api/MachineryService/Machinery/{id}")
public void machinerydelete(@PathVariable("id") int machineid) {
	adminService.machinerydelete(machineid);
}
@PutMapping("/api/MachineryService/update")
public Machinery update(@RequestBody Machinery machinery) {
	return adminService.machineryupdate(machinery);
}
}
