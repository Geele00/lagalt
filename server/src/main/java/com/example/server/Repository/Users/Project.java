package com.example.server.Repository.Users;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface Project extends JpaRepository<Project, Integer> {
}
