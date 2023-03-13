package no.lagalt.server.Dtos.History;

import java.util.Set;
import lombok.Data;
import no.lagalt.server.Dtos.Project.ProjectDto;
import no.lagalt.server.Entity.LagaltUser;

@Data
public class UpdateHistoryDto {

  private LagaltUser lagaltUser;

  private Set<ProjectDto> seenProjects;

  private Set<ProjectDto> clickedProjects;
}
