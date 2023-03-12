package no.lagalt.server.Mapper;

import no.lagalt.server.Dtos.History.UpdateHistoryDto;
import no.lagalt.server.Entity.History;
import org.mapstruct.BeanMapping;
import org.mapstruct.Mapper;
import org.mapstruct.MappingTarget;
import org.mapstruct.NullValuePropertyMappingStrategy;

@Mapper(
    componentModel = "spring",
    uses = {UserMapper.class, ProjectMapper.class})
public interface HistoryMapper {

  @BeanMapping(nullValuePropertyMappingStrategy = NullValuePropertyMappingStrategy.IGNORE)
  void updateHistoryFromDto(UpdateHistoryDto updateHistoryDto, @MappingTarget History history);
}
