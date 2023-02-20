package no.lagalt.server.Entity;

import jakarta.persistence.*;

import java.time.LocalDate;
import java.util.ArrayList;
import java.util.List;
import lombok.*;
import no.lagalt.server.Entity.Message;

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
/*
  @ManyToOne
  @JoinColumn(name = "messageBoardId")
  private MessageBoard messageBoards;*/

  private LocalDate creationDate;



  @OneToMany(mappedBy = "channel",cascade = CascadeType.ALL,orphanRemoval = true)
  private List<Message> messages = new ArrayList<>();
}
