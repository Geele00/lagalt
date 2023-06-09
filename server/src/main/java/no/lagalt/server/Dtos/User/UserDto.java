package no.lagalt.server.Dtos.User;

import lombok.Data;

@Data
public class UserDto {

  private Integer userId;

  private String username;

  private String avatarUrl;

  private String profileStatus;

  private String firstName;

  private String lastName;

  private Integer age;
}
