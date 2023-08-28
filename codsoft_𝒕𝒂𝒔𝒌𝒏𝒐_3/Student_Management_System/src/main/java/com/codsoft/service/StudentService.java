package com.codsoft.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.codsoft.model.Student;
import com.codsoft.repo.StudentRepository;

@Service
public class StudentService {
    @Autowired
    private StudentRepository studentRepository;

    public Student addStudent(Student student) {
        return studentRepository.save(student);
    }

    public void removeStudent(Long id) {
        studentRepository.deleteById(id);
    }

    public Student searchStudent(int rollNumber) {
        return studentRepository.findByRollNumber(rollNumber);
    }

    public List<Student> getAllStudents() {
        return studentRepository.findAll();
    }
}

