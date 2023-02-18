package no.lagalt.server.Models.ActiveDtos.LagaltUser;


import lombok.Data;
import no.lagalt.server.Models.Country.Country;
import no.lagalt.server.Models.History.History;
import no.lagalt.server.Models.Project.Project;
import no.lagalt.server.Models.Skill.Skill;
import no.lagalt.server.Utils.Enum.Gender;

import java.time.LocalDate;

@Data
public class LagaltUserDtoAdd {

    private String avatarUrl;

    private String userName;

    private String firstName;

    private String lastName;

    private LocalDate dob;

    private LocalDate dateOfCreation;

    private String email;

    private Gender gender;

    private String bio;
}
