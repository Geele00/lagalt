package no.lagalt.server.Dtos.Message;

import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import java.time.LocalDateTime;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import lombok.ToString;
import no.lagalt.server.Entity.LagaltUser;

@Data
@NoArgsConstructor
@AllArgsConstructor
@ToString
public class MessageDto {

  @Id
  @GeneratedValue(strategy = GenerationType.IDENTITY)
  private Integer messageId;

  private String content;

  private LagaltUser author;

  private LocalDateTime creationDateTime;

  // private int score;

  private Integer channelId;
}
