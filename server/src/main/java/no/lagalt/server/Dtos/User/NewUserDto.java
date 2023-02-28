package no.lagalt.server.Dtos.User;

import java.time.LocalDate;
import java.util.List;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import no.lagalt.server.Dtos.Skill.SkillDto;
import no.lagalt.server.Utils.Enum.Gender;
import no.lagalt.server.Utils.Enum.ProfileStatus;

@AllArgsConstructor
@NoArgsConstructor
@Data
public class NewUserDto {

  private String userName;

  private String firstName;

  private String lastName;

  private LocalDate dob;

  private String email;

  private Gender gender;

  private String bio;

  private List<SkillDto> skills;

  private ProfileStatus profileStatus;

  // private CountryDto country;
  //
  // private CityDto city;

}
