package com.example.server.Models.ActiveDtos.Communication;

import com.example.server.Models.Users.LagaltUser;
import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.NotNull;
import lombok.Data;

import java.time.LocalDateTime;
@Data
public class MessageDto {
    @NotBlank(message = "Text field cannot be empty")
    private  String text;
    @NotNull(message = "User cannot be null")
    private  LagaltUser lagaltUser;
    @NotNull(message = "TimeStamp cannot be null")
    private  LocalDateTime timeStamp;


}
