package com.qmc.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.qmc.model.Fertilizer;

@Repository
public interface FertilizerRepository extends JpaRepository<Fertilizer, Integer> {

	

}
