package no.lagalt.server.Entity;

import jakarta.persistence.*;
import java.util.ArrayList;
import java.util.List;
import lombok.*;

@Entity
@Getter
@Setter
@Table(name = "chat")
public class Chat {

  @Id
  @GeneratedValue(strategy = GenerationType.IDENTITY)
  @Column(nullable = false)
  private Integer chatId;

  @ManyToMany(cascade = CascadeType.ALL)
  @JoinTable(
      name = "users_chats",
      joinColumns = {@JoinColumn(name = "chat_id")},
      inverseJoinColumns = {@JoinColumn(name = "user_id")})
  private List<LagaltUser> users;

  @OneToMany(cascade = CascadeType.ALL, orphanRemoval = true)
  private List<Message> messages = new ArrayList<>();
}
