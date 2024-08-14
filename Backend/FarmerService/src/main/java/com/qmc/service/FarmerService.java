package com.qmc.service;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.qmc.model.Farmer;
import com.qmc.repository.FarmerRepository;

@Service
public class FarmerService {
	@Autowired
	private FarmerRepository farmerRepository;
		public List<Farmer> getall() {
			
			return farmerRepository.findAll();
		}
	
		public Optional<Farmer> getById(int farmerid) {
			return farmerRepository.findById(farmerid);
		}

		public Farmer create(Farmer farmer) {
			
			return farmerRepository.save(farmer);
		}

		public void delete(int farmerid) {
			farmerRepository.deleteById(farmerid);
			
		}

		public Farmer update(Farmer farmer) {
			
			return farmerRepository.save(farmer);
		}
}
