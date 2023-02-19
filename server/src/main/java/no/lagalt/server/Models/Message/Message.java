package no.lagalt.server.Models.Message;

import jakarta.persistence.*;
import java.time.LocalDateTime;
import java.util.ArrayList;
import java.util.List;
import lombok.*;
import no.lagalt.server.Models.ActiveDtos.MessageDto.MessageLagaltUserDto;
import no.lagalt.server.Models.Channel.Channel;

@Entity
@Getter
@Setter
@ToString
public class Message {
  @Id
  @GeneratedValue(strategy = GenerationType.IDENTITY)
  private int id;

  private String text;

  private LocalDateTime timestamp;

  private int score;

 @Transient
  private MessageLagaltUserDto lagaltUsername;

  @OneToMany(mappedBy = "parentMessage", cascade = CascadeType.ALL, orphanRemoval = true)
  private List<Message> replies = new ArrayList<>();

  @ManyToOne
  @JoinColumn(name = "parentMessageId")
  private Message parentMessage;


  @ManyToOne(optional = false)
  @JoinColumn(name = "channelId")
  private Channel channel;
}
