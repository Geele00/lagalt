package no.lagalt.server.Dtos.User;

import java.time.LocalDate;
import java.util.List;
import lombok.Data;
import no.lagalt.server.Dtos.Skill.SkillId;
import no.lagalt.server.Entity.*;
import no.lagalt.server.Utils.Enum.Gender;

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
