package no.lagalt.server.Dtos.User;

import java.time.LocalDate;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import no.lagalt.server.Utils.Enum.Gender;

@AllArgsConstructor
@NoArgsConstructor
@Data
public class NewUserDto {

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
