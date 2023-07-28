package com.codsoft.model;

import jakarta.persistence.Entity;
import jakarta.persistence.Id;
import lombok.Data;

@Entity
@Data
public class WordCounter {

	@Id
	private Integer id;
	private String text;
}
