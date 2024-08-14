package com.qmc.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.qmc.model.Farmer;

public interface FarmerRepository extends JpaRepository<Farmer, Integer>{

}
