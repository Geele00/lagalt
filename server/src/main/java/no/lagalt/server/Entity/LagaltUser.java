package no.lagalt.server.Entity;

import jakarta.persistence.*;
import lombok.Getter;
import lombok.Setter;
import lombok.ToString;
import no.lagalt.server.Utils.Enum.Gender;

import java.util.Date;
import java.util.List;

@Getter
@Setter
@ToString
@Entity(name = "lagaltUser")
public class LagaltUser {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(nullable = false)
    private Integer userId;

    private String avatarUrl;

    @Column(nullable = false)
    private String userName;

    @Column(nullable = false)
    private String firstName;

    @Column(nullable = false)
    private String lastName;

    @Column(nullable = false)
    private Date dob;

    @Column(nullable = false)
    private Date dateOfCreation;

    @Column(nullable = false)
    private String email;

    private Gender gender;

    // private Enum roles;

    @Column(length = 510)
    private String bio;

    @ManyToMany(
            fetch = FetchType.LAZY)

    @JoinTable(
            name = "users_skills",
            joinColumns = {@JoinColumn(name = "user_id")},
            inverseJoinColumns = {@JoinColumn(name = "skill_id")})
    private List<Skill> skills;

    @OneToMany(mappedBy = "lagaltUser")
    private List<History> histories;

    @OneToMany(mappedBy = "lagaltUsers")
    private List<Project> projects;

    @OneToOne
    private Country country;
}