package no.lagalt.server.Models.Message;

import jakarta.persistence.*;
import java.time.LocalDateTime;
import java.util.ArrayList;
import java.util.List;
import lombok.*;
import no.lagalt.server.Models.LagaltUser.LagaltUser;
import no.lagalt.server.Models.MessageBoard.MessageBoard;

@Entity
@Getter
@Setter
@ToString
public class Message {
  @Id
  @GeneratedValue(strategy = GenerationType.IDENTITY)
  private int id;

  private String text;

  private LocalDateTime timestamp;

  private int score;

  @ManyToOne
  @JoinColumn(name = "altuserId")
  private LagaltUser lagaltUser;

  @ManyToOne
  @JoinColumn(name = "messageBoardId")
  private MessageBoard messageBoard;

  @OneToMany(mappedBy = "parentMessage", cascade = CascadeType.ALL, orphanRemoval = true)
  private List<Message> replies = new ArrayList<>();

  @ManyToOne
  @JoinColumn(name = "parentMessageId")
  private Message parentMessage;
}
