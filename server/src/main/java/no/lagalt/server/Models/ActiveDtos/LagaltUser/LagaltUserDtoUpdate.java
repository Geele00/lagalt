package no.lagalt.server.Models.ActiveDtos.LagaltUser;


import lombok.Data;

import java.time.LocalDate;

@Data
public class LagaltUserDtoUpdate {

    private int id;
    private String avatarUrl;

    private String userName;

    private String firstName;

    private String lastName;

    private LocalDate dob;

    private LocalDate dateOfCreation;

    private String email;

    private String bio;

}
