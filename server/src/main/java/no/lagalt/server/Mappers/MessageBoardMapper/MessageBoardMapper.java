package no.lagalt.server.Mappers.MessageBoardMapper;

import no.lagalt.server.Models.ActiveDtos.MessageBoardDto.MessageBoardDto;
import no.lagalt.server.Models.MessageBoard.MessageBoard;
import no.lagalt.server.Models.Project.Project;
import org.mapstruct.Mapper;
import org.mapstruct.Mapping;
import org.mapstruct.MappingTarget;
import org.mapstruct.Named;

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

