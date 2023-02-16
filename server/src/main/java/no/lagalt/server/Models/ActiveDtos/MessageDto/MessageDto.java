package no.lagalt.server.Models.ActiveDtos.MessageDto;

import java.time.LocalDateTime;

import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.NotNull;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import no.lagalt.server.Models.LagaltUser.LagaltUser;
@Data
@NoArgsConstructor
@AllArgsConstructor
public class MessageDto {
  @NotBlank(message = "Text field cannot be empty")
  private  String text;
  @NotNull(message = "User ID cannot be null")
  private  LagaltUser lagaltUser;
  private  LocalDateTime timeStamp;

  private int score;

}
