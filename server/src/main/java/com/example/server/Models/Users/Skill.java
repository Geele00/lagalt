package com.example.server.Models.Users;

import com.example.server.Models.System.Industry;
import com.example.server.Utils.AddedBy;
import jakarta.persistence.*;
import java.util.List;

@Entity
@Table(name = "skill")
public class Skill {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int skillId;
    @Column(name = "name")
    private String name;
    @Column(name = "addedBy")
    private AddedBy addedBy;

    @ManyToMany()
    @JoinTable(name = "skill_industry_Relationship",
            joinColumns = {@JoinColumn(name = "skill_id")},
            inverseJoinColumns = {@JoinColumn(name = "industry_id")})
    private List<Industry> industries;


    @ManyToOne()
    @JoinColumn(name = "user_Skills")
    private LagaltUser users;

}