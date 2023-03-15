package no.lagalt.server.Dtos.Project;

import java.time.LocalDateTime;
import lombok.Data;
import no.lagalt.server.Dtos.User.UserDto;
import no.lagalt.server.Entity.MessageBoard;

@Data
public class ProjectPageDto {

  private Integer projectId;

  private String title;

  private String description;

  private LocalDateTime createdAt;

  private LocalDateTime updatedAt;

  private String imageUrl;

  // private List<Integer> notifications;
  //
  // private List<Integer> industries;

  private UserDto owner;

  private MessageBoard messageBoard;

  private Integer page;
}
