package no.lagalt.server.Repository;

import no.lagalt.server.Models.Channel.Channel;
import org.springframework.data.jpa.repository.JpaRepository;

public interface ChannelRepository extends JpaRepository<Channel,Integer> {
}
