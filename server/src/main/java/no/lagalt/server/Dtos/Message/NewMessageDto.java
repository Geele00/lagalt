package no.lagalt.server.Dtos.Message;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import lombok.ToString;

@Data
@NoArgsConstructor
@AllArgsConstructor
@ToString
public class NewMessageDto {

  private String content;

  private String recipientUsername;

  private Integer parentId;
}
