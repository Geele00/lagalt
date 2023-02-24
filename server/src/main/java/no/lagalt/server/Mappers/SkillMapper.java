package no.lagalt.server.Mappers;

import java.util.List;
import no.lagalt.server.Dtos.Skill.SkillDto;
import no.lagalt.server.Dtos.Skill.SkillId;
import no.lagalt.server.Entity.Skill;
import no.lagalt.server.Service.SkillService;
import org.mapstruct.Mapper;
import org.springframework.beans.factory.annotation.Autowired;

@Mapper(componentModel = "spring")
public abstract class SkillMapper {

  @Autowired protected SkillService skillService;

  public abstract SkillDto toDto(Skill skill);

  public Skill toSkill(Integer skillId) {
    return skillService.findById(skillId);
  }

  public abstract List<Skill> idsToSkills(List<Integer> skillIds);

  public abstract List<SkillDto> toDto(List<Skill> skill);

  // public abstract Skill toSkill(SkillDto skillDto);

  public abstract List<Skill> toSkill(List<SkillDto> skillDtoList);

  public abstract List<SkillId> skillToSkillDtoID(List<Skill> skill);
}
