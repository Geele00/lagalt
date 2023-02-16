package no.lagalt.server.Models.Notification;

import jakarta.persistence.*;
import lombok.Getter;
import lombok.Setter;
import lombok.ToString;
import no.lagalt.server.Models.LagaltUser.LagaltUser;
import no.lagalt.server.Models.Project.Project;

@Entity
@Getter
@Setter
@ToString
@Table(name = "notification")
public class Notification {
  @Id
  @GeneratedValue(strategy = GenerationType.IDENTITY)
  @Column(name = "notificationId", nullable = false)
  private int notificationId;

  @Column(name = "ProjectName")
  private String nameOfProject;

  private String content;
  @ManyToOne() private LagaltUser lagaltUser;
  @ManyToOne private Project project;
}
