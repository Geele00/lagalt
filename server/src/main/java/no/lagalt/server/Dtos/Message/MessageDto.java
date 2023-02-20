package no.lagalt.server.Dtos.Message;

import java.time.LocalDate;
import java.time.LocalDateTime;

import com.fasterxml.jackson.annotation.JsonIgnore;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import lombok.ToString;
import no.lagalt.server.Dtos.MessageDto.MessageLagaltUserDto;

@Data
@NoArgsConstructor
@AllArgsConstructor
@ToString
public class MessageDto {
  @Id
  @GeneratedValue(strategy = GenerationType.IDENTITY)
  @JsonIgnore
  private int messageDtoId;
  private  String text;
  private MessageLagaltUserDto messageLagaltUserDto;
  private LocalDateTime timeStamp;
  private int score;
  private int channelId;

}
