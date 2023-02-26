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

  @OneToMany private List<Project> seenProjects;

  @OneToMany private List<Project> clickedProjects;

  @OneToOne private LagaltUser lagaltUser;
}
