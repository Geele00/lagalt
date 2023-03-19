package no.lagalt.server.Dtos.Project;

import java.time.LocalDateTime;
import lombok.Data;
import no.lagalt.server.Interfaces.Searchable;

@Data
public class ProjectPreviewDto implements Searchable {

  private Integer projectId;

  private String title;

  private String description;

  private String imageUrl;

  private LocalDateTime createdAt;

  private LocalDateTime updatedAt;
}
