package com.codsoft.repo;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.codsoft.model.Student;

@Repository
public interface StudentRepository extends JpaRepository<Student, Long> {
    Student findByRollNumber(int rollNumber);
}
