package com.example.server.Communication;

import com.example.server.Models.Users.LagaltUser;
import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.time.LocalDateTime;
import java.util.ArrayList;
import java.util.List;

@Entity
@Data
@NoArgsConstructor
@AllArgsConstructor
public class Message {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int id;

    private String text;

    private LocalDateTime timestamp;

    private int score;

    @ManyToOne
    @JoinColumn(name = "altuserId")
    private LagaltUser lagaltUser;

    @ManyToOne
    @JoinColumn(name = "messageBoardId")
    private MessageBoard messageBoard;

    @OneToMany(mappedBy = "parentMessage", cascade = CascadeType.ALL, orphanRemoval = true)
    private List<Message> replies = new ArrayList<>();

    @ManyToOne
    @JoinColumn(name = "parentMessageId")
    private Message parentMessage;











}
