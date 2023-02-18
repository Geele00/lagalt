package no.lagalt.server.Models.History;

import jakarta.persistence.*;
import lombok.Getter;
import lombok.Setter;
import lombok.ToString;
import no.lagalt.server.Models.LagaltUser.LagaltUser;
import no.lagalt.server.Models.Project.Project;

import java.util.List;

@Entity
@Getter
@Setter
@ToString
@Table(name = "History")
public class History {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "hisotryId", nullable = false)
    private int hisotryId;

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
