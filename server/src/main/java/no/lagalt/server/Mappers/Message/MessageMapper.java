package no.lagalt.server.Mappers.Message;

import no.lagalt.server.Dtos.Message.MessageDto;
import no.lagalt.server.Entity.Message;
import org.mapstruct.Mapper;
import org.mapstruct.factory.Mappers;

@Mapper(componentModel = "spring")
public interface MessageMapper {

    MessageMapper INSTANCE = Mappers.getMapper(MessageMapper.class);

    MessageDto toDto(Message message);

    Message toEntity(MessageDto messageDto);

}

