package com.example.demo.Exception;

public class EmployeeNotFoundException extends RuntimeException {

	

	public String getMessage() {
		// TODO Auto-generated method stub
		return "Employee Not Found";
	}

}
