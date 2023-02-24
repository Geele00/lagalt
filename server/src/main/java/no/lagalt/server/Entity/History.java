package no.lagalt.server.Entity;

import jakarta.persistence.*;
import java.util.List;
import lombok.Getter;
import lombok.Setter;
import lombok.ToString;

@Getter
@Setter
@ToString
@Entity(name = "history")
public class History {
  @Id
  @GeneratedValue(strategy = GenerationType.IDENTITY)
  @Column(nullable = false)
  private int historyId;

  @OneToMany
  @Column(name = "seenProject")
  private List<Project> seenProject;

  @OneToMany
  @Column(name = "clickedProject")
  private List<Project> clickedProject;

  @OneToOne private LagaltUser lagaltUser;
}
