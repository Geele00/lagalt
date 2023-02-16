package no.lagalt.server.Models.ActiveDtos.MessageDto;

import java.time.LocalDateTime;
import no.lagalt.server.Models.LagaltUser.LagaltUser;

public class MessageDto {

  private final String text;
  private final LagaltUser lagaltUser;
  private final LocalDateTime timeStamp;

  public MessageDto(String text, LagaltUser lagaltUser, LocalDateTime timeStamp) {
    this.text = text;
    this.lagaltUser = lagaltUser;
    this.timeStamp = timeStamp;
  }
}
