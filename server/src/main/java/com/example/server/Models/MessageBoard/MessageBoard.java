package com.example.server.Models.MessageBoard;

import com.example.server.Models.Channel.Channel;
import com.example.server.Models.Message.Message;
import com.example.server.Models.Project.Project;
import jakarta.persistence.*;
import lombok.Getter;
import lombok.Setter;
import lombok.ToString;

import java.time.LocalDate;
import java.util.ArrayList;
import java.util.List;

@Entity
@Getter
@Setter
@ToString
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