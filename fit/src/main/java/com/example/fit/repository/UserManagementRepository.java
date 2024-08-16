package com.example.fit.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.example.fit.model.User;

@Repository
public interface UserManagementRepository extends JpaRepository<User, Long> {
    // No additional methods are required unless you need custom queries
}
