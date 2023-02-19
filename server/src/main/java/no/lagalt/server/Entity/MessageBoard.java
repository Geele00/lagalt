package no.lagalt.server.Entity;


import jakarta.persistence.*;
import java.time.LocalDate;
import lombok.Getter;
import lombok.Setter;
import lombok.ToString;



@Entity(name = "messageBoard")
@Getter
@Setter
@ToString
public class MessageBoard {
  @Id
  @GeneratedValue(strategy = GenerationType.IDENTITY)
  private int id;

  private String name;

  @OneToOne
  @JoinColumn(name = "projectId")
  private Project project;
/*
  @OneToMany(mappedBy = "messageBoards")
  private List<Channel> channel = new ArrayList<>();*/

  private LocalDate creationDate;

  private void removeMessageBoard() {

    project = null;
  //  channel = null;
  }
}
