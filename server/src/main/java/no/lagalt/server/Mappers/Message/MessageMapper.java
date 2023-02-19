package no.lagalt.server.Mappers.Message;

import lombok.NoArgsConstructor;
import no.lagalt.server.Models.ActiveDtos.MessageDto.MessageDto;
import no.lagalt.server.Models.Message.Message;
import org.mapstruct.Mapper;
import org.mapstruct.Mapping;
import org.mapstruct.factory.Mappers;
import org.springframework.context.annotation.ComponentScan;

@Mapper(componentModel = "spring")
public interface MessageMapper {

    MessageMapper INSTANCE = Mappers.getMapper(MessageMapper.class);

    MessageDto toDto(Message message);

    Message toEntity(MessageDto messageDto);

}

