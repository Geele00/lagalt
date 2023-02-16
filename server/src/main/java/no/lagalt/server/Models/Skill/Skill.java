package no.lagalt.server.Models.Skill;

import jakarta.persistence.*;
import java.util.List;
import no.lagalt.server.Models.Industry.Industry;
import no.lagalt.server.Models.LagaltUser.LagaltUser;
import no.lagalt.server.Utils.Enum.AddedBy;

@Entity
@Table(name = "skill")
public class Skill {
  @Id
  @GeneratedValue(strategy = GenerationType.IDENTITY)
  private int skillId;

  @Column(name = "name")
  private String name;

  @Column(name = "addedBy")
  private AddedBy addedBy;

  @ManyToMany()
  @JoinTable(
      name = "skill_industry_Relationship",
      joinColumns = {@JoinColumn(name = "skill_id")},
      inverseJoinColumns = {@JoinColumn(name = "industry_id")})
  private List<Industry> industries;

  @ManyToOne()
  @JoinColumn(name = "user_Skills")
  private LagaltUser users;
}
