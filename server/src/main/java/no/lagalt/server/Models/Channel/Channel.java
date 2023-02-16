package no.lagalt.server.Models.Channel;

import jakarta.persistence.*;
import java.util.ArrayList;
import java.util.List;
import lombok.*;
import no.lagalt.server.Models.Message.Message;
import no.lagalt.server.Models.MessageBoard.MessageBoard;

@Entity
@Getter
@Setter
@ToString
@Table(name = "channel")
public class Channel {

  @Id
  @GeneratedValue(strategy = GenerationType.IDENTITY)
  private int id;

  private String name;

  @ManyToOne
  @JoinColumn(name = "messageBoardId")
  private MessageBoard messageBoards;



  @OneToMany
  private List<Message> messages = new ArrayList<>();
}
