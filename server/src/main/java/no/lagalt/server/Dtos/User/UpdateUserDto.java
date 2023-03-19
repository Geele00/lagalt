package no.lagalt.server.Dtos.User;

import java.time.LocalDate;
import java.util.List;
import lombok.Data;

@Data
public class UpdateUserDto {

  private Integer userId;

  private String username;

  private String firstName;

  private String lastName;

  private String avatarUrl;

  private LocalDate dob;

  private LocalDate createdAt;

  private String email;

  private String bio;

  private String country;

  private String city;

  private List<Integer> skills;
}
