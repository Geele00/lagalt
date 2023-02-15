package com.example.server.Repository.System;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface Industry extends JpaRepository<Industry, Integer> {
}
