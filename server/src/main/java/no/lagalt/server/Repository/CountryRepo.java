package no.lagalt.server.Repository;

import java.util.Optional;
import no.lagalt.server.Entity.Country;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface CountryRepo extends JpaRepository<Country, Integer> {
  Optional<Country> findByName(String name);
}
