package no.lagalt.server.Entity;

import jakarta.persistence.*;
import java.time.LocalDateTime;
import java.util.ArrayList;
import java.util.List;
import lombok.*;

@Entity
@Getter
@Setter
@ToString
@Table(name = "channel")
public class Channel {

  @Id
  @GeneratedValue(strategy = GenerationType.IDENTITY)
  private int channelId;

  private String name;

  /*
  @ManyToOne
  @JoinColumn(name = "messageBoardId")
  private MessageBoard messageBoards;*/

  private LocalDateTime creationDate;

  @OneToMany(mappedBy = "channel", cascade = CascadeType.ALL, orphanRemoval = true)
  private List<Message> messages = new ArrayList<>();
}
