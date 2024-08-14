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
import com.qmc.model.Fertilizer;
import com.qmc.service.FertilizerService;
@CrossOrigin(origins = "http://localhost:4200",allowedHeaders = "*")
@RestController
@RequestMapping("/api/FertilizerService")
public class FertilizerController {
	@Autowired
	private FertilizerService fertilizerService;
	@GetMapping("Fertilizers")
	public List<Fertilizer> Application(){
		return fertilizerService.getall();
	}
@GetMapping("/Fertilizer/{id}")
public Optional<Fertilizer> getById(@PathVariable("id") int shopid){
	return fertilizerService.getById(shopid);
}
@PostMapping("/create")
public Fertilizer create(@RequestBody Fertilizer fertilizer) {
	return fertilizerService.create(fertilizer);
}
@DeleteMapping("/Fertilizer/{id}")
public void delete(@PathVariable("id") int shopid) {
	fertilizerService.delete(shopid);
}
@PutMapping("/update")
public Fertilizer update(@RequestBody Fertilizer fertilizer) {
	return fertilizerService.update(fertilizer);
}
}
