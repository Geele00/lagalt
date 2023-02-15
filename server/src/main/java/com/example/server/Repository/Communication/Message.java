package com.example.server.Repository.Communication;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface Message extends JpaRepository<Message, Integer> {
}
