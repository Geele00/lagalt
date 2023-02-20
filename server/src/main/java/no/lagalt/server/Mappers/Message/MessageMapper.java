package no.lagalt.server.Mappers.Message;

import no.lagalt.server.Dtos.Message.MessageDto;
import no.lagalt.server.Entity.Message;
import org.mapstruct.Mapper;
import org.mapstruct.factory.Mappers;

import java.util.List;
import java.util.Optional;

@Mapper(componentModel = "spring")
public interface MessageMapper {

    MessageMapper INSTANCE = Mappers.getMapper(MessageMapper.class);

    List<MessageDto> toDto(List<Message> message);

    Message toEntity(MessageDto messageDto);

}

