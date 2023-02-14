package com.example.server.Models.System;

import com.example.server.Models.Users.Project;
import jakarta.persistence.*;


@Entity
@Table(name = "industry")
public class Industry {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int industryId;
    @Column(name = "name")
    private String name;

    @ManyToOne
    private Project projects;

}