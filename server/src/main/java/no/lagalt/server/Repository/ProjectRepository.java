package no.lagalt.server.Repository;

import java.time.LocalDateTime;
import java.util.List;
import java.util.Optional;
import no.lagalt.server.Entity.Project;
import no.lagalt.server.Interfaces.IProjectSearchResult;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface ProjectRepository extends JpaRepository<Project, Integer> {

  Optional<Project> findByTitle(String title);

  List<IProjectSearchResult> findAllByTitleContainsIgnoreCaseAndCreatedAtAfterOrderByTitle(
      String query, LocalDateTime afterDate);
}
