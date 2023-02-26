package no.lagalt.server.Dtos.Project;

import java.util.List;
import lombok.Data;
import no.lagalt.server.Entity.Skill;

@Data
public class NewProjectDto {

  private String title;

  private String description;

  private List<Skill> wantedSkills;

  // private List<IndustryDto> industries;
}
