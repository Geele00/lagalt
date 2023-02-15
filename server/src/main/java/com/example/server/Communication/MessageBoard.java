package com.example.server.Communication;

import com.example.server.Models.Users.Project;
import jakarta.persistence.*;

import java.time.LocalDate;
import java.util.ArrayList;
import java.util.List;

@Entity
public class MessageBoard {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int messageBoardId;

    private String name;

    @OneToMany(mappedBy = "messageBoard", cascade = CascadeType.ALL,orphanRemoval = true)
    private List<Message> messages = new ArrayList<>();

    @OneToOne
    @JoinColumn(name = "projectId")
    private Project project;

    @ManyToOne
    @JoinColumn(name = "channelId")
    private Channel channel;

    private LocalDate creationDate;


    private void removeMessageBoard(){

        project = null;
        channel = null;
    }


}
