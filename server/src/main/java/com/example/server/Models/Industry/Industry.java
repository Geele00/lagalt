package com.example.server.Models.Industry;

import com.example.server.Models.Project.Project;
import jakarta.persistence.*;
import lombok.Getter;
import lombok.Setter;
import lombok.ToString;


@Entity
@Getter
@Setter
@ToString
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