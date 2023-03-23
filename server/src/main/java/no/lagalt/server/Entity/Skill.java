package no.lagalt.server.Entity;

import jakarta.persistence.*;
import java.util.List;
import lombok.Getter;
import lombok.Setter;
import no.lagalt.server.Enum.AddedBy;

@Getter
@Setter
@Entity(name = "skill")
public class Skill {

  @Id
  @GeneratedValue(strategy = GenerationType.IDENTITY)
  @Column(nullable = false)
  private Integer skillId;

  @Column(nullable = false)
  private String name;

  @Column(nullable = false)
  private AddedBy addedBy;

  private String imageUrl;

  @Transient
  @ManyToMany(fetch = FetchType.LAZY)
  private List<LagaltUser> users;
}
