package no.lagalt.server.Dtos.Project;

import java.time.LocalDateTime;
import lombok.Data;
import no.lagalt.server.Dtos.User.UserDto;

@Data
public class UpdateProjectDto {

  private Integer projectId;

  private UserDto owner;

  private String title;

  private String description;

  private LocalDateTime updatedDateTime;

  // private List<IndustryDto> industries;
}
