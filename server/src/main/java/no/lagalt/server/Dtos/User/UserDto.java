package no.lagalt.server.Dtos.User;

import java.time.LocalDate;
import lombok.Data;

@Data
public class UserDto {

  private Integer userId;

  private String username;

  private String avatarUrl;

  private String profileStatus;

  private LocalDate dob;
}
