package no.lagalt.server.Entity;

import jakarta.persistence.*;
import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
@Entity(name = "City")
public class City {

  @Id
  @GeneratedValue(strategy = GenerationType.IDENTITY)
  @Column(nullable = false)
  private int cityId;

  @Column(nullable = false)
  private String name;

  @JoinColumn(name = "cities")
  @ManyToOne
  private Country country;
}
