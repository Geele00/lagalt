package no.lagalt.server.Mapper;

import java.util.List;
import no.lagalt.server.Dtos.Message.MessageDto;
import no.lagalt.server.Entity.Message;
import org.mapstruct.Mapper;
import org.mapstruct.Mapping;

@Mapper(componentModel = "spring")
public abstract class MessageMapper {

  // @Autowired private MessageServiceImpl messageService;

  public abstract List<MessageDto> toDto(List<Message> message);

  @Mapping(target = "channelId", source = "channel.channelId")
  public abstract MessageDto toDto(Message message);
}
