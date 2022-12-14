package com.example.demo.Controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.example.demo.Entity.EmployeeSignInDetails;

import com.example.demo.Service.RegistrationService;

@RestController
@CrossOrigin(value="http://localhost:4200/")
public class RegistrationController {

	@Autowired
	private RegistrationService service;
	
	@PostMapping("/registeruser")
	public EmployeeSignInDetails registerUser(@RequestBody EmployeeSignInDetails user) throws Exception
	{
		String tempUsername=user.getUsername();
		if(tempUsername!=null && !"".equals(tempUsername)) {
			EmployeeSignInDetails userobj=service.fetchUserByEmailID(tempUsername);
			if(userobj!=null) {
				throw new Exception("User with this id : "+ tempUsername+" is  already exits");
			}
		}
		
		
		EmployeeSignInDetails userobj=null;
		userobj=service.saveUser(user);
		return userobj;
	}
	
	
	@PostMapping("/login")
	
	public EmployeeSignInDetails loginUser(@RequestBody EmployeeSignInDetails user) throws Exception   {
		
		EmployeeSignInDetails userObj = null;
		
		
//		if(tempemail == null && temppass== null) {
//			throw new Exception("bad reuest");
//		}
		String tempUsername=user.getUsername();
		String temppass=user.getPassword();
			if(tempUsername != null && temppass!= null) {
			userObj= service.fetchUserByEmailIDAndPassword(tempUsername,temppass);
		}
			if(userObj == null) {
				throw new Exception("bad Credential");
			} 
		return  userObj;
		//	return "Login successfully";
			
	}
}
