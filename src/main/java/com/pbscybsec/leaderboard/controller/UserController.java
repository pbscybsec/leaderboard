package com.pbscybsec.leaderboard.controller;

import com.pbscybsec.leaderboard.model.User;
import com.pbscybsec.leaderboard.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@RequestMapping("/api/users")  // Corrected the request mapping
public class UserController {

    @Autowired
    private UserRepository userRepository;

    @GetMapping
    public List<User> getAllUsers() {
        List<User> users = userRepository.findAll();
        return users;
    }
}
