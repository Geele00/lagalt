package no.lagalt.server.Entity;

import jakarta.persistence.*;
import java.time.LocalDate;
import java.time.LocalDateTime;
import java.util.List;
import lombok.Getter;
import lombok.Setter;
import no.lagalt.server.Utils.Enum.Gender;
import no.lagalt.server.Utils.Enum.ProfileStatus;

@Getter
@Setter
@Entity(name = "lagaltUser")
public class LagaltUser {

  @Id
  @GeneratedValue(strategy = GenerationType.IDENTITY)
  @Column(nullable = false)
  private Integer userId;

  private String uid;

  private String avatarUrl;

  @Column(nullable = false)
  private String userName;

  @Column(nullable = false)
  private String firstName;

  @Column(nullable = false)
  private String lastName;

  @Column(nullable = false)
  private LocalDate dob;

  @Column(nullable = false)
  private String email;

  // @Column(nullable = false)
  private Gender gender;

  @OneToOne private Country country;

  // private Enum roles;

  @Column(length = 510)
  private String bio;

  @OneToOne private History history;

  @ManyToMany(fetch = FetchType.LAZY)
  @JoinTable(
      name = "users_skills",
      joinColumns = {@JoinColumn(name = "user_id")},
      inverseJoinColumns = {@JoinColumn(name = "skill_id")})
  private List<Skill> skills;

  @ManyToMany(fetch = FetchType.LAZY)
  @JoinTable(
      name = "users_notifications",
      joinColumns = {@JoinColumn(name = "user_id")},
      inverseJoinColumns = {@JoinColumn(name = "notification_id")})
  private List<Notification> notifications;

  @OneToMany(mappedBy = "owner")
  private List<Project> projects;

  @Column(nullable = false)
  private ProfileStatus profileStatus;

  @Column(nullable = false)
  private LocalDateTime createdAt;
}
