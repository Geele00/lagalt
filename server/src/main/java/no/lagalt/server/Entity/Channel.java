package no.lagalt.server.Entity;

import jakarta.persistence.*;
import java.time.LocalDateTime;
import java.util.List;
import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
@Entity(name = "channel")
public class Channel {

  @Id
  @GeneratedValue(strategy = GenerationType.IDENTITY)
  @Column(nullable = false)
  private Integer channelId;

  @Column(nullable = false)
  private String name;

  @OneToMany private List<Message> messages;

  @ManyToMany(fetch = FetchType.LAZY)
  private List<LagaltUser> users;

  @Column(nullable = false)
  private LocalDateTime createdAt;

  @ManyToOne(
      fetch = FetchType.LAZY,
      cascade = {CascadeType.MERGE, CascadeType.DETACH, CascadeType.PERSIST, CascadeType.REFRESH})
  @JoinTable(
      name = "message_boards_channels",
      joinColumns = {@JoinColumn(name = "channel_id")},
      inverseJoinColumns = {@JoinColumn(name = "message_board_id")})
  private MessageBoard messageBoard;
}
