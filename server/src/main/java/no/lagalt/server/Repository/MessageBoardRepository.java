package no.lagalt.server.Repository;

import no.lagalt.server.Entity.MessageBoard;
import org.springframework.data.jpa.repository.JpaRepository;

public interface MessageBoardRepository extends JpaRepository<MessageBoard, Integer> {
}
