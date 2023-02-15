package com.example.server.Repository.Users;

import com.example.server.Models.Users.LagaltUser;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface LagaltUserRepository extends JpaRepository<LagaltUser, Integer> {
}
