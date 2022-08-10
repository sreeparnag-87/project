package com.example.demo.Dao;

import org.springframework.data.jpa.repository.JpaRepository;
import com.example.demo.Entity.Employee;
import com.example.demo.Entity.EmployeeSignInDetails;

public interface EmployeeDao  extends JpaRepository<Employee,Long> {

}