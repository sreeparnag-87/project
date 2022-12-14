package com.example.demo.Exception;

import java.util.Date;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.ControllerAdvice;
import org.springframework.web.bind.annotation.ExceptionHandler;
import org.springframework.web.bind.annotation.RestControllerAdvice;
import org.springframework.web.context.request.WebRequest;

@RestControllerAdvice
public class GlobalExceptionHandler {
	
	
	@ExceptionHandler(Exception.class)
	public ResponseEntity<?> handleGlobalException
				(Exception exception, WebRequest request){
		
		ErrorDetails errordetails=new ErrorDetails(new Date(),exception.getMessage(),
													request.getDescription(false));		
		return new ResponseEntity(errordetails,HttpStatus.INTERNAL_SERVER_ERROR);
	}
	
	@ExceptionHandler(APIException.class)
	public ResponseEntity<?> handleAPIException
				(APIException exception, WebRequest request){
		
		ErrorDetails errordetails=new ErrorDetails(new Date(),exception.getMessage(),
													request.getDescription(false));		
		return new ResponseEntity(errordetails,HttpStatus.INTERNAL_SERVER_ERROR);
	}
	@ExceptionHandler(EmployeeNotFoundException.class)
	public ResponseEntity<?> handleEmployeeNotFoundException
				(EmployeeNotFoundException exception, WebRequest request){
		
		ErrorDetails errordetails=new ErrorDetails(new Date(),exception.getMessage(),
													request.getDescription(false));		
		return new ResponseEntity(errordetails,HttpStatus.NOT_FOUND);
	}
	
}
