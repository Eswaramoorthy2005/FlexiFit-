package com.example.fit.service;

import com.example.fit.repository.UserManagementRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;
import com.example.fit.model.User;

@Service
public class UserManagementService {  // Previously UserDashboardService

    @Autowired
    private UserManagementRepository userManagementRepository;

    // Add a new user
    public User addUser(User user) {
        return userManagementRepository.save(user);  // Corrected
    }

    // Get all users
    public List<User> getAllUsers() {
        return userManagementRepository.findAll();  // Corrected
    }

    // Get a user by ID
    public Optional<User> getUserById(Long id) {
        return userManagementRepository.findById(id);  // Corrected
    }

    // Update a user
    public User updateUser(Long id, User userDetails) {
        User user = userManagementRepository.findById(id)
            .orElseThrow(() -> new RuntimeException("User not found"));  // Corrected
        user.setUserName(userDetails.getUserName());
        user.setEmail(userDetails.getEmail());
        user.setPassword(userDetails.getPassword());
        return userManagementRepository.save(user);  // Corrected
    }

    // Delete a user
    public void deleteUser(Long id) {
        userManagementRepository.deleteById(id);  // Corrected
    }
}
