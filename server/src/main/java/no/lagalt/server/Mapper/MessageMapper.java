package no.lagalt.server.Mapper;

import java.util.List;
import no.lagalt.server.Dtos.Message.MessageDto;
import no.lagalt.server.Dtos.Message.NewMessageDto;
import no.lagalt.server.Entity.Message;
import org.mapstruct.Mapper;
import org.mapstruct.Mapping;

@Mapper(
    componentModel = "spring",
    uses = {UserMapper.class})
public interface MessageMapper {

  @Mapping(target = "channelId", source = "channel.channelId")
  @Mapping(target = "parentId", source = "parentMessage.messageId")
  MessageDto toDto(Message message);

  @Mapping(target = "createdAt", ignore = true)
  @Mapping(target = "recipient", ignore = true)
  @Mapping(target = "author", ignore = true)
  @Mapping(target = "channel", ignore = true)
  @Mapping(target = "replies", ignore = true)
  @Mapping(target = "messageId", ignore = true)
  @Mapping(target = "parentMessage", ignore = true)
  Message toMessage(NewMessageDto newMessageDto);

  List<MessageDto> toDto(List<Message> message);
}
