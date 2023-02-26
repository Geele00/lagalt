package no.lagalt.server.Dtos.User;

import java.time.LocalDate;
import lombok.Data;

@Data
public class UpdateUserDto {

  private Integer userId;

  private String avatarUrl;

  private String userName;

  private String firstName;

  private String lastName;

  private LocalDate dob;

  private LocalDate creationDate;

  private String email;

  private String bio;
}
