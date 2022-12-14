package com.example.demo.Service;

import java.util.List;
import java.util.Optional;

import com.example.demo.Entity.Employee;

public interface EmployeeService {
	Employee addEmployee(Employee employee);

	List<Employee> getEmployee();

	//Employee editEmployee(Employee employee, Long id);
   Employee editEmployee(Employee employee);

	void deleteEmployee(Long id);

	boolean isEmployeeExist(Employee employee, Long id);

	Optional<Employee> GetEmployeebyId(Long id);

	//Employee GetEmployeebyId(Employee employee, Long id);

}
