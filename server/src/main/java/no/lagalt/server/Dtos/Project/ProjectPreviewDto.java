package no.lagalt.server.Dtos.Project;

import java.time.LocalDateTime;
import lombok.Data;

@Data
public class ProjectPreviewDto {

  private Integer projectId;

  private String title;

  private String description;

  private String imageUrl;

  private LocalDateTime createdAt;

  private LocalDateTime updatedAt;
}
