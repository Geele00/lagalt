package no.lagalt.server.Dtos.Project;

import java.util.List;
import lombok.Data;
import no.lagalt.server.Dtos.Skill.SkillDto;
import no.lagalt.server.Dtos.User.UserDto;
import org.springframework.data.annotation.Transient;

@Data
public class NewProjectDto {

  @Transient private Integer ownerId;

  private UserDto owner;

  private String title;

  private String description;

  private List<SkillDto> wantedSkills;

  // private List<IndustryDto> industries;
}
