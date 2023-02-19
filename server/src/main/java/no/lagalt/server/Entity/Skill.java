package no.lagalt.server.Entity;

import jakarta.persistence.*;
import lombok.Getter;
import lombok.Setter;
import lombok.ToString;
import no.lagalt.server.Utils.Enum.AddedBy;

import java.util.List;

@Getter
@Setter
@ToString
@Entity(name = "skill")
public class Skill {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(nullable = false)
    private Integer skillId;

    @Column(name = "name")
    private String name;

    @Column(name = "addedBy")
    private AddedBy addedBy;

    @ManyToMany(
            fetch = FetchType.LAZY)
    private List<LagaltUser> users;
}
