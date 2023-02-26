package no.lagalt.server.Mapper;

import org.mapstruct.Mapper;

@Mapper(componentModel = "spring")
public interface MessageBoardMapper {
  //
  // MessageBoardDto toDto(MessageBoard messageBoard);
  //
  // List<MessageBoardDto> toDtoList(List<MessageBoard> messageBoards);
  // /*
  // @Mapping(target = "project", source = "projectId")
  // MessageBoard toEntity(MessageBoardDto messageBoardDto);*/
  //
  // @Mapping(target = "project", ignore = true)
  // MessageBoard updateFromDto(
  //     MessageBoardDto messageBoardDto, @MappingTarget MessageBoard messageBoard);
}
