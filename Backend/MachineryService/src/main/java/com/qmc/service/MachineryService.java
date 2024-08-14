package com.qmc.service;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.qmc.model.Machinery;
import com.qmc.repository.MachineryRepository;

@Service
public class MachineryService {
@Autowired
private MachineryRepository machineryRepository;

public List<Machinery> getall() {
	
	return machineryRepository.findAll();
}
public Optional<Machinery> getById(int machineid) {
	return machineryRepository.findById(machineid);
}
public Machinery create(Machinery machinery) {
	
	return machineryRepository.save(machinery);
}
public void delete(int machineid) {
	machineryRepository.deleteById(machineid);
	
}
public Machinery update(Machinery machinery) {
	
	return machineryRepository.save(machinery);
}
}
