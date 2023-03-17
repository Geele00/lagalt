package no.lagalt.server.Entity;

import jakarta.persistence.*;
import java.time.LocalDateTime;
import java.util.List;
import lombok.Getter;
import lombok.Setter;
import org.springframework.format.annotation.DateTimeFormat;
import org.springframework.format.annotation.DateTimeFormat.ISO;

@Getter
@Setter
@Entity(name = "project")
public class Project {

  @Id
  @GeneratedValue(strategy = GenerationType.IDENTITY)
  @Column(nullable = false)
  private Integer projectId;

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

  private String imageUrl;

  @Column(nullable = false)
  @DateTimeFormat(iso = ISO.DATE_TIME)
  private LocalDateTime createdAt;

  private LocalDateTime updatedAt;

  @ManyToOne(
      fetch = FetchType.LAZY,
      cascade = {CascadeType.MERGE, CascadeType.DETACH, CascadeType.PERSIST, CascadeType.REFRESH})
  @JoinTable(
      name = "owners_projects",
      joinColumns = {@JoinColumn(name = "project_id")},
      inverseJoinColumns = {@JoinColumn(name = "user_id")})
  private LagaltUser owner;

  @ManyToMany(
      fetch = FetchType.LAZY,
      cascade = {CascadeType.MERGE, CascadeType.DETACH, CascadeType.PERSIST, CascadeType.REFRESH})
  @JoinTable(
      name = "admins_projects",
      joinColumns = {@JoinColumn(name = "project_id")},
      inverseJoinColumns = {@JoinColumn(name = "user_id")})
  private List<LagaltUser> admins;

  @ManyToMany(
      fetch = FetchType.LAZY,
      cascade = {CascadeType.MERGE, CascadeType.DETACH, CascadeType.PERSIST, CascadeType.REFRESH})
  @JoinTable(
      name = "collaborators_projects",
      joinColumns = {@JoinColumn(name = "project_id")},
      inverseJoinColumns = {@JoinColumn(name = "user_id")})
  private List<LagaltUser> collaborators;
}
