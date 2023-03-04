package no.lagalt.server.Repository;

import java.util.Optional;
import no.lagalt.server.Entity.Project;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface ProjectRepository extends JpaRepository<Project, Integer> {

  Optional<Project> findByTitle(String title);
}
