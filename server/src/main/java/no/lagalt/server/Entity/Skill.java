package no.lagalt.server.Entity;

import com.fasterxml.jackson.annotation.JsonIgnore;
import jakarta.persistence.*;
import java.util.List;
import lombok.Getter;
import lombok.Setter;
import lombok.ToString;
import no.lagalt.server.Utils.Enum.AddedBy;

@Getter
@Setter
@ToString
@Entity(name = "skill")
public class Skill {

  @Id
  @GeneratedValue(strategy = GenerationType.IDENTITY)
  @Column(nullable = false)
  private Integer skillId;

  @Column(name = "name")
  private String name;

  @Column(name = "addedBy")
  private AddedBy addedBy;

  @ManyToMany(
      fetch = FetchType.LAZY,
      cascade = {CascadeType.PERSIST, CascadeType.MERGE},
      mappedBy = "skills")
  @JsonIgnore
  private List<LagaltUser> users;
}
