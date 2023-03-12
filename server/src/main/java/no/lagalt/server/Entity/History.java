package no.lagalt.server.Entity;

import jakarta.persistence.*;
import java.util.List;
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

  @OneToMany private List<Project> seenProjects;

  @OneToMany private List<Project> clickedProjects;

  @OneToOne(cascade = CascadeType.ALL, fetch = FetchType.LAZY)
  @JoinTable(
      name = "users_histories",
      joinColumns = {@JoinColumn(name = "history_id")},
      inverseJoinColumns = {@JoinColumn(name = "user_id")})
  private LagaltUser lagaltUser;
}
