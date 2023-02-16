package no.lagalt.server.Models.Channel;

import jakarta.persistence.*;
import java.util.ArrayList;
import java.util.List;
import lombok.*;
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

  @OneToMany(mappedBy = "channel", cascade = CascadeType.ALL, orphanRemoval = true)
  private List<MessageBoard> messageBoards = new ArrayList<>();
}
