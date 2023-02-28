package no.lagalt.server.Entity;

import jakarta.persistence.*;
import java.time.LocalDateTime;
import lombok.Getter;
import lombok.Setter;

@Entity(name = "messageBoard")
@Getter
@Setter
public class MessageBoard {

  @Id
  @GeneratedValue(strategy = GenerationType.IDENTITY)
  @Column(nullable = false)
  private int messageBoardId;

  @Column(nullable = false)
  private String name;

  @OneToOne private Project project;

  @Column(nullable = false)
  private LocalDateTime creationDatetime;
}
