package com.example.fit.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.example.fit.model.Product;

@Repository
public interface ProductRepository extends JpaRepository<Product, Long> {
}

