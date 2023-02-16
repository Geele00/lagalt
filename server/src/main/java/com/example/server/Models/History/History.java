package com.example.server.Models.History;


import com.example.server.Models.LagaltUser.LagaltUser;
import com.example.server.Models.Project.Project;
import jakarta.persistence.*;
import lombok.Getter;
import lombok.Setter;
import lombok.ToString;

import java.util.List;

@Entity
@Getter
@Setter
@ToString
@Table(name = "History")
public class History {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "hisotryId", nullable = false)
    private int hisotryId;


    @OneToMany
    @Column(name = "seenProject")
    private List<Project> seenProject;

    @OneToMany
    @Column(name = "clickedProject")
    private List<Project> clickedProject;


    @ManyToOne
    @JoinColumn(name = "lagalt_user")
    private LagaltUser lagaltUser;

}
