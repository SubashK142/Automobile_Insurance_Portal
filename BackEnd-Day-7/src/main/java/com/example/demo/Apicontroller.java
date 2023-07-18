package com.example.demo;

import org.springframework.web.bind.annotation.RestController;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;


@RestController
@RequestMapping("/api")
@CrossOrigin(origins = "http://localhost:3000")

public class Apicontroller {
	
    @Autowired
    private repo repo;

    @GetMapping("/get")
    public List<Model> getAllModels() {
        return repo.findAll();
    }

    @PostMapping("/post")
    public Model create(@RequestBody Model models) {
        return repo.save(models);
    }
}