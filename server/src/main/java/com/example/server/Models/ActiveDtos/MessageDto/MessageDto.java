package com.example.server.Models.ActiveDtos.MessageDto;

import com.example.server.Models.LagaltUser.LagaltUser;

import java.time.LocalDateTime;

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
