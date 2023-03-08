package no.lagalt.server.Entity;

import jakarta.persistence.*;
import java.time.LocalDateTime;
import java.util.List;
import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
@Entity(name = "project")
public class Project {

  @Id
  @GeneratedValue(strategy = GenerationType.IDENTITY)
  @Column(nullable = false)
  private Integer projectId;

  @ManyToOne(
      fetch = FetchType.LAZY
      // cascade = {CascadeType.MERGE, CascadeType.DETACH, CascadeType.PERSIST, CascadeType.REFRESH}
      )
  @JoinColumn(name = "owner", nullable = false)
  private LagaltUser owner;

  @Column(nullable = false)
  private String title;

  @Column(nullable = false)
  private String description;

  // @ManyToMany
  // private List<Notification> notifications;

  @ManyToMany(fetch = FetchType.LAZY)
  @JoinTable(
      name = "projects_industries",
      joinColumns = {@JoinColumn(name = "project_id")},
      inverseJoinColumns = {@JoinColumn(name = "industry_id")})
  private List<Industry> industries;

  @OneToMany(fetch = FetchType.LAZY)
  private List<Skill> wantedSkills;

  @OneToOne(
      mappedBy = "project",
      cascade = CascadeType.ALL,
      orphanRemoval = true,
      fetch = FetchType.LAZY)
  private MessageBoard messageBoard;

  @Column(nullable = false)
  private LocalDateTime createdAt;

  private LocalDateTime updatedAt;
}
