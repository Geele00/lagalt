package no.lagalt.server.Dtos.MessageBoardDto;

import java.time.LocalDateTime;
import lombok.Data;

@Data
public class MessageBoardDto {

  private Integer messageBoardId;

  private String name;

  private Integer project;

  private LocalDateTime createdAt;
}
