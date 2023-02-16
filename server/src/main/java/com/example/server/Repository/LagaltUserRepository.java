package com.example.server.Repository;

import com.example.server.Models.LagaltUser.LagaltUser;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface LagaltUserRepository extends JpaRepository<LagaltUser, Integer> {
}
