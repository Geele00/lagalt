package no.lagalt.server.Dtos.User;

import java.time.LocalDate;
import java.time.LocalDateTime;
import java.util.List;
import lombok.Data;
import no.lagalt.server.Dtos.Skill.SkillDto;
import no.lagalt.server.Entity.Country;
import no.lagalt.server.Entity.History;
import no.lagalt.server.Entity.Project;
import no.lagalt.server.Utils.Enum.Gender;

@Data
public class FullUserDto {

  private Integer userId;

  private String username;

  private String firstName;

  private String lastName;

  private LocalDate dob;

  private String avatarUrl;

  private LocalDateTime createdAt;

  private String email;

  private Gender gender;

  private String bio;

  private List<SkillDto> skills;

  private History history;

  private List<Project> projects;

  private Country country;
}
