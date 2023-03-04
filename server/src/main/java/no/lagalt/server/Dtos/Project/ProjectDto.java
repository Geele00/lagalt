package no.lagalt.server.Dtos.Project;

import java.time.LocalDateTime;
import lombok.Data;
import no.lagalt.server.Dtos.User.UserDto;
import no.lagalt.server.Entity.MessageBoard;

@Data
public class ProjectDto {

  private Integer projectId;

  private String title;

  private String description;

  private LocalDateTime createdAt;

  private LocalDateTime updatedAt;

  // private List<Integer> notifications;
  //
  // private List<Integer> industries;

  private UserDto owner;

  private MessageBoard messageBoard;
}
