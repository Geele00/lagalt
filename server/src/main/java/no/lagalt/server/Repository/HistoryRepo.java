package no.lagalt.server.Repository;

import java.util.Optional;
import no.lagalt.server.Entity.History;
import no.lagalt.server.Entity.LagaltUser;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface HistoryRepo extends JpaRepository<History, Integer> {

  Optional<History> findByLagaltUser(LagaltUser user);

  boolean existsByLagaltUser(LagaltUser user);
}
