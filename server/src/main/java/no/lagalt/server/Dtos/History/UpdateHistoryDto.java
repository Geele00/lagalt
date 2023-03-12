package no.lagalt.server.Dtos.History;

import java.util.List;
import lombok.Data;
import no.lagalt.server.Dtos.Project.ProjectDto;
import no.lagalt.server.Dtos.User.UserDto;

@Data
public class UpdateHistoryDto {

  private UserDto lagaltUser;

  private List<ProjectDto> seenProjects;

  private List<ProjectDto> clickedProjects;
}
