package no.lagalt.server.Models.Industry;

import jakarta.persistence.*;
import lombok.Getter;
import lombok.Setter;
import lombok.ToString;
import no.lagalt.server.Models.Project.Project;

@Entity
@Getter
@Setter
@ToString
@Table(name = "industry")
public class Industry {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int id;

    @Column(name = "name")
    private String name;

    @ManyToOne
    private Project projects;
}
