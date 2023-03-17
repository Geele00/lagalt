package no.lagalt.server.Dtos.Project;

import java.time.LocalDateTime;
import java.util.List;
import lombok.Data;

@Data
public class UpdateProjectDto {

  private Integer projectId;

  private Integer ownerId;

  private String title;

  private String description;

  private String imageUrl;

  private List<Integer> industryIds;

  private List<Integer> wantedSkillsIds;

  private LocalDateTime updatedDateTime = LocalDateTime.now();
}
