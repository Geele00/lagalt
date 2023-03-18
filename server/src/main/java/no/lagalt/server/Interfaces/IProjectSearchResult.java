package no.lagalt.server.Interfaces;

import java.time.LocalDateTime;
import java.util.List;
import no.lagalt.server.Entity.Industry;
import no.lagalt.server.Entity.ProjectHistory;
import no.lagalt.server.Entity.Skill;

public interface IProjectSearchResult {
  String getTitle();

  String getDescription();

  String getImageUrl();

  LocalDateTime getUpdatedAt();

  List<Skill> getWantedSkills();

  List<Industry> getIndustries();

  ProjectHistory getHistory();
}
