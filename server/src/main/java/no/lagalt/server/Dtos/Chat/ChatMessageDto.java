package no.lagalt.server.Dtos.Chat;

import java.time.LocalDateTime;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@NoArgsConstructor
@AllArgsConstructor
public class ChatMessageDto {

  private Integer messageId;

  private String content;

  private String authorUsername;

  private String recipientUsername;

  private LocalDateTime createdAt;
}
