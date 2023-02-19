package no.lagalt.server.Dtos.User;

import lombok.Data;

import java.time.LocalDate;

@Data
public class UpdateUserDto {

    private Integer userId;

    private String avatarUrl;

    private String userName;

    private String firstName;

    private String lastName;

    private LocalDate dob;

    private LocalDate dateOfCreation;

    private String email;

    private String bio;
}
