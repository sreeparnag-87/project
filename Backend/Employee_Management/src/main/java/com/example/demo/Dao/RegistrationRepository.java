package com.example.demo.Dao;

import org.springframework.data.jpa.repository.JpaRepository;

import com.example.demo.Entity.EmployeeSignInDetails;


public interface RegistrationRepository extends JpaRepository<EmployeeSignInDetails,Long>{

	EmployeeSignInDetails findByUsername(String Username);

	EmployeeSignInDetails findByUsernameAndPassword(String Username, String password);

	
		
}
