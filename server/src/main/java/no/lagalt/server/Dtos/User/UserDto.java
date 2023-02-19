package no.lagalt.server.Dtos.User;

import lombok.Data;
import no.lagalt.server.Dtos.Skill.SkillId;
import no.lagalt.server.Entity.Country;
import no.lagalt.server.Entity.History;
import no.lagalt.server.Entity.Project;
import no.lagalt.server.Utils.Enum.Gender;

import java.time.LocalDate;
import java.util.List;

@Data
public class UserDto {

    private Integer userId;

    private String avatarUrl;

    private String userName;

    private String firstName;

    private String lastName;

    private LocalDate dob;

    private LocalDate dateOfCreation;

    private String email;

    private Gender gender;

    private String bio;

    private List<SkillId> skills;

    private List<History> histories;

    private List<Project> projects;

    private Country country;
}
