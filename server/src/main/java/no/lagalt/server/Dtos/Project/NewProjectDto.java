package no.lagalt.server.Dtos.Project;

import java.time.LocalDateTime;
import java.util.List;
import lombok.Data;
import no.lagalt.server.Dtos.Skill.SkillDto;
import no.lagalt.server.Dtos.User.UserDto;

@Data
public class NewProjectDto {

  private UserDto owner;

  private String title;

  private String description;

  private List<SkillDto> wantedSkills;

  private LocalDateTime createdAt = LocalDateTime.now();

  // private List<IndustryDto> industries;
}
