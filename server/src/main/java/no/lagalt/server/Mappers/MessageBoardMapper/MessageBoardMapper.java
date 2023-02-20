package no.lagalt.server.Mappers.MessageBoardMapper;

import no.lagalt.server.Dtos.MessageBoardDto.MessageBoardDto;
import no.lagalt.server.Entity.MessageBoard;
import org.mapstruct.Mapper;
import org.mapstruct.Mapping;
import org.mapstruct.MappingTarget;

import java.util.List;

@Mapper(componentModel = "spring")
public interface MessageBoardMapper {

    @Mapping(target = "projectId", source = "project.id")
    MessageBoardDto toDto(MessageBoard messageBoard);

    List<MessageBoardDto> toDtoList(List<MessageBoard> messageBoards);
/*
    @Mapping(target = "project", source = "projectId")
    MessageBoard toEntity(MessageBoardDto messageBoardDto);*/

    @Mapping(target = "project", ignore = true)
    MessageBoard updateFromDto(MessageBoardDto messageBoardDto, @MappingTarget MessageBoard messageBoard);




    }

