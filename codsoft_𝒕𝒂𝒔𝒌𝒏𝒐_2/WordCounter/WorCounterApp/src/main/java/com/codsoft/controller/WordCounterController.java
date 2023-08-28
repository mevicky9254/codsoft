package com.codsoft.controller;

import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

@RestController
@CrossOrigin(origins = "*")
public class WordCounterController {
	
	@PostMapping("/countWords")
    public int countWords(@RequestBody String text) {

        String[] words = text.trim().split("\\s+");
        
        return words.length;
    }
	
}
