package no.lagalt.server.Dtos.Chat;

import jakarta.persistence.Embeddable;
import java.io.Serializable;

@Embeddable
// @Data
public class ChatId implements Serializable {
  // private List<String> usernames;
  private String username;
  private String usernamee;

  // public ChatId() {}
  //
  // public ChatId(String username1, String username2) {
  //  this.usernames = List.of(username1, username2);
  // }
}
