package com.example.demo;

import org.springframework.beans.factory.annotation.Autowired;

public class Service {
	@Autowired
	repo rep1;
	
	public String updateStudent(Model a)
	{
		rep1.save(null);
		return "updated";
	}
	
		
}
