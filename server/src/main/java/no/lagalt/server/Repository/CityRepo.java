package no.lagalt.server.Repository;

import java.util.Optional;
import no.lagalt.server.Entity.City;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface CityRepo extends JpaRepository<City, Integer> {
  Optional<City> findByName(String name);
}
