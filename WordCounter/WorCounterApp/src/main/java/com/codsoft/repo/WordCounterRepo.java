package com.codsoft.repo;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.codsoft.model.WordCounter;

@Repository
public interface WordCounterRepo extends JpaRepository<WordCounter, Integer> {

}
