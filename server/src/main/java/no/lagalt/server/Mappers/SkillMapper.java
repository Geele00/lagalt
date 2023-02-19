package no.lagalt.server.Mappers;

import no.lagalt.server.Dtos.Skill.SkillId;
import no.lagalt.server.Entity.Skill;
import no.lagalt.server.Service.SkillService;
import org.mapstruct.Mapper;
import org.springframework.beans.factory.annotation.Autowired;

import java.util.List;

@Mapper(componentModel = "spring")
public abstract class SkillMapper {

    @Autowired
    protected SkillService skillService;


    public abstract List<SkillId> skillToSkillDtoID(List<Skill> skill);

    public abstract List<Skill> skillDtoIDToSkill(List<SkillId> skillId);
}
