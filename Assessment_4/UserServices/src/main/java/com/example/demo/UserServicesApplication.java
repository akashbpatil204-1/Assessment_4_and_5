package com.example.demo;

import java.util.ArrayList;
import org.springframework.http.HttpStatus;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.Bean;
import org.springframework.http.MediaType;
import org.springframework.stereotype.Service;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.ResponseStatus;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.client.RestTemplate;

//@Service
@RestController
@SpringBootApplication
public class UserServicesApplication {
	
	@Autowired
	private UserRepository repository;
	//@Autowired
	//RestTemplate restTemplate;

	public static void main(String[] args) {
		SpringApplication.run(UserServicesApplication.class, args);

	}

	/*
	 * @Bean public RestTemplate getRestTemplate() { return new RestTemplate(); }
	 */
	
    @GetMapping("/users/")
	public List<User> getAllUser() {
        List<User> users = new ArrayList<User>();
        repository.findAll().forEach(user -> users.add(user));
        System.out.println("usersc");
        
        return users ;
    }
    
    @PostMapping(value = "/check", consumes = {MediaType.APPLICATION_JSON_VALUE, MediaType.APPLICATION_XML_VALUE})
    @ResponseStatus(HttpStatus.CREATED)
	public boolean check(@RequestBody User u1) {
    	System.out.println("akash");
    	List<User> users = new ArrayList<User>();
        repository.findAll().forEach(user -> users.add(user));
        System.out.println("usersc");
        
        for(int i=0;i<users.size();i++) {
        	if((users.get(i).getPassword().equals(u1.getPassword())) && (users.get(i).getUsername().equals(u1.getUsername()))) {
        		return true;
        	}
        }
        return false;
    }

	
}
