package no.lagalt.server.Entity;

import jakarta.persistence.*;
import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
@Entity(name = "project_history")
public class ProjectHistory {

  @Id
  @GeneratedValue(strategy = GenerationType.IDENTITY)
  @Column(nullable = false)
  private int projectHistoryId;

  private Integer projectClicks;

  private Integer seenButNotClicked;

  @OneToOne(
      cascade = {CascadeType.MERGE, CascadeType.DETACH, CascadeType.PERSIST, CascadeType.REFRESH},
      fetch = FetchType.LAZY)
  private Project project;
}
