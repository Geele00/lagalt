package no.lagalt.server.Models.MessageBoard;

import com.fasterxml.jackson.annotation.JsonIgnore;
import jakarta.persistence.*;
import java.time.LocalDate;
import java.util.ArrayList;
import java.util.List;
import lombok.Getter;
import lombok.Setter;
import lombok.ToString;
import no.lagalt.server.Models.Channel.Channel;
import no.lagalt.server.Models.Message.Message;
import no.lagalt.server.Models.Project.Project;

@Entity(name = "messageBoard")
@Getter
@Setter
@ToString
public class MessageBoard {
  @Id
  @GeneratedValue(strategy = GenerationType.IDENTITY)
  private int messageBoardId;

  private String name;

  @OneToMany(mappedBy = "messageBoard", cascade = CascadeType.ALL, orphanRemoval = true)
  private List<Message> messages = new ArrayList<>();

  @OneToOne
  @JoinColumn(name = "projectId")
  private Project project;

  @OneToMany(mappedBy = "messageBoards")
  private List<Channel> channel = new ArrayList<>();

  private LocalDate creationDate;

  private void removeMessageBoard() {

    project = null;
    channel = null;
  }
}
