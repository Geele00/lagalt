package no.lagalt.server.Entity;

import jakarta.persistence.*;
import java.time.LocalDateTime;
import java.util.ArrayList;
import java.util.List;
import lombok.*;
import org.springframework.format.annotation.DateTimeFormat;
import org.springframework.format.annotation.DateTimeFormat.ISO;

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
  @DateTimeFormat(iso = ISO.DATE_TIME)
  private LocalDateTime createdAt;

  @OneToOne(fetch = FetchType.LAZY)
  private LagaltUser author;

  @OneToOne(fetch = FetchType.LAZY)
  private LagaltUser recipient;

  @ManyToOne
  @JoinColumn(name = "replies")
  private Message parentMessage;

  @OneToMany(
      mappedBy = "parentMessage",
      cascade = {CascadeType.MERGE, CascadeType.DETACH, CascadeType.PERSIST, CascadeType.REFRESH},
      orphanRemoval = true)
  private List<Message> replies = new ArrayList<>();
}
