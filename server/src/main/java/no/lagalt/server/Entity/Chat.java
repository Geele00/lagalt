package no.lagalt.server.Entity;

import jakarta.persistence.*;
import java.util.List;
import lombok.*;

@Entity
@Getter
@Setter
@Table(name = "chat")
public class Chat {

  @GeneratedValue(strategy = GenerationType.IDENTITY)
  @Id
  @Column(nullable = false)
  private Integer chatId;

  @ManyToMany(
      fetch = FetchType.LAZY,
      // mappedBy = "chats",
      cascade = {CascadeType.MERGE, CascadeType.DETACH, CascadeType.PERSIST, CascadeType.REFRESH})
  @JoinTable(
      name = "users_chats",
      joinColumns = {@JoinColumn(name = "chat_id")},
      inverseJoinColumns = {@JoinColumn(name = "user_id")})
  private List<LagaltUser> users;

  @OneToMany(cascade = CascadeType.ALL, orphanRemoval = true)
  private List<Message> messages;
}
