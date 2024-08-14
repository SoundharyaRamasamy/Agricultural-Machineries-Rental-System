package com.qmc.service;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.qmc.model.Fertilizer;
import com.qmc.repository.FertilizerRepository;

@Service
public class FertilizerService {
@Autowired
private FertilizerRepository fertilizerRepository;
	public List<Fertilizer> getall() {
		
		return fertilizerRepository.findAll();
	}

public Optional<Fertilizer> getById(int shopid) {
	return fertilizerRepository.findById(shopid);
}

public Fertilizer create(Fertilizer fertilizer) {
	
	return fertilizerRepository.save(fertilizer);
}

public void delete(int shopid) {
	fertilizerRepository.deleteById(shopid);
	
}

public Fertilizer update(Fertilizer fertilizer) {
	
	return fertilizerRepository.save(fertilizer);
}
}
