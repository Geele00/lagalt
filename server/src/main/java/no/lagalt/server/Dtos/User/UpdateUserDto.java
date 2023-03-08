package no.lagalt.server.Dtos.User;

import java.time.LocalDate;
import lombok.Data;

@Data
public class UpdateUserDto {

  private Integer userId;

  private String userName;

  private String firstName;

  private String lastName;

  private String avatarUrl;

  private LocalDate dob;

  private LocalDate createdAt;

  private String email;

  private String bio;
}
