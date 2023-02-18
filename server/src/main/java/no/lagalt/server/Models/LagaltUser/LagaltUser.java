package no.lagalt.server.Models.LagaltUser;

import jakarta.persistence.*;
import lombok.Getter;
import lombok.Setter;
import lombok.ToString;
import no.lagalt.server.Models.Country.Country;
import no.lagalt.server.Models.History.History;
import no.lagalt.server.Models.Project.Project;
import no.lagalt.server.Models.Skill.Skill;
import no.lagalt.server.Utils.Enum.Gender;

import java.util.Date;
import java.util.List;

@Getter
@Setter
@Entity(name = "lagaltUser")
@ToString
public class LagaltUser {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "lagaltUserId", nullable = false)
    private int id;

    private String avatarUrl;

    @Column(name = "userName", nullable = false)
    private String userName;

    @Column(name = "firstName", nullable = false)
    private String firstName;

    @Column(name = "lastName", nullable = false)
    private String lastName;

    @Column(name = "dob", nullable = false)
    private Date dob;

    @Column(name = "dateOfCreation", nullable = false)
    private Date dateOfCreation;

    @Column(name = "email", nullable = false)
    private String email;

    @Column(name = "gender")
    private Gender gender;

    @Column(name = "roles")
    private Enum roles;

    @Column(name = "bio", length = 510)
    private String bio;

    @OneToMany(mappedBy = "users")
    @Column(name = "users_Skills")
    private List<Skill> skills;

    @OneToMany(mappedBy = "lagaltUser")
    @Column(name = "users_Skills")
    private List<History> Histories;

    @OneToMany(mappedBy = "lagaltUsers")
    @Column(name = "userProject")
    private List<Project> projects;

    @OneToOne
    private Country country;
}
