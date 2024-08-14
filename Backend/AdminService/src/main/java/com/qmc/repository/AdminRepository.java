package com.qmc.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.qmc.model.AdminLogin;

@Repository
public interface AdminRepository extends JpaRepository<AdminLogin, Integer>{

	AdminLogin findByUsernameAndPwd(String Username, String Pwd);

}
