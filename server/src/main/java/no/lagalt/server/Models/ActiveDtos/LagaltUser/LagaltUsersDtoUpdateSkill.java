package no.lagalt.server.Models.ActiveDtos.LagaltUser;


import lombok.Data;
import no.lagalt.server.Models.Skill.Skill;

import java.util.List;

@Data
public class LagaltUsersDtoUpdateSkill {
        private List<Skill> skills;
}
