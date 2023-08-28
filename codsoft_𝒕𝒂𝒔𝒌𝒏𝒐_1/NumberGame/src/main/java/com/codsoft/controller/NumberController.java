package com.codsoft.controller;

import java.util.Random;

import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

@RestController
@CrossOrigin(origins="*")
public class NumberController {
	int result=0;
	
	@GetMapping("/getRandomNumber")
	public int getRandomNumber() {
		
		//System.out.println("result "+result);
		return result;
		
	}
	
	
	
	@PostMapping("/matchNumber")
	public boolean matchRandomNumber(@RequestBody Integer number) {
		
		 Random random = new Random();
		 
	     int randomNumber = random.nextInt(100) + 1;
		 result=randomNumber;
		 
     //	 System.out.println(randomNumber);
	     
	     if(number==randomNumber) {
	    	 return true;
	     }else {
	    	return  false;
	     }
	}
	

}
