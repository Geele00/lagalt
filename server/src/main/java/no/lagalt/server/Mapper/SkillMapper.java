package no.lagalt.server.Mapper;

import java.util.List;
import no.lagalt.server.Dtos.Skill.SkillDto;
import no.lagalt.server.Entity.Skill;
import no.lagalt.server.Interfaces.ISkillSearchResult;
import org.mapstruct.Mapper;
import org.mapstruct.Mapping;

@Mapper(componentModel = "spring")
public interface SkillMapper {

  @Mapping(target = "users", ignore = true)
  Skill toSkill(SkillDto skillDto);

  List<Skill> toSkill(List<SkillDto> skillDtoList);

  SkillDto toDto(Skill skill);

  List<SkillDto> toDto(List<Skill> skill);

  List<SkillDto> searchResultToDto(List<ISkillSearchResult> searchResult);
}
