package com.example.server.Models.ActiveDtos.Users;


import com.example.server.Models.System.Country;
import com.example.server.Models.System.History;
import com.example.server.Models.Users.Project;
import com.example.server.Models.Users.Skill;
import com.example.server.Utils.Enum.Gender;
import lombok.Data;

import java.time.LocalDate;
import java.util.List;

@Data
public class LagaltUserDto {

    private int lagaltUserId;

    private String avatarUrl;

    private String userName;

    private String firstName;

    private String lastName;

    private LocalDate dob;

    private LocalDate dateOfCreation;

    private String email;

    private Gender gender;

    private Enum roles;

    private String bio;

    private List<Skill> skills;

    private List<History> Histories;

    private List<Project> projects;

    private Country country;

}
