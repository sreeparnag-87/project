package com.example.demo.Entity;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;
@Entity
@Table
public class Employee {
	@Id
	@GeneratedValue(strategy=GenerationType.IDENTITY)
	Long id;	
	@Column(length=30)
    String firstname;
	@Column(length=30)
    String lastname;
	@Column(length=30,name="EmailId",unique=true)
    String emailid;
   @Column(length=10)
    String phno;
	
	public Long getId() {
	return id;
}
public void setId(Long id) {
	this.id = id;
}
	public String getFirstname() {
		return firstname;
	}
	public void setFirstname(String firstname) {
		this.firstname = firstname;
	}
	public String getLastname() {
		return lastname;
	}
	public void setLastname(String lastname) {
		this.lastname = lastname;
	}
	public String getEmailid() {
		return emailid;
	}
	public void setEmailid(String emailid) {
		this.emailid = emailid;
	}
	public String getPhno() {
		return phno;
	}
	public void setPhno(String phno) {
		this.phno = phno;
	}
	public Employee(Long id, String firstname, String lastname, String emailid, String phno) {
		super();
		this.id = id;
		this.firstname = firstname;
		this.lastname = lastname;
		this.emailid = emailid;
		this.phno = phno;
	}
	public Employee() {
		super();
		// TODO Auto-generated constructor stub
	}
	
    
}