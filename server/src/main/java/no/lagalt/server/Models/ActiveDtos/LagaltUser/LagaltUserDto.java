package no.lagalt.server.Models.ActiveDtos.LagaltUser;

import no.lagalt.server.Models.Country.Country;
import no.lagalt.server.Models.History.History;
import no.lagalt.server.Models.Project.Project;
import no.lagalt.server.Models.Skill.Skill;
import no.lagalt.server.Utils.Enum.Gender;
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

    private String bio;

    private List<Skill> skills;

    private List<History> Histories;

    private List<Project> projects;

    private Country country;

}
