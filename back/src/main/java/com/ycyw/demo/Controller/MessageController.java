package com.ycyw.demo.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

import com.ycyw.demo.model.User;
import com.ycyw.demo.repository.UserRepository;

@RestController
public class MessageController {

    @Autowired
    private UserRepository userRepository;

    @GetMapping("/user")
    public ResponseEntity<User> getUser() {

        User user = userRepository
                .findByEmail("null")
                .orElseThrow(() -> new RuntimeException("user not found"));

        return ResponseEntity
                .status(HttpStatus.OK)
                .body(user);
    }

}
