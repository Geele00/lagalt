package no.lagalt.server.Dtos.Message;

import java.time.LocalDateTime;
import no.lagalt.server.Entity.LagaltUser;

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
