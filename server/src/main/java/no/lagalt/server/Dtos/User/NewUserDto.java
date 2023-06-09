package no.lagalt.server.Dtos.User;

import java.time.LocalDate;
import java.time.LocalDateTime;
import java.util.List;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import no.lagalt.server.Dtos.Skill.SkillDto;
import no.lagalt.server.Enum.Gender;
import no.lagalt.server.Enum.ProfileStatus;

@AllArgsConstructor
@NoArgsConstructor
@Data
public class NewUserDto {

  private String uid;

  private String username;

  private String firstName;

  private String lastName;

  private LocalDate dob;

  private String email;

  private Gender gender;

  private String bio;

  private List<SkillDto> skills;

  private ProfileStatus profileStatus;

  private LocalDateTime createdAt = LocalDateTime.now();

  private String country;

  private String city;
}
