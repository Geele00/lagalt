package no.lagalt.server.Dtos.Channel;

import java.time.LocalDateTime;
import java.util.List;
import lombok.Data;
import no.lagalt.server.Dtos.Message.MessageDto;

@Data
public class ChannelDto {

  private Integer channelId;

  private String name;

  private LocalDateTime creationDate;

  private List<MessageDto> messages;
}
