package no.lagalt.server.Dtos.Search;

import java.util.List;
import lombok.AllArgsConstructor;
import lombok.Data;

@Data
@AllArgsConstructor
public class ProjectSearchResult {

  Integer projectId;

  String title;

  String description;

  String imageUrl;

  List<String> wantedSkillsNames;

  List<String> industryNames;
}
