package no.lagalt.server.Dtos.User;

import lombok.Data;

@Data
public class UserPrivateDto {

  private String username;

  private String avatarUrl;

  private String profileStatus;
}
