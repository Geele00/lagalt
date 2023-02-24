package no.lagalt.server.Dtos.Skill;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@AllArgsConstructor
@NoArgsConstructor
public class NewSkill {
  private String name;

  private String addedBy;

  // private List<Industry> industries;
}
