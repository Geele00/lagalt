package no.lagalt.server.Models.ActiveDtos.MessageDto;

import java.time.LocalDateTime;
import java.util.ArrayList;
import java.util.List;

import com.fasterxml.jackson.annotation.JsonIgnore;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import lombok.ToString;
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
  private  MessageLagaltUserDto messageLagaltUserDto;
  private  LocalDateTime timeStamp;
  private int score;
  private int channelId;

}
