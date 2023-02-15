package com.example.server.Repository.Communication;

import com.example.server.Models.Communication.MessageBoard;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface MessageBoardRepository extends JpaRepository<MessageBoard, Integer> {
}
