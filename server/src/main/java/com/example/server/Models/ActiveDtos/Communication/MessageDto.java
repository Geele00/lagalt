package com.example.server.Models.ActiveDtos.Communication;

import com.example.server.Models.Users.LagaltUser;
import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.NotNull;
import lombok.Data;

import java.time.LocalDateTime;
@Data
public class MessageDto {

    private @NotBlank(message = "Text field cannot be empty") String text;
    private @NotNull(message = "User cannot be null") LagaltUser lagaltUser;
    private @NotNull(message = "Message board cannot be null") LocalDateTime timeStamp;


}
