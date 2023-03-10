package no.lagalt.server.Mapper;

import java.util.List;
import no.lagalt.server.Dtos.Chat.ChatDto;
import no.lagalt.server.Entity.Chat;
import no.lagalt.server.Entity.LagaltUser;
import no.lagalt.server.Entity.Message;
import org.mapstruct.Mapper;

@Mapper(
    componentModel = "spring",
    uses = {Message.class, LagaltUser.class})
public interface ChatMapper {

  ChatDto toDto(Chat chat);

  List<ChatDto> toDto(List<Chat> message);
}
