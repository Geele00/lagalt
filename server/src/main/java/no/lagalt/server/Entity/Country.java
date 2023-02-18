package no.lagalt.server.Entity;

import jakarta.persistence.*;
import lombok.Getter;
import lombok.Setter;
import lombok.ToString;

@Getter
@Setter
@ToString
@Entity(name = "country")
public class Country {

  @Id
  @GeneratedValue(strategy = GenerationType.IDENTITY)
  @Column(name = "CountryId", nullable = false)
  private int id;

  @Column(name = "countryName", nullable = false)
  private String countryName;

  @OneToOne private City city;
}
