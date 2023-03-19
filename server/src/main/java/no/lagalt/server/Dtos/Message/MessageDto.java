package no.lagalt.server.Dtos.Message;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import no.lagalt.server.Dtos.User.UserDto;

@Data
@NoArgsConstructor
@AllArgsConstructor
public class MessageDto {

  private Integer messageId;

  private String content;

  private Integer parentId;

  private UserDto author;

  private UserDto recipient;
}
