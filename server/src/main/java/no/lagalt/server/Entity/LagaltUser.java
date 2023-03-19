package no.lagalt.server.Entity;

import jakarta.persistence.*;
import java.time.LocalDate;
import java.time.LocalDateTime;
import java.util.List;
import lombok.Getter;
import lombok.Setter;
import no.lagalt.server.Enum.Gender;
import no.lagalt.server.Enum.ProfileStatus;

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
  private String username;

  @Column(nullable = false)
  private String firstName;

  @Column(nullable = false)
  private String lastName;

  @Column(nullable = false)
  private LocalDate dob;

  @Column(nullable = false)
  private String email;

  @Column(nullable = false)
  private Gender gender;

  @ManyToOne private Country country;

  @ManyToOne private City city;

  @Column(length = 510)
  private String bio;

  @Column(nullable = false)
  private ProfileStatus profileStatus;

  @Column(nullable = false)
  private LocalDateTime createdAt;

  @OneToOne(cascade = CascadeType.ALL, fetch = FetchType.LAZY, mappedBy = "lagaltUser")
  private History history = new History();

  @ManyToMany(
      fetch = FetchType.LAZY,
      cascade = {CascadeType.MERGE, CascadeType.DETACH, CascadeType.PERSIST, CascadeType.REFRESH})
  @JoinTable(
      name = "users_chats",
      joinColumns = {@JoinColumn(name = "user_id")},
      inverseJoinColumns = {@JoinColumn(name = "chat_id")})
  private List<Chat> chats;

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

  @OneToMany(fetch = FetchType.LAZY, cascade = CascadeType.ALL)
  @JoinTable(
      name = "owners_projects",
      joinColumns = {@JoinColumn(name = "user_id")},
      inverseJoinColumns = {@JoinColumn(name = "project_id")})
  private List<Project> projects;

  @ManyToMany(
      fetch = FetchType.LAZY,
      cascade = {CascadeType.MERGE, CascadeType.DETACH, CascadeType.PERSIST, CascadeType.REFRESH})
  @JoinTable(
      name = "admins_projects",
      joinColumns = {@JoinColumn(name = "user_id")},
      inverseJoinColumns = {@JoinColumn(name = "project_id")})
  private List<LagaltUser> adminInProjects;

  @ManyToMany(
      fetch = FetchType.LAZY,
      cascade = {CascadeType.MERGE, CascadeType.DETACH, CascadeType.PERSIST, CascadeType.REFRESH})
  @JoinTable(
      name = "collaborators_projects",
      joinColumns = {@JoinColumn(name = "user_id")},
      inverseJoinColumns = {@JoinColumn(name = "project_id")})
  private List<LagaltUser> collaboratingInProjects;
}
