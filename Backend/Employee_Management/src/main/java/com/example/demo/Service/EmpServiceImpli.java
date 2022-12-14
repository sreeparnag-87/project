package com.example.demo.Service;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;

import com.example.demo.Dao.EmployeeDao;
import com.example.demo.Entity.Employee;
import com.example.demo.Exception.EmployeeNotFoundException;
@Service
public class EmpServiceImpli implements EmployeeService{
	@Autowired
	private EmployeeDao empdao;
	@Override
	public Employee addEmployee(Employee employee) {
		
		return this.empdao.save(employee);
		
		
	}

	@Override
	public List<Employee> getEmployee() {
		return this.empdao.findAll();
	}

	@Override
	public Employee editEmployee(Employee employee ) {
		return empdao.save(employee);
		
		
	}
	
//	@Override
//	public Employee editEmployee(Employee employee,Long id ) {
//		// empdao.findById(id);
//		//return empdao.save(employee);
//		
//		Employee existemp=this.empdao.findById(id)
//				.orElseThrow(() -> new EmployeeNotFoundException());
//		return this.empdao.save(existemp);
//	}

	
	

	public void deleteEmployee(Long id) {
		
		empdao.deleteById(id);
		
	}

	public Optional<Employee> GetEmployeebyId(Long id) {
	
	//	return empdao.findById(id);
		return Optional.of(empdao.findById(id)
				.orElseThrow(() ->new EmployeeNotFoundException()));
		
	}

	public boolean isEmployeeExist(Employee employee, Long id) {
		if(id==employee.getId())
			return true;
			else
				return false;
	}

	
}




