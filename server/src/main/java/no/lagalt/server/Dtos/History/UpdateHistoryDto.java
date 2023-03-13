package no.lagalt.server.Dtos.History;

import java.util.List;
import lombok.Data;
import no.lagalt.server.Entity.LagaltUser;
import no.lagalt.server.Entity.Project;

@Data
public class UpdateHistoryDto {

  private LagaltUser lagaltUser;

  private List<Project> seenProjects;

  private List<Project> clickedProjects;
}
