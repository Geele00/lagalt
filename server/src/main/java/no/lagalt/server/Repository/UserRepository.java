package no.lagalt.server.Repository;

import java.util.Optional;
import no.lagalt.server.Entity.LagaltUser;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface UserRepository extends JpaRepository<LagaltUser, Integer> {
  Optional<LagaltUser> findByUsername(String userName);

  Optional<LagaltUser> findByUid(String uid);

  boolean existsByUsername(String userName);
}
