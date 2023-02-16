package no.lagalt.server.Models.City;

import jakarta.persistence.*;
import lombok.Getter;
import lombok.Setter;
import lombok.ToString;

@Entity
@Getter
@Setter
@ToString
@Table(name = "City")
public class City {

  @Id
  @GeneratedValue(strategy = GenerationType.IDENTITY)
  @Column(name = "cityId", nullable = false)
  private int countryId;

  @Column(name = "cityName", nullable = false)
  private String cityName;
}
