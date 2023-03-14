package no.lagalt.server.Entity;

import jakarta.persistence.*;
import java.time.LocalDateTime;
import java.util.List;
import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
@Entity(name = "message_board")
public class MessageBoard {

  @Id
  @GeneratedValue(strategy = GenerationType.IDENTITY)
  @Column(nullable = false)
  private int messageBoardId;

  @Column(nullable = false)
  private String name;

  @OneToOne private Project project;

  @Column(nullable = false)
  private LocalDateTime createdAt;

  @OneToMany(
      cascade = {CascadeType.MERGE, CascadeType.DETACH, CascadeType.PERSIST, CascadeType.REFRESH})
  @JoinTable(
      name = "message_boards_channels",
      joinColumns = {@JoinColumn(name = "message_board_id")},
      inverseJoinColumns = {@JoinColumn(name = "channel_id")})
  private List<Channel> channels;
}
