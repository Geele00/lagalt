package no.lagalt.server.Entity;

import jakarta.persistence.*;
import java.util.List;
import lombok.Getter;
import lombok.Setter;
import lombok.ToString;

@Getter
@Setter
@ToString
@Entity(name = "industry")
public class Industry {

  @Id
  @GeneratedValue(strategy = GenerationType.IDENTITY)
  @Column(nullable = false)
  private int industryId;

  @Column(nullable = false)
  private String name;

  @ManyToMany(fetch = FetchType.LAZY)
  private List<Project> projects;
}
