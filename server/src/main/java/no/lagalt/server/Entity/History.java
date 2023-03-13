package no.lagalt.server.Entity;

import jakarta.persistence.*;
import java.util.Set;
import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
@Entity(name = "history")
public class History {

  @Id
  @GeneratedValue(strategy = GenerationType.IDENTITY)
  @Column(nullable = false)
  private int historyId;

  @OneToMany(fetch = FetchType.LAZY)
  private Set<Project> seenProjects;

  @OneToMany(fetch = FetchType.LAZY)
  private Set<Project> clickedProjects;

  @OneToOne(
      cascade = {CascadeType.MERGE, CascadeType.DETACH, CascadeType.PERSIST, CascadeType.REFRESH},
      fetch = FetchType.LAZY)
  private LagaltUser lagaltUser;
}
