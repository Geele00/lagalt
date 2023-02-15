package com.example.server.Models.System;


import jakarta.persistence.*;
import lombok.Getter;
import lombok.Setter;
import lombok.ToString;

@Entity
@Getter
@Setter
@ToString
@Table(name = "Country")
public class Country {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "CountryId", nullable = false)
    private int countryId;


    @Column(name = "countryName", nullable = false)
    private String countryName;

    @OneToOne
    private City city;

}
