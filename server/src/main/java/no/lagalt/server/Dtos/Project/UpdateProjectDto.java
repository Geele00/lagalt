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

  private List<Integer> industryIds;

  private String imageUrl;

  private LocalDateTime updatedDateTime = LocalDateTime.now();
}
