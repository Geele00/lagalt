package no.lagalt.server.Repository;

import java.util.List;
import no.lagalt.server.Entity.Skill;
import no.lagalt.server.Enum.AddedBy;
import no.lagalt.server.Interfaces.ISkillSearchResult;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface SkillRepository extends JpaRepository<Skill, Integer> {
  List<ISkillSearchResult> findAllByAddedBy(AddedBy addedBy);
}
