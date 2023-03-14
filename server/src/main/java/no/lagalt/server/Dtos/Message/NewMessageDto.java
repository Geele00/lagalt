package no.lagalt.server.Dtos.Message;

import java.time.LocalDateTime;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@NoArgsConstructor
@AllArgsConstructor
public class NewMessageDto {

  private String content;

  private String recipientUsername;

  private Integer parentId;

  private LocalDateTime createdAt = LocalDateTime.now();
}
