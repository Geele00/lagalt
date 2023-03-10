package no.lagalt.server.Repository;

import java.util.List;
import java.util.Optional;
import no.lagalt.server.Entity.Chat;
import no.lagalt.server.Entity.LagaltUser;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface ChatRepository extends JpaRepository<Chat, Integer> {

  Optional<Chat> findByUsersIn(List<LagaltUser> users);

  boolean existsByUsersIn(List<LagaltUser> users);
}
