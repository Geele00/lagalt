package no.lagalt.server.Mappers;

import java.util.ArrayList;
import java.util.List;
import no.lagalt.server.Dtos.IdList;
import no.lagalt.server.Entity.Skill;
import no.lagalt.server.Service.SkillService;
import org.mapstruct.Mapper;
import org.springframework.beans.factory.annotation.Autowired;

@Mapper(componentModel = "spring")
public abstract class SkillMapper {

  @Autowired protected SkillService skillService;

  public IdList skillListToIdList(List<Skill> skillList) {
    var list = new ArrayList<Integer>();

    skillList.forEach(
        skill -> {
          list.add(skill.getSkillId());
        });

    return new IdList(list);
  }
}
