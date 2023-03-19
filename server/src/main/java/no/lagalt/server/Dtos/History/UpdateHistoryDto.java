package no.lagalt.server.Dtos.History;

import java.util.List;
import lombok.Data;

@Data
public class UpdateHistoryDto {

  List<Integer> newlySeenProjects;

  // private LagaltUser lagaltUser;
  //
  // private List<Project> seenProjects;
  //
  // private List<Project> clickedProjects;
}
