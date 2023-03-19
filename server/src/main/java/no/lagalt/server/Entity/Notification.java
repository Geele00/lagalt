package no.lagalt.server.Entity;

import jakarta.persistence.*;
import java.util.List;
import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
@Entity(name = "notification")
public class Notification {

  @Id
  @GeneratedValue(strategy = GenerationType.IDENTITY)
  @Column(nullable = false)
  private int notificationId;

  @Column(nullable = false)
  private String title;

  @Column(nullable = false)
  private String content;

  @Transient
  @ManyToMany(fetch = FetchType.LAZY)
  private List<LagaltUser> recipients;
}
