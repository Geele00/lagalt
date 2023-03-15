package no.lagalt.server.Dtos.Project;

import java.time.LocalDateTime;
import java.util.List;
import lombok.Data;

@Data
public class NewProjectDto {

  private String title;

  private String description;

  private List<Integer> wantedSkillsIds;

  private List<Integer> industryIds;

  private String imageUrl;

  private LocalDateTime createdAt = LocalDateTime.now();
}
