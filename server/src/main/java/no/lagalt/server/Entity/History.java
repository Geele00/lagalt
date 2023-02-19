package no.lagalt.server.Entity;

import jakarta.persistence.*;
import lombok.Getter;
import lombok.Setter;
import lombok.ToString;

import java.util.List;

@Getter
@Setter
@ToString
@Entity(name = "history")
public class History {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "hisotryId", nullable = false)
    private int id;

    @OneToMany
    @Column(name = "seenProject")
    private List<Project> seenProject;

    @OneToMany
    @Column(name = "clickedProject")
    private List<Project> clickedProject;

    @ManyToOne
    @JoinColumn(name = "lagalt_user")
    private LagaltUser lagaltUser;
}
