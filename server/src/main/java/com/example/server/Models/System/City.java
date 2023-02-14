package com.example.server.Models.System;


import jakarta.persistence.*;

@Entity
@Table(name = "City")
public class City {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "cityId", nullable = false)
    private int countryId;


    @Column(name = "cityName", nullable = false)
    private String cityName;

}
