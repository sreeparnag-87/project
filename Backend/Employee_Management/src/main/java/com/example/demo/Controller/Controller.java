package com.example.demo.Controller;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;
import com.example.demo.Entity.Employee;
import com.example.demo.Exception.EmployeeNotFoundException;
import com.example.demo.Service.EmployeeService;

@CrossOrigin(origins="http://localhost:4200/")
@RestController
public class Controller {
	@Autowired
   private EmployeeService empservice;
	
	@PostMapping("/AddEmployee")
	//@RequestMapping(value="/AddEmployee", method={RequestMethod.POST})
	public Employee addEmployee(@RequestBody Employee employee) {
		return  this.empservice.addEmployee(employee);
		
	}
	
	@GetMapping(value="/GetEmployee")
	public List<Employee> getEmployee(){
		return this.empservice.getEmployee();
	}
	
	@PutMapping(value="/EditEmployee/{id}")
//	//@RequestMapping(value="/EditEmployee/{id}", method={RequestMethod.GET,RequestMethod.PUT})
	public Employee editEmployee(@RequestBody Employee employee) {
		return this.empservice.editEmployee(employee);
	}
	
	
	@RequestMapping(value="/DeleteEmployee/{id}", method={RequestMethod.GET,RequestMethod.DELETE})
	public void deleteEmployee(@PathVariable Long id){
		 this.empservice.deleteEmployee(id);
	}
	
//	@RequestMapping(value="/GetEmployeeById/{id}", method={RequestMethod.GET,RequestMethod.PUT})
	@GetMapping(value="/GetEmployeeById/{id}")
	public Optional<Employee> getEmployeeById(@PathVariable Long id ) {
		return this.empservice.GetEmployeebyId(id);
	} 
	
//	@PutMapping(value="/EditEmployee/{id}")
//	public ResponseEntity<Employee> EditBooks(@RequestBody Employee employee,@PathVariable Long id) 
//	{
//		boolean isbookExist=empservice.isEmployeeExist(employee,id);
//		if(isbookExist)
//		{
//		  this.empservice.editEmployee(employee,id);
//		  return new ResponseEntity<>(HttpStatus.CREATED);
//		}
//		else 
//		{
//			throw new EmployeeNotFoundException();
//		}
//	}
}