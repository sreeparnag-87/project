package com.example.demo.Service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.demo.Entity.EmployeeSignInDetails;

import com.example.demo.Dao.RegistrationRepository;

@Service
public class RegistrationService {
	@Autowired
	private RegistrationRepository repo;
	
	public EmployeeSignInDetails saveUser(EmployeeSignInDetails employeedetails) {
		return repo.save(employeedetails);
	}
	public EmployeeSignInDetails fetchUserByEmailID(String tempemail) {
		return repo.findByUsername(tempemail);
	
}
public EmployeeSignInDetails fetchUserByEmailIDAndPassword(String tempemail,String temppass) {
	return repo.findByUsernameAndPassword(tempemail,temppass);
	
}

	}

