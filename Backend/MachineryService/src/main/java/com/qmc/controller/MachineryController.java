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

import com.qmc.model.Machinery;
import com.qmc.service.MachineryService;


@CrossOrigin(origins = "http://localhost:4200",allowedHeaders = "*")
@RestController
@RequestMapping("/api/MachineryService")
public class MachineryController {
@Autowired
private MachineryService machineryService;
@GetMapping("Machineries")
public List<Machinery> Application() {
	return machineryService.getall();
}
@GetMapping("/Machinery/{id}")
public Optional<Machinery> getById(@PathVariable("id") int machineid){
	return machineryService.getById(machineid);
}
@PostMapping("/create")
public Machinery create(@RequestBody Machinery machinery) {
	return machineryService.create(machinery);
}
@DeleteMapping("/Machinery/{id}")
public void delete(@PathVariable("id") int machineid) {
	machineryService.delete(machineid);
}
@PutMapping("/update")
public Machinery update(@RequestBody Machinery machinery) {
	return machineryService.update(machinery);
}
}
