package com.qmc.controller;

import java.util.List;
import java.util.Optional;

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

import com.qmc.model.Farmer;
import com.qmc.service.FarmerService;
@CrossOrigin(origins = "http://localhost:4200",allowedHeaders = "*")
@RestController
@RequestMapping("/api/FarmerService")
public class FarmerController {
	@Autowired
	private FarmerService farmerService;
	@GetMapping("Farmers")
	public List<Farmer> Application(){
		return farmerService.getall();
	}
	@GetMapping("/Farmer/{id}")
	public Optional<Farmer> getById(@PathVariable("id") int farmerid){
		return farmerService.getById(farmerid);
	}
	@PostMapping("/create")
	public Farmer create(@RequestBody Farmer farmer) {
		return farmerService.create(farmer);
	}
	@DeleteMapping("/Farmer/{id}")
	public void delete(@PathVariable("id") int farmerid) {
		farmerService.delete(farmerid);
	}
	@PutMapping("/update")
	public Farmer update(@RequestBody Farmer fertilizer) {
		return farmerService.update(fertilizer);
	}
}
