package no.lagalt.server.Entity;

import jakarta.persistence.*;
import java.time.LocalDate;
import java.util.ArrayList;
import java.util.List;
import lombok.Getter;
import lombok.Setter;
import lombok.ToString;

@Getter
@Setter
@ToString
@Entity(name = "messageBoard")
public class MessageBoard {
  @Id
  @GeneratedValue(strategy = GenerationType.IDENTITY)
  private int id;

  private String name;

  @OneToMany(mappedBy = "messageBoard", cascade = CascadeType.ALL, orphanRemoval = true)
  private List<Message> messages = new ArrayList<>();

  @OneToOne
  @JoinColumn(name = "projectId")
  private Project project;

  @ManyToOne
  @JoinColumn(name = "channelId")
  private Channel channel;

  private LocalDate creationDate;

  private void removeMessageBoard() {

    project = null;
    channel = null;
  }
}
