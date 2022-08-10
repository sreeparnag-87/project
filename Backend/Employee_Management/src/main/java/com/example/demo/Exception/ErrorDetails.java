package com.example.demo.Exception;

import java.util.Date;

public class ErrorDetails {
	private Date timestamp;
	private String message;
	private String detils;
	public Date getTimestamp() {
		return timestamp;
	}
	public void setTimestamp(Date timestamp) {
		this.timestamp = timestamp;
	}
	public String getMessage() {
		return message;
	}
	public void setMessage(String message) {
		this.message = message;
	}
	public String getDetils() {
		return detils;
	}
	public void setDetils(String detils) {
		this.detils = detils;
	}
	public ErrorDetails(Date timestamp, String message, String detils) {
		super();
		this.timestamp = timestamp;
		this.message = message;
		this.detils = detils;
	}
	public ErrorDetails() {
		super();
		// TODO Auto-generated constructor stub
	}
	
}
