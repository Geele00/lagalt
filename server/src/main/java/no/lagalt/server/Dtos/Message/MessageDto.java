package no.lagalt.server.Dtos.Message;

import java.time.LocalDateTime;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import lombok.ToString;
import no.lagalt.server.Dtos.User.UserDto;

@Data
@NoArgsConstructor
@AllArgsConstructor
@ToString
public class MessageDto {

  private Integer messageId;

  private String content;

  private Integer parentId;

  private UserDto author;

  private UserDto recipient;

  private LocalDateTime createdAt;

  private Integer channelId;
}
