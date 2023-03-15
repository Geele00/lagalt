package no.lagalt.server.Entity;

import jakarta.persistence.*;
import java.util.List;
import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
@Entity(name = "country")
public class Country {

  @Id
  @GeneratedValue(strategy = GenerationType.IDENTITY)
  @Column(nullable = false)
  private int countryId;

  @Column(nullable = false)
  private String name;


  @Column(nullable = false)
  private int phonecode;

  @Column(nullable = false)
  private String currency;

  @Column(nullable = false)
  private String alpha;

  @OneToMany(mappedBy = "country")
  private List<City> cities;
}
