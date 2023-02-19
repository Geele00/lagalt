package no.lagalt.server.Repository;

import no.lagalt.server.Models.Message.Message;
import org.springframework.data.jpa.repository.JpaRepository;

public interface MessageRepository extends JpaRepository<Message,Integer> {
}
