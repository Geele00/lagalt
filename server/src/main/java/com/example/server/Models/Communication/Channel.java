package com.example.server.Models.Communication;

import jakarta.persistence.*;
import lombok.*;

import java.util.ArrayList;
import java.util.List;

@Entity
@Getter
@Setter
@ToString
@Table(name = "channel")
public class Channel {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int id;

    private String name;

    @OneToMany(mappedBy = "channel", cascade = CascadeType.ALL,orphanRemoval = true)
    private List<MessageBoard> messageBoards = new ArrayList<>();



}
