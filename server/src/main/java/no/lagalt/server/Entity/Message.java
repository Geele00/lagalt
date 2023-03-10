package no.lagalt.server.Entity;

import jakarta.persistence.*;
import java.time.LocalDateTime;
import java.util.ArrayList;
import java.util.List;
import lombok.*;

@Getter
@Setter
@Entity(name = "message")
public class Message {

  @Id
  @GeneratedValue(strategy = GenerationType.IDENTITY)
  @Column(nullable = false)
  private Integer messageId;

  @Column(nullable = false)
  private String content;

  @Column(nullable = false)
  private LocalDateTime createdAt;

  @OneToMany(mappedBy = "parentMessage", cascade = CascadeType.ALL, orphanRemoval = true)
  private List<Message> replies = new ArrayList<>();

  @ManyToOne
  @JoinColumn(name = "replies")
  private Message parentMessage;

  @OneToOne private LagaltUser author;

  @OneToOne private LagaltUser recipient;

  @ManyToOne(optional = true)
  @JoinColumn(name = "messages")
  private Channel channel;
}
