package com.example.server.Repository.Communication;


import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface Channel extends JpaRepository<Channel, Integer> {
}
