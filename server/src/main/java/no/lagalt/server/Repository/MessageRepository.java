package no.lagalt.server.Repository;

import no.lagalt.server.Entity.Message;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface MessageRepository extends JpaRepository<Message,Integer> {
    List<Message> findAllByChannelId(int id);
}
