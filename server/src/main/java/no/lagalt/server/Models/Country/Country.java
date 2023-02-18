package no.lagalt.server.Models.Country;

import jakarta.persistence.*;
import lombok.Getter;
import lombok.Setter;
import lombok.ToString;
import no.lagalt.server.Models.City.City;

@Entity
@Getter
@Setter
@ToString
@Table(name = "Country")
public class Country {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "CountryId", nullable = false)
    private int id;

    @Column(name = "countryName", nullable = false)
    private String countryName;

    @OneToOne
    private City city;
}
